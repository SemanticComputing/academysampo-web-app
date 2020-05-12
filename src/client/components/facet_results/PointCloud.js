import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import history from '../../History'
import cytoscape from 'cytoscape'

const styles = theme => ({
  root: {
    height: 400,
    [theme.breakpoints.up('md')]: {
      height: 'calc(100% - 21px)'
    }
  },
  cyContainer: {
    width: '100%',
    height: '100%'
  }
})


class PointCloud extends React.Component {
  constructor (props) {
    super(props)
    this.cyRef = React.createRef()
  }

  componentDidMount = () => {

    this.props.fetchResults({
      resultClass: this.props.resultClass,
      facetClass: this.props.facetClass,
      limit: 500,
      optimize: 1
    })

    this.cy = cytoscape({
      container: this.cyRef.current,

      style: [ // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            shape: 'ellipse',
            'font-size': '12',
            'background-color': ele => ele.data('color') || '#666',
            label: ' data(prefLabel)',
            height: ele =>  (ele.data('size') || 16 / (ele.data('distance') + 1) || '16px'),
            width: ele =>   (ele.data('size') || 16 / (ele.data('distance') + 1) || '16px')
          }
        }/**,
        {
          selector: 'edge',
          style: {

            width: ele => ele.data('weight') || 1,
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
        }*/
      ]
    })

    this.cy.on('tap', 'node', function () {
      try {
        if (this.data('href')) {
          console.log(this.data('href'))
          history.push(this.data('href'))
        }
      } catch (e) { // fall back on url change
        console.log('Fail', e)
        console.log(this.data())
      }
    })
  }

  componentDidUpdate = prevProps => {
    if (prevProps.resultUpdateID !== this.props.resultUpdateID) {
      let nodes = this.props.results.elements.nodes.map(function(ob) { return { data:ob.data , position: {x: 15*parseFloat(ob.data.x), y: 15*parseFloat(ob.data.y) }};})
      // console.log(nodes)
      this.props.results.elements.nodes = nodes
      this.props.results.elements.edges = []

      this.cy.elements().remove()
      this.cy.add(this.props.results.elements)
      this.cy.fit()
    }
    // check if filters have changed
    if (prevProps.facetUpdateID !== this.props.facetUpdateID) {
      this.props.fetchResults({
        resultClass: this.props.resultClass,
        facetClass: this.props.facetClass
      })
    }
  }

  render = () => {
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.cyContainer} ref={this.cyRef} />
      </div>
    )
  }
}

PointCloud.propTypes = {
  classes: PropTypes.object.isRequired,
  results: PropTypes.object,
  fetchResults: PropTypes.func,
  fetchNetworkById: PropTypes.func,
  resultClass: PropTypes.string.isRequired,
  facetClass: PropTypes.string,
  facetUpdateID: PropTypes.number,
  resultUpdateID: PropTypes.number.isRequired
}

export default withStyles(styles)(PointCloud)
