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
  sortBy: 'externalLink',
  sortDirection: 'desc',
  fetching: false,
  fetchingResultCount: false,
  facetedSearchHeaderExpanded: false,
  instancePageHeaderExpanded: false,
  instanceTableData: null,
  instanceTableExternalData: null,
  instanceSparqlQuery: null,
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
      id: 'image',
      valueType: 'image',
      previewImageHeight: 160,
      makeLink: true,
      externalLink: true,
      sortValues: false,
      numberedList: false,
      minWidth: 120,
      hideHeader: false
    },
    {
      id: 'enrollmentTimespan',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 100
    },
    {
      id: 'altLabel',
      valueType: 'string',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: true,
      minWidth: 220,
      onlyOnInstancePage: true
    },
    {
      id: 'entryText',
      valueType: 'string',
      renderAsHTML: true,
      HTMLParserTask: 'createReactRouterLinks',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      onlyOnInstancePage: true
    },
    {
      id: 'relativeText',
      valueType: 'string',
      renderAsHTML: true,
      HTMLParserTask: 'createReactRouterLinks',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      onlyOnInstancePage: true
    },
    {
      id: 'referenceText',
      valueType: 'string',
      renderAsHTML: true,
      HTMLParserTask: 'createReactRouterLinks',
      makeLink: false,
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
      makeLink: true,
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
      makeLink: true,
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
      numberedList: true,
      minWidth: 180
    },
    {
      id: 'place',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: true,
      minWidth: 180,
      onlyOnInstancePage: true
    },
    {
      id: 'studentnation',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: true,
      minWidth: 180
    },
    {
      id: 'category',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: true,
      minWidth: 220
    },
    {
      id: 'organization',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: true,
      minWidth: 220
    },
    {
      id: 'relative',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      sortBy: 'level',
      numberedList: true,
      onlyOnInstancePage: true
    },
    {
      id: 'otherrelative',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      sortBy: 'level',
      numberedList: true,
      onlyOnInstancePage: true
    },
    {
      id: 'related',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: true,
      onlyOnInstancePage: true
    },
    {
      id: 'similar',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      sortBy: 'distance',
      numberedList: true,
      onlyOnInstancePage: true
    },
    {
      id: 'reference',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: true,
      minWidth: 220
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
  'relationNetwork',
  'connections',
  'eventsByYear'
])

const people = (state = INITIAL_STATE, action) => {
  if (resultClasses.has(action.resultClass)) {
    return handleDataFetchingAction(state, action)
  } else return state
}

export default people
