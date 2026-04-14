import { useEffect, useRef, useState, useCallback } from 'react'
import ForceGraph2D from 'react-force-graph-2d'
import { TYPE_COLORS, DEFAULT_COLOR, formatNodeType } from './graphTheme'

const API = import.meta.env.VITE_API_URL || ''
const DEFAULT_SPREAD = 240
const MIN_SPREAD = 30
const DEFAULT_VIEWPORT_FILL = 80
const MIN_VIEWPORT_FILL = 35
const MAX_VIEWPORT_FILL = 95
const CLICK_ZOOM = 3.1
const BASE_NODE_RADIUS = 5
const NODE_DEGREE_SCALE = 1.8
const MIN_ZOOM = 0.01
const MAX_ZOOM = 8
const MIN_HUMAN_LABEL_PX = 9.5
const OVERVIEW_LABEL_FONT_PX = 9
const OVERVIEW_LABEL_MIN_PX = MIN_HUMAN_LABEL_PX
const OVERVIEW_LABEL_MAX_PX = 12
const NORMAL_LABEL_BASE_PX = 7
const NORMAL_LABEL_MIN_PX = MIN_HUMAN_LABEL_PX
const NORMAL_LABEL_MAX_PX = 14
const SELECTED_LABEL_BASE_PX = 11
const SELECTED_LABEL_MIN_PX = 12
const SELECTED_LABEL_MAX_PX = 20
const LABEL_SCALE_EXPONENT = 0.6
const LABEL_GAP_PX = 6
const LABEL_VISIBILITY_FONT_PX = MIN_HUMAN_LABEL_PX

function nodeColor(node) {
  return TYPE_COLORS[node.type] || DEFAULT_COLOR
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function getNodeRadius(node, isSelected = false) {
  const degree = Math.max(0, node.degree || 0)
  const radius = BASE_NODE_RADIUS + Math.sqrt(degree) * NODE_DEGREE_SCALE
  return isSelected ? radius + 2 : radius
}

export default function KnowledgeGraph({
  version,
  onNodeClick,
  onTypeClick,
  onResetView,
  selectedNodeId,
  selectedType,
  focusTarget,
  resetViewToken,
}) {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] })
  const [loading, setLoading] = useState(true)
  const [spread, setSpread] = useState(DEFAULT_SPREAD)
  const [viewportFill, setViewportFill] = useState(DEFAULT_VIEWPORT_FILL)
  const [overviewMode, setOverviewMode] = useState(true)
  const [graphSize, setGraphSize] = useState({ width: 0, height: 0 })
  const containerRef = useRef(null)
  const fgRef = useRef()
  const pendingFocusNodeId = useRef(null)
  const pendingRefit = useRef(false)
  const pendingOverviewMode = useRef(true)
  const initialLayoutRequested = useRef(false)
  const lastResetToken = useRef(0)
  const lastAppliedSpread = useRef(DEFAULT_SPREAD)
  const lastAppliedViewportFill = useRef(DEFAULT_VIEWPORT_FILL)
  const spreadRef = useRef(DEFAULT_SPREAD)
  const viewportFillRef = useRef(DEFAULT_VIEWPORT_FILL)
  const overviewModeRef = useRef(true)
  const labelMeasureContextRef = useRef(null)

  const setOverviewState = useCallback((enabled) => {
    overviewModeRef.current = enabled
    setOverviewMode(enabled)
  }, [])

  const getLabelWidthPx = useCallback((label, fontPx) => {
    if (!label) return 0

    if (!labelMeasureContextRef.current) {
      const canvas = document.createElement('canvas')
      labelMeasureContextRef.current = canvas.getContext('2d')
    }

    const context = labelMeasureContextRef.current
    if (!context) {
      return label.length * fontPx * 0.58
    }

    context.font = `${fontPx}px sans-serif`
    return context.measureText(label).width
  }, [])

  const applySpreadForces = useCallback(() => {
    const fg = fgRef.current
    if (!fg) return

    fg.d3Force('charge')?.strength(-spread * 2.8)
    fg.d3Force('link')?.distance(spread)
  }, [spread])

  const fitGraphInView = useCallback((includeLabels = overviewModeRef.current) => {
    const fg = fgRef.current
    if (!fg || !graphData.nodes.length || graphSize.width <= 0 || graphSize.height <= 0) {
      return false
    }

    const positionedNodes = graphData.nodes.filter(
      node => Number.isFinite(node.x) && Number.isFinite(node.y)
    )
    if (!positionedNodes.length) return false

    const fillRatio = clamp(viewportFill / 100, MIN_VIEWPORT_FILL / 100, MAX_VIEWPORT_FILL / 100)
    const targetWidth = graphSize.width * fillRatio
    const targetHeight = graphSize.height * fillRatio

    const computeBounds = (zoom) => {
      let nodeMinX = Infinity
      let nodeMaxX = -Infinity
      let nodeMinY = Infinity
      let nodeMaxY = -Infinity
      let displayMinX = Infinity
      let displayMaxX = -Infinity
      let displayMinY = Infinity
      let displayMaxY = -Infinity

      for (const node of positionedNodes) {
        const radius = getNodeRadius(node)
        const nodeLeft = node.x - radius
        const nodeRight = node.x + radius
        const nodeTop = node.y - radius
        const nodeBottom = node.y + radius
        let displayLeft = nodeLeft
        let displayRight = nodeRight
        let displayTop = nodeTop
        let displayBottom = nodeBottom

        if (includeLabels) {
          const labelWidthWorld = getLabelWidthPx(node.label, OVERVIEW_LABEL_FONT_PX) / zoom
          const labelHalfWidthWorld = labelWidthWorld / 2
          const labelTopWorld = node.y + radius + LABEL_GAP_PX / zoom
          const labelBottomWorld = labelTopWorld + OVERVIEW_LABEL_FONT_PX / zoom

          displayLeft = Math.min(displayLeft, node.x - labelHalfWidthWorld)
          displayRight = Math.max(displayRight, node.x + labelHalfWidthWorld)
          displayBottom = Math.max(displayBottom, labelBottomWorld)
        }

        nodeMinX = Math.min(nodeMinX, nodeLeft)
        nodeMaxX = Math.max(nodeMaxX, nodeRight)
        nodeMinY = Math.min(nodeMinY, nodeTop)
        nodeMaxY = Math.max(nodeMaxY, nodeBottom)
        displayMinX = Math.min(displayMinX, displayLeft)
        displayMaxX = Math.max(displayMaxX, displayRight)
        displayMinY = Math.min(displayMinY, displayTop)
        displayMaxY = Math.max(displayMaxY, displayBottom)
      }

      return {
        nodeMinX,
        nodeMaxX,
        nodeMinY,
        nodeMaxY,
        displayMinX,
        displayMaxX,
        displayMinY,
        displayMaxY,
        width: Math.max(1, displayMaxX - displayMinX),
        height: Math.max(1, displayMaxY - displayMinY),
      }
    }

    let bounds = computeBounds(1)
    let targetZoom = clamp(
      Math.min(targetWidth / bounds.width, targetHeight / bounds.height),
      MIN_ZOOM,
      MAX_ZOOM
    )

    for (let i = 0; i < 4; i += 1) {
      bounds = computeBounds(targetZoom)
      const nextZoom = clamp(
        Math.min(targetWidth / bounds.width, targetHeight / bounds.height),
        MIN_ZOOM,
        MAX_ZOOM
      )

      if (Math.abs(nextZoom - targetZoom) < 0.001) {
        targetZoom = nextZoom
        break
      }

      targetZoom = nextZoom
    }

    fg.centerAt(
      (bounds.nodeMinX + bounds.nodeMaxX) / 2,
      (bounds.nodeMinY + bounds.nodeMaxY) / 2,
      400
    )
    fg.zoom(targetZoom, 400)
    return true
  }, [getLabelWidthPx, graphData.nodes, graphSize.height, graphSize.width, viewportFill])

  const reheatGraph = useCallback(() => {
    const fg = fgRef.current
    if (!fg || !graphData.nodes.length || graphSize.width <= 0 || graphSize.height <= 0) {
      return false
    }

    applySpreadForces()
    fg.d3ReheatSimulation()
    return true
  }, [applySpreadForces, graphData.nodes.length, graphSize.height, graphSize.width])

  const zoomBy = useCallback((factor) => {
    const fg = fgRef.current
    if (!fg) return

    setOverviewState(false)
    fg.zoom(clamp(fg.zoom() * factor, MIN_ZOOM, MAX_ZOOM), 250)
  }, [setOverviewState])

  const focusNodeInGraph = useCallback((nodeId, duration = 600) => {
    const fg = fgRef.current
    if (!fg || !nodeId) return false

    setOverviewState(false)
    const targetNode = graphData.nodes.find(node => node.id === nodeId)
    if (!targetNode || !Number.isFinite(targetNode.x) || !Number.isFinite(targetNode.y)) {
      return false
    }

    fg.centerAt(targetNode.x, targetNode.y, duration)
    fg.zoom(CLICK_ZOOM, duration)
    pendingFocusNodeId.current = null
    return true
  }, [graphData.nodes, setOverviewState])

  const fetchGraph = useCallback(async () => {
    setLoading(true)

    try {
      const res = await fetch(`${API}/api/graph`)
      const data = await res.json()
      const nodes = data.nodes || []
      const edges = data.edges || []
      const degreeById = Object.fromEntries(nodes.map(node => [node.id, 0]))

      for (const edge of edges) {
        degreeById[edge.source] = (degreeById[edge.source] || 0) + 1
        degreeById[edge.target] = (degreeById[edge.target] || 0) + 1
      }

      // react-force-graph uses "links" not "edges"
      setGraphData({
        nodes: nodes.map(node => ({
          ...node,
          degree: degreeById[node.id] || 0,
        })),
        links: edges.map(e => ({
          source: e.source,
          target: e.target,
          label: e.relation,
          description: e.description,
        }))
      })
    } catch (e) {
      console.error('Failed to fetch graph:', e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    spreadRef.current = spread
  }, [spread])

  useEffect(() => {
    viewportFillRef.current = viewportFill
  }, [viewportFill])

  useEffect(() => {
    initialLayoutRequested.current = false
    pendingFocusNodeId.current = null
    pendingRefit.current = false
    pendingOverviewMode.current = true
    setOverviewState(true)
    lastAppliedSpread.current = spreadRef.current
    lastAppliedViewportFill.current = viewportFillRef.current
    fetchGraph()
  }, [fetchGraph, setOverviewState, version])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateSize = () => {
      setGraphSize({
        width: container.clientWidth,
        height: container.clientHeight,
      })
    }

    const frameId = window.requestAnimationFrame(updateSize)
    let observer = null

    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(updateSize)
      observer.observe(container)
    } else {
      window.addEventListener('resize', updateSize)
    }

    return () => {
      window.cancelAnimationFrame(frameId)
      observer?.disconnect()
      if (!observer) {
        window.removeEventListener('resize', updateSize)
      }
    }
  }, [loading, graphData.nodes.length])

  useEffect(() => {
    if (!focusTarget?.id) return

    pendingFocusNodeId.current = focusTarget.id
    focusNodeInGraph(focusTarget.id)
  }, [focusTarget, focusNodeInGraph])

  useEffect(() => {
    if (initialLayoutRequested.current) return
    if (!graphData.nodes.length || graphSize.width <= 0 || graphSize.height <= 0) return

    initialLayoutRequested.current = true
    pendingOverviewMode.current = true
    pendingRefit.current = true
    reheatGraph()
  }, [graphData.nodes.length, graphSize.height, graphSize.width, reheatGraph])

  useEffect(() => {
    if (!resetViewToken || resetViewToken === lastResetToken.current) return

    lastResetToken.current = resetViewToken

    pendingFocusNodeId.current = null
    pendingOverviewMode.current = true
    pendingRefit.current = true
    setOverviewState(true)
    let resetLocalState = false

    if (spread !== DEFAULT_SPREAD) {
      setSpread(DEFAULT_SPREAD)
      resetLocalState = true
    }

    if (viewportFill !== DEFAULT_VIEWPORT_FILL) {
      setViewportFill(DEFAULT_VIEWPORT_FILL)
      resetLocalState = true
    }

    if (resetLocalState) {
      return
    }

    fitGraphInView(true)
  }, [fitGraphInView, resetViewToken, setOverviewState, spread, viewportFill])

  const handleEngineStop = useCallback(() => {
    if (pendingRefit.current) {
      pendingRefit.current = false
      fitGraphInView(pendingOverviewMode.current)
    }

    if (pendingFocusNodeId.current) {
      focusNodeInGraph(pendingFocusNodeId.current)
    }
  }, [fitGraphInView, focusNodeInGraph])

  // Update charge + link distance when spread slider changes
  useEffect(() => {
    if (!initialLayoutRequested.current) return
    if (spread === lastAppliedSpread.current) return

    lastAppliedSpread.current = spread
    pendingOverviewMode.current = overviewModeRef.current
    if (spread === MIN_SPREAD) {
      pendingRefit.current = true
    }
    reheatGraph()
  }, [reheatGraph, spread])

  useEffect(() => {
    if (!initialLayoutRequested.current) return
    if (viewportFill === lastAppliedViewportFill.current) return

    lastAppliedViewportFill.current = viewportFill
    fitGraphInView(overviewModeRef.current)
  }, [fitGraphInView, viewportFill])

  const handleNodeClick = useCallback((node) => {
    setOverviewState(false)
    onNodeClick(node)
    // Center on clicked node
    fgRef.current?.centerAt(node.x, node.y, 600)
    fgRef.current?.zoom(CLICK_ZOOM, 600)
  }, [onNodeClick, setOverviewState])

  const paintNode = useCallback((node, ctx, globalScale) => {
    const label = node.label
    const isSelected = selectedNodeId === node.id
    const labelScreenPx = overviewMode
      ? clamp(
          OVERVIEW_LABEL_FONT_PX * Math.pow(globalScale, 0.15),
          OVERVIEW_LABEL_MIN_PX,
          OVERVIEW_LABEL_MAX_PX
        )
      : isSelected
        ? clamp(
            SELECTED_LABEL_BASE_PX * Math.pow(globalScale, LABEL_SCALE_EXPONENT),
            SELECTED_LABEL_MIN_PX,
            SELECTED_LABEL_MAX_PX
          )
        : clamp(
            NORMAL_LABEL_BASE_PX * Math.pow(globalScale, LABEL_SCALE_EXPONENT),
            NORMAL_LABEL_MIN_PX,
            NORMAL_LABEL_MAX_PX
          )
    const fontSize = labelScreenPx / globalScale
    const r = getNodeRadius(node, isSelected)
    const color = nodeColor(node)

    // Glow for selected
    if (isSelected) {
      ctx.beginPath()
      ctx.arc(node.x, node.y, r + 4, 0, 2 * Math.PI)
      ctx.fillStyle = color + '33'
      ctx.fill()
    }

    // Main circle
    ctx.beginPath()
    ctx.arc(node.x, node.y, r, 0, 2 * Math.PI)
    ctx.fillStyle = isSelected ? color : color + 'cc'
    ctx.fill()

    // Border
    ctx.strokeStyle = isSelected ? '#fff' : color
    ctx.lineWidth = isSelected ? 2 : 1
    ctx.stroke()

    const shouldShowLabel = overviewMode
      || isSelected
      || labelScreenPx >= LABEL_VISIBILITY_FONT_PX

    if (shouldShowLabel) {
      const maxLabelLength = overviewMode || isSelected
        ? label.length
        : globalScale >= 3 ? 26 : 18
      const displayLabel = label.length > maxLabelLength
        ? `${label.slice(0, maxLabelLength - 1)}…`
        : label

      ctx.font = `${overviewMode || isSelected ? 600 : 400} ${fontSize}px sans-serif`
      ctx.strokeStyle = 'rgba(15, 17, 23, 0.9)'
      ctx.lineWidth = (overviewMode || isSelected ? 3 : 2) / globalScale
      ctx.fillStyle = isSelected ? '#ffffff' : '#e6edf3'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.strokeText(displayLabel, node.x, node.y + r + LABEL_GAP_PX / globalScale + fontSize / 2)
      ctx.fillText(displayLabel, node.x, node.y + r + LABEL_GAP_PX / globalScale + fontSize / 2)
    }
  }, [overviewMode, selectedNodeId])

  if (loading) {
    return (
      <div className="graph-empty">
        <span className="spinner" style={{ width: 32, height: 32, borderWidth: 3 }} />
        <p>Loading graph...</p>
      </div>
    )
  }

  if (graphData.nodes.length === 0) {
    return (
      <div className="graph-empty">
        <div className="icon">🕸️</div>
        <p>Upload a paper to build the knowledge graph</p>
      </div>
    )
  }

  const typeCounts = graphData.nodes.reduce((counts, node) => {
    counts[node.type] = (counts[node.type] || 0) + 1
    return counts
  }, {})

  return (
    <>
      <div ref={containerRef} className="knowledge-graph-canvas">
        {graphSize.width > 0 && graphSize.height > 0 && (
          <ForceGraph2D
            ref={fgRef}
            width={graphSize.width}
            height={graphSize.height}
            graphData={graphData}
            nodeCanvasObject={paintNode}
            nodeCanvasObjectMode={() => 'replace'}
            nodeLabel={node => `${node.label}\n${node.type}\n\n${node.description || ''}`}
            linkColor={() => '#30363d'}
            linkWidth={1}
            linkDirectionalArrowLength={4}
            linkDirectionalArrowRelPos={1}
            linkLabel={link => `${link.label}: ${link.description || ''}`}
            onNodeClick={handleNodeClick}
            onEngineStop={handleEngineStop}
            backgroundColor="#0f1117"
            cooldownTicks={300}
            d3AlphaDecay={0.02}
            d3VelocityDecay={0.3}
            minZoom={MIN_ZOOM}
            maxZoom={MAX_ZOOM}
            autoPauseRedraw={false}
            enableNodeDrag={true}
            enableZoomInteraction={true}
            enablePanInteraction={true}
            enableZoomPanInteraction={true}
          />
        )}
      </div>

      <div className="graph-legend">
        <h4>Node Types</h4>
        {Object.entries(TYPE_COLORS).map(([type, color]) => (
          <button
            key={type}
            type="button"
            className={`legend-item legend-item-btn ${selectedType === type ? 'active' : ''}`}
            onClick={() => onTypeClick(type)}
          >
            <div className="legend-dot" style={{ background: color }} />
            <span>{formatNodeType(type)}</span>
            <span className="legend-count">{typeCounts[type] || 0}</span>
          </button>
        ))}
        <div className="graph-controls">
          <button type="button" className="graph-control-btn" onClick={() => zoomBy(0.85)}>
            -
          </button>
          <button
            type="button"
            className="graph-control-btn"
            onClick={onResetView}
          >
            Fit
          </button>
          <button type="button" className="graph-control-btn" onClick={() => zoomBy(1.15)}>
            +
          </button>
        </div>
        <p className="graph-hint">Scroll to zoom and drag to pan.</p>
        <div className="graph-slider-group">
          <div className="graph-slider-header">
            <h4>Viewport Fill</h4>
            <span>{viewportFill}%</span>
          </div>
          <input
            className="graph-slider"
            type="range"
            min={MIN_VIEWPORT_FILL}
            max={MAX_VIEWPORT_FILL}
            value={viewportFill}
            onChange={e => setViewportFill(Number(e.target.value))}
          />
          <p className="graph-slider-caption">Shows the whole graph while changing how much of the page it occupies.</p>
        </div>
        <div className="graph-slider-group">
          <div className="graph-slider-header">
            <h4>Spread</h4>
            <span>{spread}</span>
          </div>
          <input
            className="graph-slider"
            type="range"
            min={MIN_SPREAD}
            max={400}
            value={spread}
            onChange={e => setSpread(Number(e.target.value))}
          />
        </div>
      </div>
    </>
  )
}
