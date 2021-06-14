import { handleDataFetchingAction } from '../general/results'

export const INITIAL_STATE = {
  results: null,
  resultUpdateID: 0,
  resultsSparqlQuery: null,
  paginatedResults: [],
  paginatedResultsSparqlQuery: null,
  resultCount: 0,
  page: -1,
  pagesize: 20,
  sortBy: 'num_activies',
  sortDirection: 'desc',
  fetching: false,
  fetchingResultCount: false,
  facetedSearchHeaderExpanded: true,
  instancePageHeaderExpanded: true,
  instanceTableData: null,
  instanceTableExternalData: null,
  instanceAnalysisData: null,
  instanceAnalysisDataUpdateID: 0,
  instanceSparqlQuery: null,
  maps: {
    placeMap: {
      center: [22.43, 10.37],
      zoom: 2
    },
    placesPeople: {
      center: [22.43, 10.37],
      zoom: 2
    }
  },
  properties: [
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
      id: 'altLabel',
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: true,
      minWidth: 170
    },
    {
      id: 'location',
      valueType: 'object',
      makeLink: false,
      externalLink: false,
      sortValues: false,
      numberedList: false,
      onlyOnInstancePage: true
    },
    {
      id: 'broader',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: false,
      numberedList: false,
      minWidth: 170
    },
    {
      id: 'nearby',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: false,
      numberedList: true,
      minWidth: 170,
      onlyOnInstancePage: true
    },
    {
      id: 'narrower',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: false,
      numberedList: true,
      minWidth: 170,
      onlyOnInstancePage: true
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
      sortValues: false,
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
    }, /**
    {
      id: 'num_activies',
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: false,
      numberedList: false,
      showSource: false,
      sourceExternalLink: false,
      minWidth: 70
    },
    */
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
  'places',
  'placesPeople',
  'placeByYear',
  'placeMap'
])

const places = (state = INITIAL_STATE, action) => {
  if (resultClasses.has(action.resultClass)) {
    return handleDataFetchingAction(state, action)
  } else return state
}

export default places
