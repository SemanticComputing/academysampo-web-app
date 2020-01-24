/* TODO:
  labelPath is only used when sorting results, so it should removed from
  facet configs
*/
const invalidTransferOfCustodyTimespans = `
        <http://ldf.fi/mmm/time/bibale_element_478356>
`

const invalidActors = `
        <http://ldf.fi/mmm/actor/sdbm_names/>
`

const invalidLanguages = `
        <http://ldf.fi/mmm/language/sdbm_languages/>
`

const invalidMaterials = `
        <http://ldf.fi/mmm/material/>
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
    }
  }
}
