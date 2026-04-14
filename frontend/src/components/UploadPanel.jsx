import { useState, useRef, useCallback, useEffect } from 'react'

const API = import.meta.env.VITE_API_URL || ''

export default function UploadPanel({ onIngestComplete }) {
  const [dragging, setDragging] = useState(false)
  const [queue, setQueue] = useState([])   // [{ name, status: 'pending'|'processing'|'done'|'error', detail }]
  const [papers, setPapers] = useState([])
  const [graphStats, setGraphStats] = useState(null)
  const fileInputRef = useRef()
  const processingRef = useRef(false)
  const queueRef = useRef([])

  const fetchStats = useCallback(async () => {
    try {
      const [graphRes, papersRes] = await Promise.all([
        fetch(`${API}/api/graph`),
        fetch(`${API}/api/papers`),
      ])
      const graph = await graphRes.json()
      const paperList = await papersRes.json()
      setGraphStats({ nodes: graph.nodes?.length || 0, edges: graph.edges?.length || 0 })
      setPapers(paperList || [])
    } catch {
      // backend not up yet
    }
  }, [])

  useEffect(() => { fetchStats() }, [fetchStats])

  const updateItem = useCallback((name, patch) => {
    setQueue(q => q.map(item => item.name === name ? { ...item, ...patch } : item))
    queueRef.current = queueRef.current.map(item => item.name === name ? { ...item, ...patch } : item)
  }, [])

  const processNext = useCallback(async () => {
    if (processingRef.current) return
    const pending = queueRef.current.find(i => i.status === 'pending')
    if (!pending) return

    processingRef.current = true
    updateItem(pending.name, { status: 'processing' })

    const formData = new FormData()
    formData.append('file', pending.file)

    try {
      const res = await fetch(`${API}/api/ingest`, { method: 'POST', body: formData })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Ingest failed')
      updateItem(pending.name, { status: 'done', detail: `+${data.nodes_added} nodes · +${data.edges_added} edges` })
      fetchStats()
      onIngestComplete()
    } catch (e) {
      updateItem(pending.name, { status: 'error', detail: e.message })
    } finally {
      processingRef.current = false
      processNext()
    }
  }, [updateItem, fetchStats, onIngestComplete])

  const enqueueFiles = useCallback((files) => {
    const mdFiles = Array.from(files).filter(f => f.name.toLowerCase().endsWith('.md'))
    if (!mdFiles.length) return

    const newItems = mdFiles.map(f => ({ name: f.name, file: f, status: 'pending', detail: null }))
    setQueue(q => [...q, ...newItems])
    queueRef.current = [...queueRef.current, ...newItems]
    processNext()
  }, [processNext])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    setDragging(false)
    enqueueFiles(e.dataTransfer.files)
  }, [enqueueFiles])

  const handleFileChange = useCallback((e) => {
    enqueueFiles(e.target.files)
    e.target.value = ''
  }, [enqueueFiles])

  const statusIcon = (status) => {
    if (status === 'pending')    return <span style={{ color: 'var(--text-muted)' }}>·</span>
    if (status === 'processing') return <span className="spinner" />
    if (status === 'done')       return <span style={{ color: 'var(--accent2)' }}>✓</span>
    if (status === 'error')      return <span style={{ color: 'var(--accent3)' }}>✗</span>
  }

  return (
    <div className="upload-panel">
      <h2>Upload Papers</h2>

      <div
        className={`drop-zone ${dragging ? 'dragover' : ''}`}
        onDragOver={e => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="icon">📝</div>
        <p>Drop one or more Markdown files here</p>
        <p className="hint">or click to browse</p>
        <input
          ref={fileInputRef}
          type="file"
          accept=".md"
          multiple
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>

      {queue.length > 0 && (
        <>
          <hr className="divider" />
          <h2>Processing Queue</h2>
          <div className="papers-list">
            {queue.map((item, i) => (
              <div key={i} className="paper-item" style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <div style={{ marginTop: 2, flexShrink: 0 }}>{statusIcon(item.status)}</div>
                <div>
                  <div className="title">{item.name}</div>
                  {item.detail && (
                    <div className="summary" style={{ color: item.status === 'error' ? 'var(--accent3)' : undefined }}>
                      {item.detail}
                    </div>
                  )}
                  {item.status === 'processing' && (
                    <div className="summary">Processing… this may take 30–60 seconds</div>
                  )}
                  {item.status === 'pending' && (
                    <div className="summary">Waiting…</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {graphStats && graphStats.nodes > 0 && (
        <>
          <hr className="divider" />
          <div className="stat-row">
            <div className="stat">
              <div className="val">{graphStats.nodes}</div>
              <div className="lbl">Concepts</div>
            </div>
            <div className="stat">
              <div className="val">{graphStats.edges}</div>
              <div className="lbl">Relations</div>
            </div>
            <div className="stat">
              <div className="val">{papers.length}</div>
              <div className="lbl">Papers</div>
            </div>
          </div>
        </>
      )}

      {papers.length > 0 && (
        <>
          <hr className="divider" />
          <h2>Ingested Papers</h2>
          <div className="papers-list">
            {papers.map((p, i) => (
              <div key={i} className="paper-item">
                <div className="title">{p.title}</div>
                <div className="summary">{p.summary}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
