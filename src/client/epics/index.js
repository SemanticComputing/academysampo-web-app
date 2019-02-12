import { ajax } from 'rxjs/ajax';
import { mergeMap, map, withLatestFrom } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import { stringify } from 'query-string';
import {
  updateResults,
  updatePlaces,
  updatePlace,
  updateFacet,
  FETCH_FACET,
  FETCH_RESULTS,
  FETCH_PLACES,
  FETCH_PLACE,
} from '../actions';

const apiUrl = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:3001/api/'
  : `http://${location.hostname}/api/`;

const getResults = (action$, state$) => action$.pipe(
  ofType(FETCH_RESULTS),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
    const requestUrl = `${apiUrl + action.resultClass}?${resultStateToUrl(state.search, state.facet)}`;
    return ajax.getJSON(requestUrl).pipe(
      map(response => updateResults({ data: response }))
    );
  })
);

const getPlaces = action$ => action$.pipe(
  ofType(FETCH_PLACES),
  mergeMap(action => {
    const searchUrl = apiUrl + 'places';
    const requestUrl = `${searchUrl}?variant=${action.variant}`;
    return ajax.getJSON(requestUrl).pipe(
      map(response => updatePlaces({ places: response }))
    );
  })
);

const getPlace = action$ => action$.pipe(
  ofType(FETCH_PLACE),
  mergeMap(action => {
    const searchUrl = apiUrl + 'places';
    const requestUrl = `${searchUrl}/${encodeURIComponent(action.placeId)}`;
    return ajax.getJSON(requestUrl).pipe(
      map(response => updatePlace({ place: response }))
    );
  })
);

const getFacet = (action$, state$) => action$.pipe(
  ofType(FETCH_FACET),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
    let params = {
      sortBy: action.sortBy,
      sortDirection: action.sortDirection
    };
    let filters = {};
    let activeFilters = false;
    for (const [key, value] of Object.entries(state.facet.facetFilters)) {
      if (value.size != 0) {
        activeFilters = true;
        filters[key] = Array.from(value);
      }
    }
    if (activeFilters) {
      params.filters = JSON.stringify(filters);
    }
    const requestUrl = `${apiUrl}facet/${action.id}?${stringify(params)}`;
    return ajax.getJSON(requestUrl).pipe(
      map(res => updateFacet({
        id: action.id,
        distinctValueCount: res.distinctValueCount,
        values: res.values,
        sortBy: action.sortBy,
        sortDirection: action.sortDirection
      }))
    );
  })
);

export const resultStateToUrl = (search, facet) => {
  let params = {
    page: search.page,
    pagesize: search.pagesize,
    sortBy: search.sortBy,
    sortDirection: search.sortDirection
  };
  let filters = {};
  let activeFilters = false;
  for (const [key, value] of Object.entries(facet.facetFilters)) {
    if (value.size != 0) {
      activeFilters = true;
      filters[key] = Array.from(value);
    }
  }
  if (activeFilters) {
    params.filters = JSON.stringify(filters);
  }
  return stringify(params);
};

const rootEpic = combineEpics(
  getResults,
  getPlaces,
  getPlace,
  getFacet,
);

export default rootEpic;
