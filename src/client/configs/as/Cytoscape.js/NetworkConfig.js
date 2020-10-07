// https://js.cytoscape.org/#style
export const cytoscapeStyle = [
  {
    selector: 'node',
    style: {
      shape: 'ellipse',
      'font-size': ele => ele.data('font_size') || 12,
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

class ValueScaler {
  a;
  b;
  constructor (low, high) {
    this.low = low
    this.high = high
  }

  fit (vals) {
    const valmin = Math.min(...vals)
    const valmax = Math.max(...vals)
    if (valmax === valmin) {
      this.a = 0.0
    } else {
      this.a = (this.high - this.low) / (valmax - valmin)
    }
    this.b = this.low - valmin * this.a
  }

  transform (vals) {
    return vals.map(x => { return x * this.a + this.b })
  }

  fitTransform (vals) {
    this.fit(vals)
    return this.transform(vals)
  }
}

class ColorScaler extends ValueScaler {
  col1;
  col2;
  constructor (low, high) {
    super(0.0, 1.0)
    this.col1 = low
    this.col2 = high
  }

  // super.fit(vals)

  _process (s0, s1, r) {
    const x0 = parseInt(s0)
    const x1 = parseInt(s1)
    if (isNaN(x0) || isNaN(x1)) return s0
    return Math.floor(x0 + (x1 - x0) * r)
  }

  transform (vals) {
    const s1 = this.col1.split(/(\d+)/)
    const s2 = this.col2.split(/(\d+)/)
    const _vals01 = vals.map(x => { return x * this.a + this.b })

    return _vals01.map(v => s1.map((s, i) => this._process(s, s2[i], v)).join(''))
  }
}

const maxEdgeWidth = 8

export const preprocess = elements => {
  //  edges
  let arr = elements.edges.map(ele => ele.data.weight)

  //  edge width
  let res = (new ValueScaler(1.0, maxEdgeWidth)).fitTransform(arr)
  elements.edges.forEach((ele, i) => { ele.data.weight = res[i] })

  // console.log(elements.nodes)
  // nodes
  arr = elements.nodes.map(ele => ele.data.pagerank)

  // node size
  res = (new ColorScaler('6px', '24px')).fitTransform(arr)
  elements.nodes.forEach((ele, i) => { ele.data.size = res[i] })

  //  label size
  res = (new ValueScaler(8, 12)).fitTransform(arr)
  elements.nodes.forEach((ele, i) => { ele.data.font_size = res[i] })
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

const constrainWidth = width => {
  return (width ? (width < maxEdgeWidth ? width : maxEdgeWidth) : 1)
}
