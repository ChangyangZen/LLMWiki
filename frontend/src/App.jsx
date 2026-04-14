import { useState, useCallback } from 'react'
import KnowledgeGraph from './components/KnowledgeGraph'
import NodePanel from './components/NodePanel'
import TypePanel from './components/TypePanel'
import UploadPanel from './components/UploadPanel'
import { formatNodeType } from './components/graphTheme'
import './App.css'

export default function App() {
  const [selectedNode, setSelectedNode] = useState(null)
  const [selectedType, setSelectedType] = useState(null)
  const [graphFocusTarget, setGraphFocusTarget] = useState(null)
  const [graphVersion, setGraphVersion] = useState(0)
  const [graphResetToken, setGraphResetToken] = useState(0)
  const [sidebarTab, setSidebarTab] = useState('upload') // 'upload' | 'type' | 'node'

  const handleGraphNodeClick = useCallback((node) => {
    setSelectedNode(node)
    setSidebarTab('node')
  }, [])

  const handleTypeClick = useCallback((type) => {
    setSelectedType(type)
    setSidebarTab('type')
  }, [])

  const handleTypeNodeClick = useCallback((node) => {
    setSelectedType(node.type)
    setSelectedNode(node)
    setSidebarTab('node')
  }, [])

  const handleLocateNodeInGraph = useCallback((node) => {
    setSelectedType(node.type)
    setSelectedNode(node)
    setSidebarTab('type')
    setGraphFocusTarget({
      id: node.id,
      nonce: Date.now(),
    })
  }, [])

  const handleFocusNodeInGraph = useCallback((node) => {
    setSelectedType(node.type)
    setSelectedNode(node)
    setGraphFocusTarget({
      id: node.id,
      nonce: Date.now(),
    })
  }, [])

  const handleIngestComplete = useCallback(() => {
    setGraphVersion(v => v + 1)
  }, [])

  const handleResetGraphView = useCallback(() => {
    setSelectedNode(null)
    setSelectedType(null)
    setGraphFocusTarget(null)
    setSidebarTab('upload')
    setGraphResetToken(token => token + 1)
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-left">
          <h1>LLM Wiki</h1>
          <span className="subtitle">Research Knowledge Graph</span>
        </div>
        <div className="header-tabs">
          <button
            className={sidebarTab === 'upload' ? 'tab active' : 'tab'}
            onClick={() => setSidebarTab('upload')}
          >
            + Upload Paper
          </button>
          {selectedType && (
            <button
              className={sidebarTab === 'type' ? 'tab active' : 'tab'}
              onClick={() => setSidebarTab('type')}
            >
              {formatNodeType(selectedType)}
            </button>
          )}
          {selectedNode && (
            <button
              className={sidebarTab === 'node' ? 'tab active' : 'tab'}
              onClick={() => setSidebarTab('node')}
            >
              {selectedNode.label}
            </button>
          )}
        </div>
      </header>

      <div className="app-body">
        <aside className="sidebar">
          {sidebarTab === 'upload' ? (
            <UploadPanel onIngestComplete={handleIngestComplete} />
          ) : sidebarTab === 'type' ? (
            <TypePanel
              type={selectedType}
              version={graphVersion}
              onNodeSelect={handleTypeNodeClick}
              onNodeLocate={handleLocateNodeInGraph}
              onClose={() => setSidebarTab('upload')}
            />
          ) : (
            <NodePanel
              node={selectedNode}
              onTypeClick={handleTypeClick}
              onLocateInGraph={handleFocusNodeInGraph}
              onClose={() => setSidebarTab(
                selectedType && selectedNode?.type === selectedType ? 'type' : 'upload'
              )}
            />
          )}
        </aside>

        <main className="graph-container">
          <KnowledgeGraph
            version={graphVersion}
            onNodeClick={handleGraphNodeClick}
            onTypeClick={handleTypeClick}
            onResetView={handleResetGraphView}
            selectedNodeId={selectedNode?.id}
            selectedType={selectedType}
            focusTarget={graphFocusTarget}
            resetViewToken={graphResetToken}
          />
        </main>
      </div>
    </div>
  )
}
