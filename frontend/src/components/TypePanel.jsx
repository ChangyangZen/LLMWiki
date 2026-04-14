import { useEffect, useState, useCallback } from 'react'
import { TYPE_COLORS, DEFAULT_COLOR, formatNodeType } from './graphTheme'

const API = import.meta.env.VITE_API_URL || ''

export default function TypePanel({ type, version, onNodeSelect, onNodeLocate, onClose }) {
  const [nodes, setNodes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchTypeNodes = useCallback(async () => {
    if (!type) return

    setLoading(true)
    setError('')

    try {
      const res = await fetch(`${API}/api/graph`)
      const graph = await res.json()
      const filtered = (graph.nodes || [])
        .filter(node => node.type === type)
        .sort((a, b) => a.label.localeCompare(b.label))

      setNodes(filtered)
    } catch (e) {
      console.error(e)
      setError('Failed to load nodes for this type.')
    } finally {
      setLoading(false)
    }
  }, [type])

  useEffect(() => {
    fetchTypeNodes()
  }, [fetchTypeNodes, version])

  if (!type) return null

  const color = TYPE_COLORS[type] || DEFAULT_COLOR
  const typeLabel = formatNodeType(type)
  const handleItemKeyDown = (event, node) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onNodeSelect(node)
    }
  }

  return (
    <div className="type-panel">
      <div className="node-header">
        <div>
          <span
            className="node-type-badge"
            style={{ background: color + '22', color }}
          >
            {typeLabel}
          </span>
          <h2 style={{ marginTop: 6 }}>{typeLabel} Nodes</h2>
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

      <p className="type-summary">
        {loading ? 'Loading nodes...' : `${nodes.length} ${typeLabel.toLowerCase()} node${nodes.length === 1 ? '' : 's'} in the graph.`}
      </p>

      <hr className="divider" />

      {error ? (
        <div className="status-box error">{error}</div>
      ) : loading ? (
        <div style={{ color: '#8b949e', fontSize: 13 }}>
          <span className="spinner" /> Loading nodes...
        </div>
      ) : nodes.length === 0 ? (
        <div className="type-empty">No nodes of this type are in the graph yet.</div>
      ) : (
        <div className="type-node-list">
          {nodes.map(node => (
            <div
              key={node.id}
              className="type-node-item"
              role="button"
              tabIndex={0}
              onClick={() => onNodeSelect(node)}
              onKeyDown={(event) => handleItemKeyDown(event, node)}
            >
              <div className="title">{node.label}</div>
              <div className="summary">{node.description}</div>
              <div className="type-node-actions">
                <button
                  type="button"
                  className="type-node-link"
                  onClick={(event) => {
                    event.stopPropagation()
                    onNodeLocate?.(node)
                  }}
                >
                  Show in graph
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
