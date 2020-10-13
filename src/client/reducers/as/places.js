import { handleDataFetchingAction } from '../general/results'

export const INITIAL_STATE = {
  results: null,
  resultUpdateID: 0,
  resultsSparqlQuery: null,
  paginatedResults: [],
  paginatedResultsSparqlQuery: null,
  resultCount: 0,
  page: -1,
  pagesize: 10,
  sortBy: null,
  sortDirection: null,
  fetching: false,
  fetchingResultCount: false,
  facetedSearchHeaderExpanded: false,
  instancePageHeaderExpanded: false,
  instanceTableData: null,
  instanceTableExternalData: null,
  instanceSparqlQuery: null,
  properties: [
    {
      id: 'uri',
      valueType: 'object',
      makeLink: true,
      externalLink: true,
      sortValues: true,
      numberedList: false,
      onlyOnInstancePage: true
    },
    {
      id: 'prefLabel',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 170
    },
    {
      id: 'image',
      valueType: 'image',
      previewImageHeight: 160,
      makeLink: true,
      externalLink: true,
      sortValues: true,
      numberedList: false,
      minWidth: 120,
      hideHeader: false
    },
    {
      id: 'broader',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 170
    },
    {
      id: 'narrower',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: true,
      minWidth: 170
    },
    {
      id: 'peopleActive',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: true,
      minWidth: 250,
      onlyOnInstancePage: true
    },
    {
      id: 'peopleBorn',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: true,
      minWidth: 250,
      onlyOnInstancePage: true
    },
    {
      id: 'peopleBaptized',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: true,
      minWidth: 250,
      onlyOnInstancePage: true
    },
    {
      id: 'peopleDied',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: true,
      minWidth: 250,
      onlyOnInstancePage: true
    },
    {
      id: 'peopleBuried',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: true,
      minWidth: 250,
      onlyOnInstancePage: true
    },
    {
      id: 'title',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: true,
      minWidth: 250,
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
    }
  ]
}

const resultClasses = new Set([
  'peoplePlaces', 'places', 'peopleMigrations', 'placeByYear'
])

const places = (state = INITIAL_STATE, action) => {
  if (resultClasses.has(action.resultClass)) {
    return handleDataFetchingAction(state, action)
  } else return state
}

export default places
