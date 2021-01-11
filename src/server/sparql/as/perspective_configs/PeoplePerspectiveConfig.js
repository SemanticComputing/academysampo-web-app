import {
  peoplePropertiesInstancePage,
  peoplePropertiesFacetResults
} from '../sparql_queries/SparqlQueriesPeople'
import { prefixes } from '../sparql_queries/SparqlQueriesPrefixes'

const invalidTitles = `
        <http://ldf.fi/ammo/ylioppilas>
`

export const peoplePerspectiveConfig = {
  endpoint: {
    url: 'http://ldf.fi/yoma/sparql',
    prefixes,
    useAuth: true
  },
  facetClass: '<http://ldf.fi/schema/yoma/Person>',
  langTag: 'fi',
  langTagSecondary: 'sv',
  paginatedResults: {
    properties: peoplePropertiesFacetResults
  },
  instance: {
    properties: peoplePropertiesInstancePage,
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
    birthDateTimespan: {
      id: 'birthDateTimespan',
      facetValueFilter: '',
      sortByAscPredicate: ':date_of_origin/gvp:estStart',
      sortByDescPredicate: ':date_of_origin/gvp:estEnd',
      predicate: ':date_of_origin',
      startProperty: 'gvp:estStart',
      endProperty: 'gvp:estEnd',
      type: 'timespan'
    },
    title: {
      id: 'title',
      facetValueFilter: `
       FILTER(?id NOT IN (
        ${invalidTitles}
       ))
      `,
      predicate: ':has_title',
      labelPath: ':has_title/skos:prefLabel',
      parentProperty: '(:related_occupation|skos:broader)',
      parentPredicate: ':has_title/:related_occupation/skos:broader*',
      type: 'hierarchical'
    },
    birthPlace: {
      id: 'birthPlace',
      facetValueFilter: '',
      predicate: ':place_of_origin',
      labelPath: ':place_of_origin/skos:prefLabel',
      parentProperty: 'skos:broader',
      parentPredicate: ':place_of_origin/skos:broader+',
      type: 'hierarchical'
    },
    deathPlace: {
      id: 'deathPlace',
      facetValueFilter: '',
      predicate: ':place_of_end',
      labelPath: ':place_of_end/skos:prefLabel',
      parentProperty: 'skos:broader',
      parentPredicate: ':place_of_end/skos:broader+',
      type: 'hierarchical'
    },
    category: {
      id: 'category',
      facetValueFilter: '',
      predicate: ':has_category',
      labelPath: ':has_category/skos:prefLabel',
      parentProperty: 'skos:broader',
      parentPredicate: ':has_category/skos:broader+',
      type: 'hierarchical'
    },
    reference: {
      id: 'reference',
      facetValueFilter: '',
      predicate: ':has_reference',
      labelPath: ':has_reference/skos:prefLabel',
      parentProperty: 'skos:broader',
      parentPredicate: ':has_reference/skos:broader+',
      type: 'hierarchical'
    },
    organization: {
      id: 'organization',
      facetValueFilter: '',
      predicate: ':has_event/:organization',
      labelPath: ':has_event/:organization/skos:prefLabel',
      type: 'list'
    },
    studentnation: {
      id: 'studentnation',
      facetValueFilter: `
        FILTER(LANG(?prefLabel_) = '<LANG>')
      `,
      predicate: ':has_event/:student_nation',
      labelPath: ':has_event/:student_nation/skos:prefLabel',
      type: 'list'
    },
    database: {
      id: 'database',
      facetValueFilter: `
      FILTER EXISTS { ?id skos:prefLabel [] }
      `,
      predicate: 'schema:sameAs/rdf:type',
      labelPath: 'schema:sameAs/rdf:type/skos:prefLabel',
      type: 'list'
    },
    source: {
      id: 'source',
      facetValueFilter: '',
      labelPath: 'dct:source/skos:prefLabel',
      predicate: 'dct:source',
      type: 'list'
    },
    gender: {
      id: 'gender',
      facetValueFilter: '',
      labelPath: 'schema:gender/skos:prefLabel',
      predicate: 'schema:gender',
      type: 'list'
    },
    fname: {
      id: 'fname',
      labelPath: 'skosxl:prefLabel/schema:familyName'
    },
    enrollmentTimespan: {
      id: 'enrollmentTimespan',
      facetValueFilter: '',
      // labelPath: ':has_enrollment/schema:date/skos:prefLabel',
      sortByAscPredicate: ':has_enrollment/schema:date/gvp:estStart',
      sortByDescPredicate: ':has_enrollment/schema:date/gvp:estEnd',
      predicate: ':has_enrollment/schema:date',
      startProperty: 'gvp:estStart',
      endProperty: 'gvp:estEnd',
      type: 'timespan'
    },
    deathDateTimespan: {
      id: 'deathDateTimespan',
      facetValueFilter: '',
      sortByAscPredicate: ':date_of_end/gvp:estStart',
      sortByDescPredicate: ':date_of_end/gvp:estEnd',
      predicate: ':date_of_end',
      startProperty: 'gvp:estStart',
      endProperty: 'gvp:estEnd',
      type: 'timespan'
    },
    image: {
      labelPath: 'schema:image'
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
    }
  },
  relatives: {
    facetClass: '<http://ldf.fi/schema/yoma/ReferencedPerson>',
    prefLabel: {
      id: 'prefLabel',
      labelPath: 'skos:prefLabel',
      textQueryPredicate: '', // empty for querying the facetClass
      textQueryProperty: 'skos:prefLabel', // limit only to prefLabels
      type: 'text'
    },
    birthDateTimespan: {
      id: 'birthDateTimespan',
      facetValueFilter: '',
      sortByAscPredicate: ':date_of_origin/gvp:estStart',
      sortByDescPredicate: ':date_of_origin/gvp:estEnd',
      predicate: ':date_of_origin',
      startProperty: 'gvp:estStart',
      endProperty: 'gvp:estEnd',
      type: 'timespan'
    },
    title: {
      id: 'title',
      facetValueFilter: `
       FILTER(?id NOT IN (
        ${invalidTitles}
       ))
      `,
      predicate: ':has_title',
      labelPath: ':has_title/skos:prefLabel',
      parentProperty: '(:related_occupation|skos:broader)',
      parentPredicate: ':has_title/:related_occupation/skos:broader*',
      type: 'hierarchical'
    },
    birthPlace: {
      id: 'birthPlace',
      facetValueFilter: '',
      predicate: ':place_of_origin',
      labelPath: ':place_of_origin/skos:prefLabel',
      parentProperty: 'skos:broader',
      parentPredicate: ':place_of_origin/skos:broader+',
      type: 'hierarchical'
    },
    deathPlace: {
      id: 'deathPlace',
      facetValueFilter: '',
      predicate: ':place_of_end',
      labelPath: ':place_of_end/skos:prefLabel',
      parentProperty: 'skos:broader',
      parentPredicate: ':place_of_end/skos:broader+',
      type: 'hierarchical'
    },
    source: {
      id: 'source',
      facetValueFilter: '',
      labelPath: 'dct:source/skos:prefLabel',
      predicate: 'dct:source',
      type: 'list'
    },
    gender: {
      id: 'gender',
      facetValueFilter: '',
      labelPath: 'schema:gender/skos:prefLabel',
      predicate: 'schema:gender',
      type: 'list'
    },
    fname: {
      id: 'fname',
      labelPath: 'skosxl:prefLabel/schema:familyName'
    },
    deathDateTimespan: {
      id: 'deathDateTimespan',
      facetValueFilter: '',
      sortByAscPredicate: ':date_of_end/gvp:estStart',
      sortByDescPredicate: ':date_of_end/gvp:estEnd',
      predicate: ':date_of_end',
      startProperty: 'gvp:estStart',
      endProperty: 'gvp:estEnd',
      type: 'timespan'
    }
  }
}
