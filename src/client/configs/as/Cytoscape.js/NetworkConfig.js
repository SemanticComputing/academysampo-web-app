// https://js.cytoscape.org/#style
export const cytoscapeStyle = [
  {
    selector: 'node',
    style: {
      shape: 'ellipse',
      'font-size': '12',
      'background-color': ele => ele.data('color') || '#666',
      label: ' data(prefLabel)',
      height: ele => (ele.data('size') || 16 / (ele.data('distance') + 1) || '16px'),
      width: ele => (ele.data('size') || 16 / (ele.data('distance') + 1) || '16px')
    }
  },
  {
    selector: 'edge',
    style: {
      width: ele => constrainWidth(ele.data('weight')),
      'line-color': ele => ele.data('color') || '#BBB',
      'curve-style': 'bezier',
      content: ' data(prefLabel) ',
      'target-arrow-shape': 'triangle',
      'target-arrow-color': '#999',
      color: '#555',
      'font-size': '6',
      'text-valign': 'top',
      'text-halign': 'center',
      'edge-text-rotation': 'autorotate',
      'text-background-opacity': 1,
      'text-background-color': 'white',
      'text-background-shape': 'roundrectangle'
    }
  }
]

export const cytoscapeStylePointCloud = [
  {
    selector: 'node',
    style: {
      shape: 'ellipse',
      'font-size': '12',
      'background-color': ele => ele.data('color') || '#666',
      label: ' data(prefLabel)',
      height: ele => (ele.data('size') || 16 / (ele.data('distance') + 1) || '16px'),
      width: ele => (ele.data('size') || 16 / (ele.data('distance') + 1) || '16px')
    }
  }
]

// https://js.cytoscape.org/#layouts
export const coseLayout = {
  name: 'cose',
  idealEdgeLength: 100,
  nodeOverlap: 20,
  refresh: 20,
  fit: true,
  padding: 30,
  randomize: false,
  componentSpacing: 100,
  nodeRepulsion: 400000,
  edgeElasticity: 100,
  nestingFactor: 5,
  gravity: 80,
  numIter: 1347,
  initialTemp: 200,
  coolingFactor: 0.95,
  minTemp: 1.0
}

export const preprocess = elements => {
  const vals = elements.edges.map(ele => ele.data.weight)
  const valmax = Math.max(...vals)
  const valmin = Math.min(...vals)
  const wmax = 6.0
  const wmin = 1.0
  const a = (wmax - wmin) / (valmax - valmin)
  const b = wmin - valmin * (wmax - wmin) / (valmax - valmin)
  elements.edges.forEach((ele, i) => { ele.data.weight = vals[i] * a + b })
}

export const preprocessPointCloud = elements => {
  const nodes = elements.nodes.map(ob => {
    return {
      data: ob.data,
      position: {
        x: 15 * parseFloat(ob.data.x),
        y: 15 * parseFloat(ob.data.y)
      }
    }
  })
  elements.nodes = nodes
  elements.edges = []
}

const maxEdgeWidth = 8

const constrainWidth = width => {
  return (width ? (width < maxEdgeWidth ? width : maxEdgeWidth) : 1)
}
