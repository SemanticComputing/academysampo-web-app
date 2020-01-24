import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import error from './error'
import options from './options'
import people from './as/people'
import places from './as/places'
import perspective2 from './sampo/perspective2'
import perspective3 from './sampo/perspective3'
import peopleFacets from './as/peopleFacets'
import perspective2Facets from './sampo/perspective2Facets'
import perspective3Facets from './sampo/perspective3Facets'
import animation from './mmm/animation'
import clientSideFacetedSearch from './mmm/clientSideFacetedSearch'

const reducer = combineReducers({
  people,
  perspective2,
  perspective3,
  peopleFacets,
  perspective2Facets,
  perspective3Facets,
  places,
  animation,
  options,
  error,
  clientSideFacetedSearch,
  toastr: toastrReducer
})

export default reducer
