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
import categories from './as/categories'
import organizations from './as/organizations'
import perspective3Facets from './sampo/perspective3Facets'
import animation from './mmm/animation'
import clientSideFacetedSearch from './sampo/clientSideFacetedSearch'

const reducer = combineReducers({
  people,
  relatives,
  places,
  titles,
  nations,
  categories,
  organizations,
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
