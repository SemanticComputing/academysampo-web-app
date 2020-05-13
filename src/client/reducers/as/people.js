import {
  FETCH_RESULTS,
  FETCH_RESULT_COUNT,
  FETCH_RESULTS_FAILED,
  FETCH_PAGINATED_RESULTS,
  FETCH_PAGINATED_RESULTS_FAILED,
  FETCH_BY_URI,
  UPDATE_RESULT_COUNT,
  UPDATE_RESULTS,
  UPDATE_PAGINATED_RESULTS,
  UPDATE_INSTANCE,
  UPDATE_PAGE,
  UPDATE_ROWS_PER_PAGE,
  SORT_RESULTS,
  UPDATE_PERSPECTIVE_HEADER_EXPANDED,
  UPDATE_URL,
  UPDATE_INSTANCE_NETWORK_DATA
} from '../../actions'
import {
  fetchResults,
  fetchResultsFailed,
  fetchResultCount,
  updateSortBy,
  updateResultCount,
  updateResults,
  updatePaginatedResults,
  updateInstance,
  updateInstanceNetworkData,
  updatePage,
  updateRowsPerPage,
  updateHeaderExpanded
} from '../helpers'

export const INITIAL_STATE = {
  results: null,
  resultUpdateID: 0,
  resultsSparqlQuery: null,
  paginatedResults: [],
  paginatedResultsSparqlQuery: null,
  instance: null,
  instanceNetworkData: null,
  instanceSparqlQuery: null,
  resultCount: 0,
  page: -1,
  pagesize: 10,
  sortBy: null,
  sortDirection: null,
  fetching: false,
  fetchingResultCount: false,
  facetedSearchHeaderExpanded: false,
  instancePageHeaderExpanded: false,
  properties: [
    {
      id: 'prefLabel',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 220
    },
    {
      id: 'enrollmentTimespan',
      valueType: 'object',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 100
    },
    {
      id: 'altLabel',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 220,
      onlyOnInstancePage: true
    },
    {
      id: 'externalLink',
      valueType: 'object',
      makeLink: true,
      externalLink: true,
      sortValues: true,
      numberedList: false,
      minWidth: 150
    },
    {
      id: 'entryText',
      valueType: 'string',
      renderAsHTML: true,
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      onlyOnInstancePage: true
    },
    {
      id: 'relativeText',
      valueType: 'string',
      renderAsHTML: true,
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      onlyOnInstancePage: true
    },
    {
      id: 'referenceText',
      valueType: 'string',
      renderAsHTML: true,
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      onlyOnInstancePage: true
    },
    {
      id: 'sourcereference',
      valueType: 'string',
      renderAsHTML: true,
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      onlyOnInstancePage: true
    },
    {
      id: 'source',
      valueType: 'object',
      makeLink: true,
      externalLink: true,
      sortValues: true,
      numberedList: false,
      minWidth: 150
    },
    {
      id: 'gender',
      valueType: 'object',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 80
    },
    {
      id: 'birthDateTimespan',
      valueType: 'object',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 100
    },
    {
      id: 'birthPlace',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 100
    },
    {
      id: 'deathDateTimespan',
      valueType: 'object',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 100
    },
    {
      id: 'deathPlace',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 100
    },
    {
      id: 'title',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 180
    },
    {
      id: 'place',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 180,
      onlyOnInstancePage: true
    },
    {
      id: 'category',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 220
    },
    {
      id: 'organization',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 220
    },
    {
      id: 'studentnation',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 180
    },
    {
      id: 'relative',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      sortBy: 'level',
      numberedList: false,
      onlyOnInstancePage: true
    },
    {
      id: 'related',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      onlyOnInstancePage: true
    },
    {
      id: 'similar',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      sortBy: 'distance',
      numberedList: false,
      onlyOnInstancePage: true
    },
    {
      id: 'uri',
      valueType: 'object',
      makeLink: true,
      externalLink: true,
      sortValues: true,
      numberedList: false,
      onlyOnInstancePage: true
    }
  ]
}

const resultClasses = new Set([
  'people',
  'peopleNetwork',
  'familyNetwork',
  'academicNetwork',
  'peoplePointCloud',
  'relationNetwork'
])

const people = (state = INITIAL_STATE, action) => {
  if (resultClasses.has(action.resultClass)) {
    switch (action.type) {
      case FETCH_RESULTS:
      case FETCH_PAGINATED_RESULTS:
      case FETCH_BY_URI:
        return fetchResults(state)
      case FETCH_RESULT_COUNT:
        return fetchResultCount(state)
      case FETCH_RESULTS_FAILED:
      case FETCH_PAGINATED_RESULTS_FAILED:
        return fetchResultsFailed(state)
      case SORT_RESULTS:
        return updateSortBy(state, action)
      case UPDATE_RESULT_COUNT:
        return updateResultCount(state, action)
      case UPDATE_RESULTS:
        return updateResults(state, action)
      case UPDATE_PAGINATED_RESULTS:
        return updatePaginatedResults(state, action)
      case UPDATE_INSTANCE:
        return updateInstance(state, action)
      case UPDATE_INSTANCE_NETWORK_DATA:
        return updateInstanceNetworkData(state, action)
      case UPDATE_PAGE:
        return updatePage(state, action)
      case UPDATE_ROWS_PER_PAGE:
        return updateRowsPerPage(state, action)
      case UPDATE_PERSPECTIVE_HEADER_EXPANDED:
        return updateHeaderExpanded(state, action)
      case UPDATE_URL:
        return (state)
      default:
        return state
    }
  } else return state
}

export default people
