import {
  placePropertiesInstancePage
  // placePropertiesFacetResults,
} from '../sparql_queries/SparqlQueriesPlaces'
import { prefixes } from '../sparql_queries/SparqlQueriesPrefixes'

export const placesPerspectiveConfig = {
  endpoint: {
    url: 'http://ldf.fi/yoma/sparql',
    prefixes,
    useAuth: true
  },
  facetClass: '<http://ldf.fi/schema/yoma/Place>',
  paginatedResults: {
    properties: placePropertiesInstancePage
  },
  instance: {
    properties: placePropertiesInstancePage,
    relatedInstances: ''
  },
  facets: {
    prefLabel: {
      id: 'prefLabel',
      labelPath: 'skos:prefLabel',
      textQueryPredicate: '', // empty for querying the facetClass
      textQueryProperty: 'skos:prefLabel', // limit only to prefLabels
      type: 'text'
    }
  }
}