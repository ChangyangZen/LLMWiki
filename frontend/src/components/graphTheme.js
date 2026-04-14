export const TYPE_COLORS = {
  concept: '#58a6ff',
  method: '#3fb950',
  model: '#d2a8ff',
  dataset: '#ffa657',
  author: '#f78166',
  institution: '#2dd4bf',
  metric: '#e3b341',
}

export const DEFAULT_COLOR = '#8b949e'

export function formatNodeType(type) {
  return type
    .split(/[_-]/)
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}
