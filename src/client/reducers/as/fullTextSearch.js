import {
  FETCH_RESULTS_CLIENT_SIDE,
  UPDATE_RESULTS,
  CLEAR_RESULTS
} from '../../actions'

export const INITIAL_STATE = {
  query: '',
  results: [],
  textResultsFetching: false,
  spatialResultsFetching: false
}

const fullTextSearch = (state = INITIAL_STATE, action) => {
  if (action.resultClass === 'all') {
    switch (action.type) {
      case FETCH_RESULTS_CLIENT_SIDE:
        return {
          ...state,
          [`${action.jenaIndex}ResultsFetching`]: true
        }
      case UPDATE_RESULTS:
        return {
          ...state,
          query: action.query,
          results: action.data,
          [`${action.jenaIndex}ResultsFetching`]: false
        }
      case CLEAR_RESULTS:
        return {
          ...state,
          results: null,
          fetchingResults: false,
          query: '',
          resultsFilter: {
            prefLabel: new Set(),
            type: new Set()
          }
        }
      default:
        return state
    }
  } else return state
}

export default fullTextSearch
