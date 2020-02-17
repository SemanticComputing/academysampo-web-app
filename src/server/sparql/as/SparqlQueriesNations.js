export const nationsPropertiesInstancePage = `

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
{
    ?id skos:prefLabel ?altLabel__id .
    FILTER (LANG(?altLabel__id)!="fi")
    BIND (?altLabel__id AS ?altLabel__prefLabel )
}
UNION
{
  ?person__id :has_event/:student_nation ?id ;
    a :Person ;
    skos:prefLabel ?person__prefLabel .
  BIND(CONCAT("/people/page/", REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
}
`


