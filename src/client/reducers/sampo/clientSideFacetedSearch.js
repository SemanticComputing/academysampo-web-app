import {
  CLIENT_FS_UPDATE_QUERY,
  CLIENT_FS_TOGGLE_DATASET,
  CLIENT_FS_FETCH_RESULTS,
  CLIENT_FS_FETCH_RESULTS_FAILED,
  CLIENT_FS_UPDATE_RESULTS,
  CLIENT_FS_CLEAR_RESULTS,
  CLIENT_FS_UPDATE_FACET,
  CLIENT_FS_SORT_RESULTS
} from '../../actions'

export const INITIAL_STATE = {
  query: '',
  datasets: {
    kotus: { selected: true },
    pnr: { selected: true },
    warsa_karelian_places: { selected: false },
    tgn: { selected: false }
  },
  results: null,
  facets: {
    datasetSelector: {
      facetID: 'datasetSelector',
      filterType: 'datasetSelector'
    },
    prefLabel: {
      facetID: 'prefLabel',
      filterType: 'clientFSLiteral',
      selectionsSet: new Set(),
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      type: 'hierarchical'
    },
    broaderTypeLabel: {
      facetID: 'broaderTypeLabel',
      filterType: 'clientFSLiteral',
      selectionsSet: new Set(),
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      type: 'hierarchical'
    },
    broaderAreaLabel: {
      facetID: 'broaderAreaLabel',
      filterType: 'clientFSLiteral',
      selectionsSet: new Set(),
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      type: 'hierarchical'
    },
    modifier: {
      facetID: 'modifier',
      filterType: 'clientFSLiteral',
      selectionsSet: new Set(),
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      type: 'hierarchical'
    },
    basicElement: {
      facetID: 'basicElement',
      filterType: 'clientFSLiteral',
      selectionsSet: new Set(),
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      type: 'hierarchical'
    },
    collectionYear: {
      facetID: 'collectionYear',
      filterType: 'clientFSLiteral',
      selectionsSet: new Set(),
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      type: 'hierarchical'
    },
    source: {
      facetID: 'source',
      filterType: 'clientFSLiteral',
      selectionsSet: new Set(),
      isFetching: false,
      searchField: false,
      containerClass: 'three',
      type: 'hierarchical'
    }
  },
  lastlyUpdatedFacet: null,
  facetUpdateID: 0,
  sortBy: 'broaderAreaLabel',
  sortDirection: 'asc',
  groupBy: 'broaderTypeLabel',
  groupByLabel: 'Paikanlaji',
  textResultsFetching: false,
  spatialResultsFetching: false
}

const clientSideFacetedSearch = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLIENT_FS_UPDATE_QUERY:
      return { ...state, query: action.query || '' }
    case CLIENT_FS_TOGGLE_DATASET:
      return {
        ...state,
        suggestions: [],
        results: null,
        datasets: {
          ...state.datasets,
          [action.dataset]: {
            ...state.datasets[action.dataset],
            selected: !state.datasets[action.dataset].selected
          }
        }
      }
    case CLIENT_FS_FETCH_RESULTS:
      return {
        ...state,
        [`${action.jenaIndex}ResultsFetching`]: true
      }
    case CLIENT_FS_FETCH_RESULTS_FAILED:
      return {
        ...state,
        textResultsFetching: false,
        spatialResultsFetching: false
      }
    case CLIENT_FS_CLEAR_RESULTS:
      return {
        ...state,
        results: null,
        fetchingResults: false,
        query: INITIAL_STATE.query,
        facets: INITIAL_STATE.facets
      }
    case CLIENT_FS_UPDATE_RESULTS:
      return {
        ...state,
        results: action.results,
        [`${action.jenaIndex}ResultsFetching`]: false
      }
    case CLIENT_FS_UPDATE_FACET:
      return clientFSUpdateFacet(state, action)
    case CLIENT_FS_SORT_RESULTS:
      return {
        ...state,
        sortBy: action.options.sortBy,
        sortDirection: action.options.sortDirection
      }
    default:
      return state
  }
}

const clientFSUpdateFacet = (state, action) => {
  const { facetID, value, latestValues } = action
  const newSelectionsSet = state.facets[facetID].selectionsSet
  if (newSelectionsSet.has(value)) {
    newSelectionsSet.delete(value)
  } else {
    newSelectionsSet.add(value)
  }
  const updatedFacets = {
    ...state.facets,
    [facetID]: {
      ...state.facets[facetID],
      selectionsSet: newSelectionsSet
    }
  }
  return {
    ...state,
    facetUpdateID: ++state.facetUpdateID,
    facets: updatedFacets,
    lastlyUpdatedFacet: {
      facetID: facetID,
      values: latestValues
    }
  }
}

export default clientSideFacetedSearch
