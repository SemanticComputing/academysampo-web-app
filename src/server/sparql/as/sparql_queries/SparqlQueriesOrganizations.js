export const organizationsPropertiesInstancePage = `
{
  ?id skos:prefLabel ?prefLabel__id .
  FILTER (LANG(?prefLabel__id)="fi")
  BIND(?prefLabel__id AS ?prefLabel__prefLabel)
  
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__dataProviderUrl)
  BIND(?id as ?uri__prefLabel)
} 
UNION
{
  ?id skos:altLabel ?altLabel__id .
  BIND (?altLabel__id AS ?altLabel__prefLabel )
}
UNION
{ SELECT DISTINCT ?id ?person__id ?person__prefLabel ?person__dataProviderUrl WHERE {
  ?person__id :has_event ?evt .
   ?evt :organization ?id ; skos:prefLabel ?evt__label .

  ?person__id a :Person ;
    skosxl:prefLabel/skos:prefLabel ?person__label .
   
  BIND(CONCAT(?person__label, ' (', ?evt__label, ')') AS ?person__prefLabel)
  BIND(CONCAT("/people/page/", REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
  } 
} `
