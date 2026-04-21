import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { TYPE_COLORS, DEFAULT_COLOR } from './graphTheme'

const API = import.meta.env.VITE_API_URL || ''

function highlight(text, query) {
  if (!query || !text) return text
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return text
  return (
    <>
      {text.slice(0, idx)}
      <mark>{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  )
}

export default function SearchBox({ onSelectNode, onSelectPaper, graphVersion }) {
  const [query, setQuery] = useState('')
  const [allNodes, setAllNodes] = useState([])
  const [nodeResults, setNodeResults] = useState([])
  const [paperResults, setPaperResults] = useState([])
  const [paperLoading, setPaperLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [cursor, setCursor] = useState(-1)
  const inputRef = useRef()
  const dropdownRef = useRef()

  // Fetch nodes whenever graph updates
  useEffect(() => {
    fetch(`${API}/api/graph`)
      .then(r => r.json())
      .then(g => setAllNodes(g.nodes || []))
      .catch(() => {})
  }, [graphVersion])

  // Client-side node filter (instant)
  useEffect(() => {
    const q = query.trim().toLowerCase()
    if (!q) {
      setNodeResults([])
      setOpen(false)
      return
    }
    const hits = allNodes.filter(n =>
      n.label?.toLowerCase().includes(q) ||
      n.description?.toLowerCase().includes(q) ||
      n.type?.toLowerCase().includes(q)
    )
    hits.sort((a, b) => {
      const aL = a.label?.toLowerCase() || ''
      const bL = b.label?.toLowerCase() || ''
      const aStarts = aL.startsWith(q) ? 0 : 1
      const bStarts = bL.startsWith(q) ? 0 : 1
      if (aStarts !== bStarts) return aStarts - bStarts
      return aL.localeCompare(bL)
    })
    setNodeResults(hits.slice(0, 20))
    setOpen(true)
    setCursor(-1)
  }, [query, allNodes])

  // Debounced backend paper search (300ms)
  useEffect(() => {
    const q = query.trim()
    if (q.length < 2) {
      setPaperResults([])
      setPaperLoading(false)
      return
    }

    setPaperLoading(true)
    const timer = setTimeout(() => {
      fetch(`${API}/api/search/papers?q=${encodeURIComponent(q)}&limit=10`)
        .then(r => r.json())
        .then(papers => {
          setPaperResults(papers || [])
          setPaperLoading(false)
        })
        .catch(() => {
          setPaperResults([])
          setPaperLoading(false)
        })
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  // Combined flat list for keyboard navigation
  const combinedItems = useMemo(() => {
    const items = []
    for (const node of nodeResults) {
      items.push({ ...node, _resultType: 'node' })
    }
    for (const paper of paperResults) {
      items.push({ ...paper, _resultType: 'paper' })
    }
    return items
  }, [nodeResults, paperResults])

  const select = useCallback((item) => {
    setQuery('')
    setOpen(false)
    setCursor(-1)
    if (item._resultType === 'paper') {
      onSelectPaper?.(item)
    } else {
      onSelectNode(item)
    }
  }, [onSelectNode, onSelectPaper])

  const handleKeyDown = useCallback((e) => {
    if (!open || combinedItems.length === 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setCursor(c => Math.min(c + 1, combinedItems.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setCursor(c => Math.max(c - 1, 0))
    } else if (e.key === 'Enter' && cursor >= 0 && cursor < combinedItems.length) {
      e.preventDefault()
      select(combinedItems[cursor])
    } else if (e.key === 'Escape') {
      setOpen(false)
      setQuery('')
    }
  }, [open, cursor, combinedItems, select])

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current?.contains(e.target) && e.target !== inputRef.current) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const hasAnyResults = combinedItems.length > 0 || paperLoading
  // Find where paper section starts in the flat list
  const paperStartIdx = nodeResults.length

  return (
    <div className="search-box">
      <div className="search-input-wrap">
        <span className="search-icon">🔍</span>
        <input
          ref={inputRef}
          className="search-input"
          type="text"
          placeholder="Search nodes & papers…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query && hasAnyResults && setOpen(true)}
          autoComplete="off"
          spellCheck={false}
        />
        {query && (
          <button className="search-clear" onClick={() => { setQuery(''); setOpen(false); inputRef.current?.focus() }}>
            ×
          </button>
        )}
      </div>

      {open && hasAnyResults && (
        <ul className="search-dropdown" ref={dropdownRef}>
          {/* Node results */}
          {nodeResults.map((node, i) => {
            const color = TYPE_COLORS[node.type] || DEFAULT_COLOR
            const labelHit = node.label?.toLowerCase().includes(query.toLowerCase())
            return (
              <li
                key={`n-${node.id}`}
                className={`search-result${i === cursor ? ' active' : ''}`}
                onMouseDown={() => select(combinedItems[i])}
                onMouseEnter={() => setCursor(i)}
              >
                <span className="search-result-dot" style={{ background: color }} />
                <div className="search-result-text">
                  <span className="search-result-label">
                    {highlight(node.label, query)}
                  </span>
                  {!labelHit && node.description && (
                    <span className="search-result-desc">
                      {highlight(
                        node.description.length > 80
                          ? node.description.slice(0, 80) + '…'
                          : node.description,
                        query
                      )}
                    </span>
                  )}
                </div>
                <span className="search-result-type" style={{ color }}>
                  {node.type}
                </span>
              </li>
            )
          })}

          {nodeResults.length === 20 && (
            <li className="search-overflow">Showing first 20 node results</li>
          )}

          {/* Papers section */}
          {(paperResults.length > 0 || paperLoading) && (
            <li className="search-section-header">
              Papers {paperLoading && <span className="spinner" style={{ width: 10, height: 10, borderWidth: 1.5 }} />}
            </li>
          )}

          {paperResults.map((paper, i) => {
            const globalIdx = paperStartIdx + i
            return (
              <li
                key={`p-${paper.paper_id}`}
                className={`search-result search-result-paper${globalIdx === cursor ? ' active' : ''}`}
                onMouseDown={() => select(combinedItems[globalIdx])}
                onMouseEnter={() => setCursor(globalIdx)}
              >
                <span className="search-result-dot" style={{ background: '#8b949e' }}>📄</span>
                <div className="search-result-text">
                  <span className="search-result-label">
                    {highlight(paper.title, query)}
                  </span>
                  {paper.snippet && (
                    <span className="search-result-desc search-result-snippet">
                      {highlight(paper.snippet, query)}
                    </span>
                  )}
                </div>
                <span className="search-result-type" style={{ color: '#8b949e' }}>
                  paper
                </span>
              </li>
            )
          })}
        </ul>
      )}

      {open && query && !hasAnyResults && (
        <div className="search-dropdown search-empty">
          {paperLoading ? 'Searching papers…' : `No results for "${query}"`}
        </div>
      )}
    </div>
  )
}
