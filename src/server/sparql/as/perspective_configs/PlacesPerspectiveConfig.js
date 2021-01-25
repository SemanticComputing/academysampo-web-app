import {
  placePropertiesInstancePage,
  placePropertiesFacesPage
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
    properties: placePropertiesFacesPage
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
        SELECT ?id (SUM(?weight) AS ?orderBy) WHERE {
          VALUES ?facetClass { <FACET_CLASS> }
          ?id a <FACET_CLASS> .
          OPTIONAL { ?id schema:sameAs ?link 
            OPTIONAL { ?link :weight ?w }
            BIND (COALESCE(?w, 1) AS ?weight)
          }
        } GROUP BY ?id 
      }
      `
    },
    num_activies: {
      orderByPattern: `
      {
        SELECT ?id ?orderBy WHERE {
          VALUES ?facetClass { <FACET_CLASS> }
          ?id a ?facetClass .
          OPTIONAL {
            ?id :number_of_events ?num
          }
          BIND (COALESCE(?num, 0) AS ?orderBy)
        }
      }
      `
    }
  }
}
