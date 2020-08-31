import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
// general reducers:
import error from './general/error'
import options from './general/options'
import animation from './general/animation'
import leafletMap from './general/leafletMap'
// portal spefic reducers:
import people from './as/people'
import relatives from './as/relatives'
import places from './as/places'
import placesFacets from './as/placesFacets'
import titles from './as/titles'
import nations from './as/nations'
import peopleFacets from './as/peopleFacets'
import categories from './as/categories'
import organizations from './as/organizations'
import fullTextSearch from './as/fullTextSearch'

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
  leafletMap,
  animation,
  options,
  error,
  fullTextSearch,
  toastr: toastrReducer
})

export default reducer
