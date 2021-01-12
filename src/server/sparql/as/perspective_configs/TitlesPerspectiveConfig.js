import {
  titlePropertiesInstancePage,
  titlePropertiesFacetResults
} from '../sparql_queries/SparqlQueriesTitles'
import { prefixes } from '../sparql_queries/SparqlQueriesPrefixes'

export const titlesPerspectiveConfig = {
  endpoint: {
    url: 'http://ldf.fi/yoma/sparql',
    prefixes,
    useAuth: true
  },
  facetClass: '<http://ldf.fi/schema/yoma/Title>',
  langTag: 'fi',
  langTagSecondary: 'sv',
  paginatedResults: {
    properties: titlePropertiesFacetResults
  },
  instance: {
    properties: titlePropertiesInstancePage,
    relatedInstances: ''
  },
  facets: {
    prefLabel: {
      id: 'prefLabel',
      labelPath: 'skos:prefLabel',
      textQueryPredicate: '', // empty for querying the facetClass
      textQueryProperty: 'skos:prefLabel', // limit only to prefLabels
      type: 'text'
    },
    broad: {
      id: 'broad',
      facetValueFilter: '',
      predicate: ':related_occupation',
      labelPath: ':related_occupation/skos:prefLabel',
      parentProperty: '(:related_occupation|skos:broader)',
      parentPredicate: ':has_title/:related_occupation/skos:broader*',
      type: 'hierarchical'
    }
  }
}
