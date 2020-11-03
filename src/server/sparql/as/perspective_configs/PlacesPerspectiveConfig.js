import {
  placePropertiesInstancePage
} from '../sparql_queries/SparqlQueriesPlaces'
import { prefixes } from '../sparql_queries/SparqlQueriesPrefixes'

export const placesPerspectiveConfig = {
  endpoint: {
    url: 'http://ldf.fi/yoma/sparql',
    prefixes,
    useAuth: true
  },
  facetClass: '<http://ldf.fi/schema/yoma/Place>',
  defaultConstraint: 'FILTER EXISTS { [] schema:place <SUBJECT> }',
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
    },
    broader: {
      id: 'broader',
      facetValueFilter: '',
      predicate: 'skos:broader',
      labelPath: 'skos:broader/skos:prefLabel',
      parentProperty: 'skos:broader',
      parentPredicate: 'skos:broader+',
      type: 'hierarchical'
    },
    image: {
      labelPath: 'schema:image'
    },
    altLabel: {
      labelPath: 'skos:altLabel'
    },
    externalLink: {
      orderByPattern: `
      {
        SELECT ?id (COUNT(?link) AS ?orderBy) WHERE {
          VALUES ?facetClass { <FACET_CLASS> }
          ?id a <FACET_CLASS> .
          OPTIONAL { ?id :yso|:geonames|:wikidata|:wikipedia ?link }
        } GROUP BY ?id 
      }
      `
    }
  }
}
