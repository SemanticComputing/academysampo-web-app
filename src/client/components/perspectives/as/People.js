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
import { createPopUpContentAs } from '../../../configs/as/Leaflet/LeafletConfig'

const People = props => {
  const { rootUrl, perspective } = props
  // const layerControlExpanded = screenSize === 'md' ||
  //   screenSize === 'lg' ||
  //   screenSize === 'xl'
  return (
    <>
      <PerspectiveTabs
        routeProps={props.routeProps}
        tabs={props.perspective.tabs}
        screenSize={props.screenSize}
        layoutConfig={props.layoutConfig}
      />
      <Route
        exact path={`${rootUrl}/${perspective.id}/faceted-search`}
        render={() => <Redirect to={`${rootUrl}/${perspective.id}/faceted-search/table`} />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/table`}
        render={routeProps =>
          <ResultTable
            data={props.perspectiveState}
            facetUpdateID={props.facetState.facetUpdateID}
            resultClass='people'
            facetClass='people'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            updateRowsPerPage={props.updateRowsPerPage}
            sortResults={props.sortResults}
            routeProps={routeProps}
            rootUrl={rootUrl}
            layoutConfig={props.layoutConfig}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/map`}
        render={() =>
          <LeafletMap
            mapBoxAccessToken={MAPBOX_ACCESS_TOKEN}
            mapBoxStyle={MAPBOX_STYLE}
            center={props.perspectiveState.maps.peoplePlaces.center}
            zoom={props.perspectiveState.maps.peoplePlaces.zoom}
            results={props.perspectiveState.results}
            leafletMapState={props.leafletMapState}
            pageType='facetResults'
            facetUpdateID={props.facetState.facetUpdateID}
            facetID=''
            resultClass='peoplePlaces'
            facetClass='people'
            mapMode='cluster'
            instance={props.perspectiveState.instanceTableData}
            createPopUpContent={createPopUpContentAs}
            popupMaxHeight={320}
            popupMinWidth={280}
            fetchResults={props.fetchResults}
            fetchGeoJSONLayers={props.fetchGeoJSONLayers}
            clearGeoJSONLayers={props.clearGeoJSONLayers}
            fetchByURI={props.fetchByURI}
            fetching={props.perspectiveState.fetching}
            showInstanceCountInClusters
            updateFacetOption={props.updateFacetOption}
            updateMapBounds={props.updateMapBounds}
            showError={props.showError}
            showExternalLayers={false}
            // layerControlExpanded={layerControlExpanded}
            // customMapControl
            // layerConfigs={layerConfigs}
            infoHeaderExpanded={props.perspectiveState.facetedSearchHeaderExpanded}
            layoutConfig={props.layoutConfig}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/network`}
        render={() =>
          <Network
            results={props.perspectiveState.results}
            facetUpdateID={props.facetState.facetUpdateID}
            resultUpdateID={props.perspectiveState.resultUpdateID}
            fetchResults={props.fetchResults}
            fetching={props.perspectiveState.fetching}
            resultClass='peopleNetwork'
            facetClass='people'
            limit={300}
            optimize={1.2}
            style={cytoscapeStyle}
            layout={coseLayout}
            preprocess={preprocess}
            pageType='facetResults'
            layoutConfig={props.layoutConfig}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/pointcloud`}
        render={() =>
          <Network
            results={props.perspectiveState.results}
            facetUpdateID={props.facetState.facetUpdateID}
            resultUpdateID={props.perspectiveState.resultUpdateID}
            fetchResults={props.fetchResults}
            fetching={props.perspectiveState.fetching}
            resultClass='peoplePointCloud'
            facetClass='people'
            limit={1200}
            optimize={1.0}
            style={cytoscapeStylePointCloud}
            preprocess={preprocessPointCloud}
            fitLayout
            pageType='facetResults'
            layoutConfig={props.layoutConfig}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/migrations`}
        render={() =>
          <Deck
            center={props.perspectiveState.maps.peopleMigrations.center}
            zoom={props.perspectiveState.maps.peopleMigrations.zoom}
            results={props.perspectiveState.results}
            facetUpdateID={props.facetState.facetUpdateID}
            instanceAnalysisData={props.perspectiveState.instanceAnalysisData}
            instanceAnalysisDataUpdateID={props.perspectiveState.instanceAnalysisDataUpdateID}
            resultClass='peopleMigrations'
            facetClass='people'
            fetchResults={props.fetchResults}
            fetchInstanceAnalysis={props.fetchInstanceAnalysis}
            fetching={props.perspectiveState.fetching}
            fetchingInstanceAnalysisData={props.perspectiveState.fetchingInstanceAnalysisData}
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
            layoutConfig={props.layoutConfig}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/by_year`}
        render={routeProps =>
          <ApexChart
            pageType='facetResults'
            rawData={props.perspectiveState.results}
            rawDataUpdateID={props.perspectiveState.resultUpdateID}
            facetUpdateID={props.facetState.facetUpdateID}
            fetching={props.perspectiveState.fetching}
            fetchData={props.fetchResults}
            createChartData={createMultipleLineChartData}
            title='People by year'
            xaxisTitle='Year'
            xaxisType='category'
            xaxisTickAmount={20}
            yaxisTitle='Number of people'
            stroke={{
              curve: 'straight',
              width: 2
            }}
            resultClass='eventsByYear'
            facetClass='people'
            layoutConfig={props.layoutConfig}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/export`}
        render={() =>
          <Export
            data={props.perspectiveState}
            resultClass='people'
            facetClass='people'
            pageType='facetResults'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            layoutConfig={props.layoutConfig}
          />}
      />

    </>
  )
}

People.propTypes = {
  /**
   * Faceted search configs and results of this perspective.
   */
  perspectiveState: PropTypes.object.isRequired,
  /**
    * Facet configs and values.
    */
  facetState: PropTypes.object.isRequired,
  /**
    * Facet values where facets constrain themselves, used for statistics.
    */
  facetConstrainSelfState: PropTypes.object,
  /**
    * Leaflet map config and external layers.
    */
  leafletMapState: PropTypes.object.isRequired,
  /**
    * Redux action for fetching paginated results.
    */
  fetchPaginatedResults: PropTypes.func.isRequired,
  /**
    * Redux action for fetching all results.
    */
  fetchResults: PropTypes.func.isRequired,
  /**
    * Redux action for fetching facet values for statistics.
    */
  fetchFacetConstrainSelf: PropTypes.func.isRequired,
  /**
    * Redux action for loading external GeoJSON layers.
    */
  fetchGeoJSONLayers: PropTypes.func.isRequired,
  /**
    * Redux action for loading external GeoJSON layers via backend.
    */
  fetchGeoJSONLayersBackend: PropTypes.func.isRequired,
  /**
    * Redux action for clearing external GeoJSON layers.
    */
  clearGeoJSONLayers: PropTypes.func.isRequired,
  /**
    * Redux action for fetching information about a single entity.
    */
  fetchByURI: PropTypes.func.isRequired,
  /**
    * Redux action for updating the page of paginated results.
    */
  updatePage: PropTypes.func.isRequired,
  /**
    * Redux action for updating the rows per page of paginated results.
    */
  updateRowsPerPage: PropTypes.func.isRequired,
  /**
    * Redux action for sorting the paginated results.
    */
  sortResults: PropTypes.func.isRequired,
  /**
    * Redux action for updating the active selection or config of a facet.
    */
  showError: PropTypes.func.isRequired,
  /**
    * Redux action for showing an error
    */
  updateFacetOption: PropTypes.func.isRequired,
  /**
    * Routing information from React Router.
    */
  routeProps: PropTypes.object.isRequired,
  /**
    * Perspective config.
    */
  perspective: PropTypes.object.isRequired,
  /**
    * State of the animation, used by TemporalMap.
    */
  animationValue: PropTypes.array.isRequired,
  /**
    * Redux action for animating TemporalMap.
    */
  animateMap: PropTypes.func.isRequired,
  /**
    * Current screen size.
    */
  screenSize: PropTypes.string.isRequired,
  /**
    * Root url of the application.
    */
  rootUrl: PropTypes.string.isRequired,
  layoutConfig: PropTypes.object.isRequired
}

export default People
