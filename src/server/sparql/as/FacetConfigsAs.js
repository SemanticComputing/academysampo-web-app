export const endpoint = 'http://ldf.fi/yoma/sparql'
// export const endpoint = 'http://localhost:3050/ds/sparql';

/* TODO:
  labelPath is only used when sorting results, so it should removed from
  facet configs
*/

const invalidTitles = `
        <http://ldf.fi/ammo/ylioppilas>
`

export const facetConfigs = {
  people: {
    facetClass: '<http://ldf.fi/yoma/schema/Person>',
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
  relative: {
    facetClass: '<http://ldf.fi/yoma/schema/ReferencedPerson>',
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
  },
  places: {
    facetClass: '<http://ldf.fi/yoma/schema/Place>',
    prefLabel: {
      id: 'prefLabel',
      labelPath: 'skos:prefLabel',
      textQueryPredicate: '', // empty for querying the facetClass
      textQueryProperty: 'skos:prefLabel', // limit only to prefLabels
      type: 'text'
    }
  }
}
