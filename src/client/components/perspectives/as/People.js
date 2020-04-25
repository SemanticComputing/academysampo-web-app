import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import PerspectiveTabs from '../../main_layout/PerspectiveTabs'
import ResultTable from '../../facet_results/ResultTable'
import LeafletMap from '../../facet_results/LeafletMap'
import Deck from '../../facet_results/Deck'
import Network from '../../facet_results/Network'
import Export from '../../facet_results/Export'
import MigrationsMapLegend from '../sampo/MigrationsMapLegend'
import { MAPBOX_ACCESS_TOKEN, MAPBOX_STYLE } from '../../../configs/as/GeneralConfig'

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
            data={props.people}
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
            results={props.places.results}
            layers={props.leafletMapLayers}
            pageType='facetResults'
            facetUpdateID={props.facetData.facetUpdateID}
            facetID=''
            resultClass='peoplePlaces'
            facetClass='people'
            mapMode='cluster'
            instance={props.places.instance}
            fetchResults={props.fetchResults}
            fetchByURI={props.fetchByURI}
            fetching={props.places.fetching}
            showInstanceCountInClusters
            updateFacetOption={props.updateFacetOption}
            showExternalLayers={false}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/network`}
        render={() =>
          <Network
            results={props.people.results}
            facetUpdateID={props.facetData.facetUpdateID}
            resultUpdateID={props.people.resultUpdateID}
            fetchResults={props.fetchResults}
            resultClass='peopleNetwork'
            facetClass='people'
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/migrations`}
        render={() =>
          <Deck
            results={props.places.results}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='peopleMigrations'
            facetClass='people'
            fetchResults={props.fetchResults}
            fetching={props.places.fetching}
            legendComponent={<MigrationsMapLegend />}
            layerType='arcLayer'
            mapBoxAccessToken={MAPBOX_ACCESS_TOKEN}
            mapBoxStyle={MAPBOX_STYLE}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/export`}
        render={() =>
          <Export
            sparqlQuery={props.people.paginatedResultsSparqlQuery}
            pageType='facetResults'
          />}
      />

    </>
  )
}

People.propTypes = {
  people: PropTypes.object.isRequired,
  leafletMapLayers: PropTypes.object.isRequired,
  places: PropTypes.object.isRequired,
  facetData: PropTypes.object.isRequired,
  fetchResults: PropTypes.func.isRequired,
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
  screenSize: PropTypes.string.isRequired
}

export default People
