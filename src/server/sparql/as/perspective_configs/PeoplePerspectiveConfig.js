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
      sortByAscPredicate: ':has_birth/schema:date/gvp:estStart',
      sortByDescPredicate: ':has_birth/schema:date/gvp:estEnd',
      predicate: ':has_birth/schema:date',
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
      predicate: ':has_birth/schema:place',
      labelPath: ':has_birth/schema:place/skos:prefLabel',
      parentProperty: 'skos:broader',
      parentPredicate: ':has_birth/schema:place/skos:broader+',
      type: 'hierarchical'
    },
    deathPlace: {
      id: 'deathPlace',
      facetValueFilter: '',
      predicate: ':has_death/schema:place',
      labelPath: ':has_death/schema:place/skos:prefLabel',
      parentProperty: 'skos:broader',
      parentPredicate: ':has_death/schema:place/skos:broader+',
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
    organization: {
      id: 'organization',
      facetValueFilter: '',
      predicate: ':has_event/:organization',
      labelPath: ':has_event/:organization/skos:prefLabel',
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
      sortByAscPredicate: ':has_death/schema:date/gvp:estStart',
      sortByDescPredicate: ':has_death/schema:date/gvp:estEnd',
      predicate: ':has_death/schema:date',
      startProperty: 'gvp:estStart',
      endProperty: 'gvp:estEnd',
      type: 'timespan'
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
      sortByAscPredicate: ':has_birth/schema:date/gvp:estStart',
      sortByDescPredicate: ':has_birth/schema:date/gvp:estEnd',
      predicate: ':has_birth/schema:date',
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
      predicate: ':has_birth/schema:place',
      labelPath: ':has_birth/schema:place/skos:prefLabel',
      parentProperty: 'skos:broader',
      parentPredicate: ':has_birth/schema:place/skos:broader+',
      type: 'hierarchical'
    },
    deathPlace: {
      id: 'deathPlace',
      facetValueFilter: '',
      predicate: ':has_death/schema:place',
      labelPath: ':has_death/schema:place/skos:prefLabel',
      parentProperty: 'skos:broader',
      parentPredicate: ':has_death/schema:place/skos:broader+',
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
      sortByAscPredicate: ':has_death/schema:date/gvp:estStart',
      sortByDescPredicate: ':has_death/schema:date/gvp:estEnd',
      predicate: ':has_death/schema:date',
      startProperty: 'gvp:estStart',
      endProperty: 'gvp:estEnd',
      type: 'timespan'
    }
  }
}