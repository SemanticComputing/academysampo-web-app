import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import PerspectiveTabs from '../../main_layout/PerspectiveTabs'
import ResultTable from '../../facet_results/ResultTable'
import LeafletMap from '../../facet_results/LeafletMap'
import Deck from '../../facet_results/Deck'
import Network from '../../facet_results/Network'
import Export from '../../facet_results/Export'

const People = props => {
  return (
    <>
      <PerspectiveTabs
        routeProps={props.routeProps}
        tabs={props.perspective.tabs}
        screenSize={props.screenSize}
      />
      <Route
        exact path='/people/faceted-search'
        render={() => <Redirect to='/people/faceted-search/table' />}
      />
      <Route
        path='/people/faceted-search/table'
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
          />}
      />
      <Route
        path='/people/faceted-search/map'
        render={() =>
          <LeafletMap
            results={props.places.results}
            pageType='facetResults'
            facetUpdateID={props.facetData.facetUpdateID}
            facetID='productionPlace'
            resultClass='peoplePlaces'
            facetClass='people'
            mapMode='cluster'
            instance={props.places.instance}
            fetchResults={props.fetchResults}
            fetchByURI={props.fetchByURI}
            fetching={props.places.fetching}
            showInstanceCountInClusters
            updateFacetOption={props.updateFacetOption}
          />}
      />
      <Route
        path='/people/faceted-search/statistics'
        render={() =>
          <Network
            results={props.people.results}
            fetchResults={props.fetchResults}
            resultClass='peopleNetwork'
            facetClass='people'
          />}
      />
      <Route
        path='/people/faceted-search/migrations'
        render={() =>
          <Deck
            results={props.places.results}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='peopleMigrations'
            facetClass='people'
            mapMode='cluster'
            instance={props.places.instance}
            fetchResults={props.fetchResults}
            fetchByURI={props.fetchByURI}
            fetching={props.places.fetching}
            showInstanceCountInClusters
            updateFacetOption={props.updateFacetOption}
          />}
      />
      <Route
        path='/people/faceted-search/export'
        render={() =>
          <Export
            sparqlQuery={props.people.paginatedResultsSparqlQuery}
            pageType='facetResults'
          />}
      />
      {/* <Route
        path='/people/faceted-search/network'
        render={() =>
          <Network />}
      /> */}
    </>
  )
}

People.propTypes = {
  people: PropTypes.object.isRequired,
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
