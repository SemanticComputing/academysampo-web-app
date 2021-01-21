import {
  studentNationsPropertiesInstancePage,
  studentNationsPropertiesFacetResults
} from '../sparql_queries/SparqlQueriesStudentNations'
import { prefixes } from '../sparql_queries/SparqlQueriesPrefixes'

export const studentNationsPerspectiveConfig = {
  endpoint: {
    url: 'http://ldf.fi/yoma/sparql',
    prefixes,
    useAuth: true
  },
  facetClass: '<http://ldf.fi/schema/yoma/StudentNation>',
  langTag: 'fi',
  langTagSecondary: 'sv',
  paginatedResults: {
    properties: studentNationsPropertiesFacetResults
  },
  instance: {
    properties: studentNationsPropertiesInstancePage,
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
    numberOfPeople: { // TODO: is there now an easier way to do this?
      id: 'numberOfPeople',
      orderByPattern: `
        {
          SELECT ?id (COUNT(?prs) AS ?orderBy)
          WHERE {
            VALUES ?facetClass { <FACET_CLASS> }
            ?id a ?facetClass .
            { ?prs :student_nation ?id }
            UNION
            { ?prs :has_event/:student_nation ?id }
          } GROUP BY ?id 
        }
      `
    }
  }
}
