import React from 'react'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'
import { Route, Redirect } from 'react-router-dom'
import PerspectiveTabs from '../../main_layout/PerspectiveTabs'
import ResultTable from '../../facet_results/ResultTable'
import LeafletMap from '../../facet_results/LeafletMap'
import Deck from '../../facet_results/Deck'
import Network from '../../facet_results/Network'
import Export from '../../facet_results/Export'
import ApexChart from '../../facet_results/ApexChart'
import { createMultipleLineChartData } from '../../../configs/as/ApexCharts/LineChartConfig'
import { MAPBOX_ACCESS_TOKEN, MAPBOX_STYLE } from '../../../configs/as/GeneralConfig'
import {
  coseLayout,
  cytoscapeStyle,
  cytoscapeStylePointCloud,
  preprocess,
  preprocessPointCloud
} from '../../../configs/as/Cytoscape.js/NetworkConfig'

const People = props => {
  const { rootUrl, perspective } = props
  return (
    <>
      <PerspectiveTabs
        routeProps={props.routeProps}
        tabs={props.perspective.tabs}
        screenSize={props.screenSize}
      />
      <Route
        exact path={`${rootUrl}/${perspective.id}/faceted-search`}
        render={() => <Redirect to={`${rootUrl}/${perspective.id}/faceted-search/table`} />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/table`}
        render={routeProps =>
          <ResultTable
            data={props.facetResults}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='people'
            facetClass='people'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            updateRowsPerPage={props.updateRowsPerPage}
            sortResults={props.sortResults}
            routeProps={routeProps}
            rootUrl={rootUrl}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/map`}
        render={() =>
          <LeafletMap
            center={[22.43, 10.37]}
            zoom={2}
            results={props.placesResults.results}
            layers={props.leafletMapLayers}
            pageType='facetResults'
            facetUpdateID={props.facetData.facetUpdateID}
            facetID=''
            resultClass='peoplePlaces'
            facetClass='people'
            mapMode='cluster'
            instance={props.placesResults.instanceTableData}
            fetchResults={props.fetchResults}
            fetchByURI={props.fetchByURI}
            fetching={props.placesResults.fetching}
            showInstanceCountInClusters
            updateFacetOption={props.updateFacetOption}
            showExternalLayers={false}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/network`}
        render={() =>
          <Network
            results={props.facetResults.results}
            facetUpdateID={props.facetData.facetUpdateID}
            resultUpdateID={props.facetResults.resultUpdateID}
            fetchResults={props.fetchResults}
            fetching={props.facetResults.fetching}
            resultClass='peopleNetwork'
            facetClass='people'
            limit={300}
            optimize={1.2}
            style={cytoscapeStyle}
            layout={coseLayout}
            preprocess={preprocess}
            pageType='facetResults'
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/pointcloud`}
        render={() =>
          <Network
            results={props.facetResults.results}
            facetUpdateID={props.facetData.facetUpdateID}
            resultUpdateID={props.facetResults.resultUpdateID}
            fetchResults={props.fetchResults}
            fetching={props.facetResults.fetching}
            resultClass='peoplePointCloud'
            facetClass='people'
            limit={1200}
            optimize={1.0}
            style={cytoscapeStylePointCloud}
            preprocess={preprocessPointCloud}
            fitLayout
            pageType='facetResults'
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/migrations`}
        render={() =>
          <Deck
            results={props.placesResults.results}
            facetUpdateID={props.facetData.facetUpdateID}
            instanceAnalysisData={props.placesResults.instanceAnalysisData}
            instanceAnalysisDataUpdateID={props.placesResults.instanceAnalysisDataUpdateID}
            resultClass='peopleMigrations'
            facetClass='people'
            fetchResults={props.fetchResults}
            fetchInstanceAnalysis={props.fetchInstanceAnalysis}
            fetching={props.placesResults.fetching}
            fetchingInstanceAnalysisData={props.placesResults.fetchingInstanceAnalysisData}
            layerType='arcLayer'
            getArcWidth={d => d.instanceCountScaled}
            fromText={intl.get('deckGlMap.peopleMigrations.from')}
            toText={intl.get('deckGlMap.peopleMigrations.to')}
            countText={intl.get('deckGlMap.peopleMigrations.count')}
            legendTitle={intl.get('deckGlMap.peopleMigrations.legendTitle')}
            legendFromText={intl.get('deckGlMap.peopleMigrations.legendFrom')}
            legendToText={intl.get('deckGlMap.peopleMigrations.legendTo')}
            showMoreText={intl.get('deckGlMap.showMoreInformation')}
            listHeadingSingleInstance={intl.get('deckGlMap.peopleMigrations.listHeadingSingleInstance')}
            listHeadingMultipleInstances={intl.get('deckGlMap.peopleMigrations.listHeadingMultipleInstances')}
            instanceVariable='person'
            showTooltips
            mapBoxAccessToken={MAPBOX_ACCESS_TOKEN}
            mapBoxStyle={MAPBOX_STYLE}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/by_year`}
        render={routeProps =>
          <ApexChart
            pageType='facetResults'
            rawData={props.facetResults.results}
            rawDataUpdateID={props.facetResults.resultUpdateID}
            facetUpdateID={props.facetData.facetUpdateID}
            fetching={props.facetResults.fetching}
            fetchData={props.fetchResults}
            createChartData={createMultipleLineChartData}
            title='People by year'
            xaxisTitle='Year'
            yaxisTitle='Number of people'
            resultClass='eventsByYear'
            facetClass='people'
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/export`}
        render={() =>
          <Export
            data={props.facetResults}
            resultClass='people'
            facetClass='people'
            pageType='facetResults'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
          />}
      />

    </>
  )
}

People.propTypes = {
  facetResults: PropTypes.object.isRequired,
  placesResults: PropTypes.object.isRequired,
  leafletMapLayers: PropTypes.object.isRequired,
  facetData: PropTypes.object.isRequired,
  fetchResults: PropTypes.func.isRequired,
  fetchGeoJSONLayers: PropTypes.func.isRequired,
  fetchPaginatedResults: PropTypes.func.isRequired,
  fetchByURI: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
  updateRowsPerPage: PropTypes.func.isRequired,
  sortResults: PropTypes.func.isRequired,
  routeProps: PropTypes.object.isRequired,
  updateFacetOption: PropTypes.func.isRequired,
  perspective: PropTypes.object.isRequired,
  animationValue: PropTypes.array.isRequired,
  animateMap: PropTypes.func.isRequired,
  screenSize: PropTypes.string.isRequired,
  rootUrl: PropTypes.string.isRequired
}

export default People
