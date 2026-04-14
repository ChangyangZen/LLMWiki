import { useEffect, useState, useCallback } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { TYPE_COLORS, DEFAULT_COLOR, formatNodeType } from './graphTheme'

const API = import.meta.env.VITE_API_URL || ''

function splitFrontmatter(content) {
  if (!content?.startsWith('---\n')) {
    return { metadata: {}, body: content || '' }
  }

  const parts = content.split('\n---\n', 2)
  if (parts.length < 2) {
    return { metadata: {}, body: content || '' }
  }

  const frontmatter = parts[0].slice(4)
  const metadata = {}

  for (const line of frontmatter.split('\n')) {
    const separatorIndex = line.indexOf(':')
    if (separatorIndex === -1) continue

    const key = line.slice(0, separatorIndex).trim()
    const value = line.slice(separatorIndex + 1).trim()
    if (key) metadata[key] = value
  }

  return {
    metadata,
    body: parts[1].trimStart(),
  }
}

export default function NodePanel({ node, onClose, onTypeClick, onLocateInGraph }) {
  const [wikiContent, setWikiContent] = useState('')
  const [nodeMeta, setNodeMeta] = useState(node)
  const [relations, setRelations] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchNode = useCallback(async (nodeId) => {
    setLoading(true)
    try {
      const [nodeRes, graphRes] = await Promise.all([
        fetch(`${API}/api/node/${nodeId}`),
        fetch(`${API}/api/graph`),
      ])
      const nodeData = await nodeRes.json()
      const graph = await graphRes.json()
      const parsedWiki = splitFrontmatter(nodeData.content || '')

      setWikiContent(parsedWiki.body)
      setNodeMeta(nodeData.node || null)

      // Find related nodes
      const edges = graph.edges || []
      const nodes = graph.nodes || []
      const nodeMap = Object.fromEntries(nodes.map(n => [n.id, n]))

      const related = edges
        .filter(e => e.source === nodeId || e.target === nodeId)
        .map(e => {
          const otherId = e.source === nodeId ? e.target : e.source
          const direction = e.source === nodeId ? '→' : '←'
          return {
            node: nodeMap[otherId],
            relation: e.relation,
            direction,
            description: e.description,
          }
        })
        .filter(r => r.node)

      setRelations(related)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    setNodeMeta(node)
    if (node?.id) fetchNode(node.id)
  }, [node, fetchNode])

  if (!node) return null

  const currentNode = nodeMeta || node
  const color = TYPE_COLORS[currentNode.type] || DEFAULT_COLOR
  const sources = currentNode.sources || []
  const metadataRows = [
    { label: 'id', value: currentNode.id },
    { label: 'label', value: currentNode.label },
    { label: 'type', value: currentNode.type },
  ]

  return (
    <div className="node-panel">
      <div className="node-header">
        <div>
          <button
            type="button"
            className="type-badge-button"
            onClick={() => onTypeClick?.(currentNode.type)}
          >
            <span
              className="node-type-badge"
              style={{ background: color + '22', color }}
            >
              {formatNodeType(currentNode.type)}
            </span>
          </button>
          <h2 style={{ marginTop: 6 }}>{currentNode.label}</h2>
        </div>
        <button
          onClick={onClose}
          style={{
            marginLeft: 'auto',
            background: 'transparent',
            border: 'none',
            color: '#8b949e',
            cursor: 'pointer',
            fontSize: 18,
            padding: '0 4px',
            flexShrink: 0,
          }}
          title="Close"
        >
          ×
        </button>
      </div>

      <p className="node-desc">{currentNode.description}</p>

      <div className="node-metadata">
        {metadataRows.map(row => (
          <div key={row.label} className="node-metadata-row">
            <span className="node-metadata-key">{row.label}</span>
            <span className="node-metadata-value">{row.value}</span>
          </div>
        ))}
        <div className="node-actions">
          <button
            type="button"
            className="node-action-link"
            onClick={() => onLocateInGraph?.(currentNode)}
          >
            Show in graph
          </button>
        </div>
      </div>

      <hr className="divider" />

      <div className="sources-section">
        <h3>Sources</h3>
        {sources.length > 0 ? (
          <div className="sources-list">
            {sources.map((source, index) => (
              <div key={source.paper_id || `${source.paper_title}-${index}`} className="source-card">
                <div className="source-title">{source.paper_title || 'Untitled paper'}</div>
                {source.citation && (
                  <div className="source-citation">{source.citation}</div>
                )}
                {source.source_url && (
                  <a
                    className="source-link"
                    href={source.source_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {source.source_url}
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="source-empty">
            Source attribution is not stored for this legacy node yet. Re-ingesting the paper will attach precise citation metadata.
          </div>
        )}
      </div>

      <hr className="divider" />

      {loading ? (
        <div style={{ color: '#8b949e', fontSize: 13 }}>
          <span className="spinner" /> Loading wiki...
        </div>
      ) : (
        <div className="wiki-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {wikiContent}
          </ReactMarkdown>
        </div>
      )}

      {relations.length > 0 && (
        <>
          <hr className="divider" />
          <div className="relations-section">
            <h3>Related Concepts ({relations.length})</h3>
            <div>
              {relations.map((r, i) => (
                <span
                  key={i}
                  className="relation-chip"
                  title={r.description}
                >
                  <span className="rel-label">{r.direction} {r.relation}</span>
                  {r.node.label}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
