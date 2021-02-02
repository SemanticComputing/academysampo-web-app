import { handleFacetAction } from '../general/facets'

export const INITIAL_STATE = {
  updatedFacet: null,
  facetUpdateID: 0,
  updatedFilter: null,
  facets: {}
  /**
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
       textFilter: null
      }
    }
    */
}

const studentNationsFacets = (state = INITIAL_STATE, action) => {
  if (action.facetClass === 'studentNations') {
    return handleFacetAction(state, action, INITIAL_STATE)
  } else return state
}

export default studentNationsFacets
