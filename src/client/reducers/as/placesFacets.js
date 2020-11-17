import { handleFacetAction } from '../general/facets'

export const INITIAL_STATE = {
  updatedFacet: null,
  facetUpdateID: 0,
  updatedFilter: null,
  facets: {
    prefLabel: {
      id: 'prefLabel',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: null,
      sortDirection: null,
      sortButton: false,
      spatialFilterButton: false,
      isFetching: false,
      searchField: false,
      containerClass: 'one',
      filterType: 'textFilter',
      textFilter: null,
      priority: 1
    },
    broader: {
      id: 'broader',
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'prefLabel',
      sortDirection: 'asc',
      sortButton: false,
      spatialFilterButton: false,
      spatialFilterTab: '',
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null,
      patialFilter: null,
      type: 'hierarchical',
      selectAlsoSubconceptsButton: true,
      selectAlsoSubconcepts: true,
      priority: 6
    }
  }
}

const placesFacets = (state = INITIAL_STATE, action) => {
  if (action.facetClass === 'places') {
    return handleFacetAction(state, action, INITIAL_STATE)
  } else return state
}

export default placesFacets
