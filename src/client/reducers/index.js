import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import error from './error'
import options from './options'
import people from './as/people'
import relatives from './as/relatives'
import places from './as/places'
import placesFacets from './as/placesFacets'
import titles from './as/titles'
import nations from './as/nations'
import peopleFacets from './as/peopleFacets'
import perspective2Facets from './sampo/perspective2Facets'
import perspective3Facets from './sampo/perspective3Facets'
import animation from './mmm/animation'
import clientSideFacetedSearch from './mmm/clientSideFacetedSearch'

const reducer = combineReducers({
  people,
  relatives,
  places,
  titles,
  nations,
  peopleFacets,
  placesFacets,
  perspective3Facets,
  animation,
  options,
  error,
  clientSideFacetedSearch,
  toastr: toastrReducer
})

export default reducer
