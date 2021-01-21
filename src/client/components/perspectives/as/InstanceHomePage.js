import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import purple from '@material-ui/core/colors/purple'
import PerspectiveTabs from '../../main_layout/PerspectiveTabs'
import InstanceHomePageTable from '../../main_layout/InstanceHomePageTable'
import Network from '../../facet_results/Network'
import ApexChart from '../../facet_results/ApexChart'
import Export from '../../facet_results/Export'
import LeafletMap from '../../facet_results/LeafletMap'
import {
  coseLayout,
  cytoscapeStyle,
  preprocess,
  preprocessConnections,
  preprocessFamilytree
} from '../../../configs/as/Cytoscape.js/NetworkConfig'
import { createMultipleLineChartData } from '../../../configs/as/ApexCharts/LineChartConfig'
import { Route, Redirect } from 'react-router-dom'
import { has } from 'lodash'

const styles = () => ({
  root: {
    width: '100%',
    height: '100%'
  },
  content: {
    width: '100%',
    height: 'calc(100% - 72px)',
    overflow: 'auto'
  },
  spinnerContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

/**
 * A component for generating a landing page for a single entity.
 */
class InstanceHomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      localID: null
    }
  }

  componentDidMount = () => this.fetchTableData()

  componentDidUpdate = prevProps => {
    // handle the case when the TABLE tab was not originally active
    const prevPathname = prevProps.routeProps.location.pathname
    const currentPathname = this.props.routeProps.location.pathname
    if (prevPathname !== currentPathname && currentPathname.endsWith('table')) {
      this.fetchTableData()
    }
  }

  fetchTableData = () => {
    let uri = ''
    const base = 'http://ldf.fi/yoma'
    const locationArr = this.props.routeProps.location.pathname.split('/')
    let localID = locationArr.pop()
    this.props.tabs.map(tab => {
      if (localID === tab.id) {
        localID = locationArr.pop() // pop again if tab id
      }
    })
    this.setState({ localID: localID })
    switch (this.props.resultClass) {
      case 'categories':
        uri = `${base}/categories/${localID}`
        break
      case 'studentNations':
        uri = `${base}/nations/${localID}`
        break
      case 'organizations':
        uri = `${base}/organizations/${localID}`
        break
      case 'places':
        uri = `${base}/places/${localID}`
        break
      case 'people':
        uri = `${base}/people/${localID}`
        break
      case 'references':
        uri = `${base}/references/${localID}` // TODO namespace
        break
      case 'relatives':
        uri = `${base}/people/${localID}`
        break
      case 'times':
        uri = `${base}/times/${localID}`
        break
      case 'titles':
        uri = `${base}/titles/${localID}`
        break
    }
    this.props.fetchByURI({
      resultClass: this.props.resultClass,
      facetClass: null,
      variant: null,
      uri: uri
    })
  }

  getVisibleRows = rows => {
    const visibleRows = []
    const instanceClass = this.props.tableData.type ? this.props.tableData.type.id : ''
    rows.map(row => {
      if ((has(row, 'onlyForClass') && row.onlyForClass === instanceClass) ||
       !has(row, 'onlyForClass')) {
        visibleRows.push(row)
      }
    })
    return visibleRows
  }

  render = () => {
    const { classes, tableData, isLoading, resultClass, rootUrl } = this.props
    const hasTableData = tableData !== null && Object.values(tableData).length >= 1
    return (
      <div className={classes.root}>
        <PerspectiveTabs
          routeProps={this.props.routeProps}
          tabs={this.props.tabs}
          screenSize={this.props.screenSize}
        />
        <Paper square className={classes.content}>
          {isLoading &&
            <div className={classes.spinnerContainer}>
              <CircularProgress style={{ color: purple[500] }} thickness={5} />
            </div>}
          {!hasTableData &&
            <>
              <Typography variant='h6'>
                No data found for id: <span style={{ fontStyle: 'italic' }}>{this.state.localID}</span>
              </Typography>
            </>}
          {hasTableData &&
            <>
              <Route
                exact path={`${rootUrl}/${resultClass}/page/${this.state.localID}`}
                render={() => <Redirect to={`${rootUrl}/${resultClass}/page/${this.state.localID}/table`} />}
              />
              <Route
                path={[`${rootUrl}/${resultClass}/page/${this.state.localID}/table`, '/iframe.html']} // support also rendering in Storybook
                render={() =>
                  <InstanceHomePageTable
                    resultClass={resultClass}
                    data={tableData}
                    properties={this.getVisibleRows(this.props.properties)}
                  />}
              />
              <Route
                path={`${rootUrl}/${resultClass}/page/${this.state.localID}/familyNetwork`}
                render={() =>
                  <Network
                    pageType='instancePage'
                    results={this.props.results}
                    resultUpdateID={this.props.resultUpdateID}
                    fetchResults={this.props.fetchResults}
                    resultClass='familyNetwork'
                    uri={tableData.id}
                    limit={150}
                    optimize={1.2}
                    style={cytoscapeStyle}
                    fitLayout
                    // layout={coseLayout}
                    preprocess={preprocessFamilytree}
                  />}
              />
              <Route
                path={`${rootUrl}/${resultClass}/page/${this.state.localID}/academicNetwork`}
                render={() =>
                  <Network
                    pageType='instancePage'
                    results={this.props.results}
                    resultUpdateID={this.props.resultUpdateID}
                    fetchResults={this.props.fetchResults}
                    resultClass='academicNetwork'
                    uri={tableData.id}
                    limit={200}
                    optimize={1.2}
                    style={cytoscapeStyle}
                    layout={coseLayout}
                    preprocess={preprocess}
                  />}
              />
              <Route
                path={`${rootUrl}/${resultClass}/page/${this.state.localID}/relationNetwork`}
                render={() =>
                  <Network
                    pageType='instancePage'
                    results={this.props.results}
                    resultUpdateID={this.props.resultUpdateID}
                    fetchResults={this.props.fetchResults}
                    resultClass='relationNetwork'
                    uri={tableData.id}
                    limit={200}
                    optimize={1.2}
                    style={cytoscapeStyle}
                    layout={coseLayout}
                    preprocess={preprocess}
                  />}
              />
              <Route
                path={`${rootUrl}/${resultClass}/page/${this.state.localID}/connections`}
                render={() =>
                  <Network
                    pageType='instancePage'
                    results={this.props.results}
                    resultUpdateID={this.props.resultUpdateID}
                    fetchResults={this.props.fetchResults}
                    resultClass='connections'
                    uri={tableData.id}
                    limit={60}
                    optimize={1.2}
                    style={cytoscapeStyle}
                    layout={coseLayout}
                    preprocess={preprocessConnections}
                  />}
              />
              <Route
                path={`${rootUrl}/${resultClass}/page/${this.state.localID}/placeByYear`}
                render={() =>
                  <ApexChart
                    pageType='instancePage'
                    rawData={this.props.results}
                    rawDataUpdateID={this.props.resultUpdateID}
                    fetching={isLoading}
                    fetchData={this.props.fetchResults}
                    uri={tableData.id}
                    createChartData={createMultipleLineChartData}
                    resultClass='placeByYear'
                    title='Events by year'
                    xaxisTitle='Year'
                    yaxisTitle='Number of events'
                  />}
              />
              <Route
                path={`${rootUrl}/${resultClass}/page/${this.state.localID}/map`}
                render={() =>
                  <LeafletMap
                    center={[22.43, 10.37]}
                    zoom={2}
                    results={this.props.results}
                    layers={this.props.leafletMapLayers}
                    pageType='instancePage'
                    resultClass='placeMap'
                    facetClass='places'
                    mapMode='cluster'
                    uri={tableData.id}
                    fetchResults={this.props.fetchResults}
                    fetching={isLoading}
                    fetchData={this.props.fetchResults}
                    showInstanceCountInClusters={false}
                    showExternalLayers={false}
                  />}
              />
              <Route
                path={`${rootUrl}/${resultClass}/page/${this.state.localID}/titleByYear`}
                render={() =>
                  <ApexChart
                    pageType='instancePage'
                    rawData={this.props.results}
                    rawDataUpdateID={this.props.resultUpdateID}
                    fetching={isLoading}
                    fetchData={this.props.fetchResults}
                    uri={tableData.id}
                    createChartData={createMultipleLineChartData}
                    resultClass='titleByYear'
                    title='People by year'
                    xaxisTitle='Year'
                    yaxisTitle='Number of people'
                  />}
              />
              <Route
                path={`${rootUrl}/${resultClass}/page/${this.state.localID}/nationByYear`}
                render={() =>
                  <ApexChart
                    pageType='instancePage'
                    rawData={this.props.results}
                    rawDataUpdateID={this.props.resultUpdateID}
                    fetching={isLoading}
                    fetchData={this.props.fetchResults}
                    uri={tableData.id}
                    createChartData={createMultipleLineChartData}
                    resultClass='nationByYear'
                    title='Timeline'
                    xaxisTitle='Year'
                    yaxisTitle='Number of events'
                  />}
              />
              <Route
                path={`${rootUrl}/${resultClass}/page/${this.state.localID}/export`}
                render={() =>
                  <Export
                    sparqlQuery={this.props.sparqlQuery}
                    pageType='instancePage'
                    id={tableData.id}
                  />}
              />
            </>}
        </Paper>
      </div>
    )
  }
}

InstanceHomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchByURI: PropTypes.func.isRequired,
  fetchResults: PropTypes.func.isRequired,
  resultClass: PropTypes.string.isRequired,
  tableData: PropTypes.object,
  tableExternalData: PropTypes.object,
  results: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  resultUpdateID: PropTypes.number.isRequired,
  sparqlQuery: PropTypes.string,
  properties: PropTypes.array.isRequired,
  tabs: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  routeProps: PropTypes.object.isRequired,
  screenSize: PropTypes.string.isRequired,
  rootUrl: PropTypes.string.isRequired
}

export const InstanceHomePageComponent = InstanceHomePage

export default withStyles(styles)(InstanceHomePage)
