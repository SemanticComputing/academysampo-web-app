import {
  titlesPropertiesInstancePage,
  titlesPropertiesFacetResults
} from '../sparql_queries/SparqlQueriesTitles'
import { prefixes } from '../sparql_queries/SparqlQueriesPrefixes'

export const titlesPerspectiveConfig = {
  endpoint: {
    url: 'http://ldf.fi/yoma/sparql',
    prefixes,
    useAuth: true
  },
  facetClass: '<http://ldf.fi/schema/yoma/Title>',
  includeInSitemap: true,
  langTag: 'fi',
  langTagSecondary: 'sv',
  paginatedResults: {
    properties: titlesPropertiesFacetResults
  },
  instance: {
    properties: titlesPropertiesInstancePage,
    relatedInstances: '',
    defaultTab: 'table'
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
      predicate: ':related_occupation',
      labelPath: ':related_occupation/skos:prefLabel',
      parentProperty: 'skos:broader',
      type: 'hierarchical'
    },
    place: {
      id: 'place',
      facetValueFilter: '',
      predicate: 'schema:place',
      labelPath: 'schema:place/skos:prefLabel',
      parentProperty: 'skos:broader',
      parentPredicate: 'schema:place/skos:broader*',
      type: 'hierarchical'
    },
    totalcount: { // TODO: is there now an easier way to do this?
      id: 'totalcount',
      orderByPattern: `
        {
          SELECT ?id (COUNT(DISTINCT ?prs) AS ?orderBy)
          WHERE {
            VALUES ?facetClass { <FACET_CLASS> }
            ?id a ?facetClass .
            { ?prs :has_title ?id }
            UNION 
            { ?prs :has_event/:has_title ?id }

            VALUES ?prs_class { :Person :ReferencedPerson }
            ?prs a ?prs_class
          } GROUPBY ?id 
        }
      `
    }
  }
}
