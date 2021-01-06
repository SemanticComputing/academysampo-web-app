export const nationsPropertiesInstancePage = `

?id skos:prefLabel ?prefLabel__id .
FILTER (LANG(?prefLabel__id)="fi")
BIND(?prefLabel__id AS ?prefLabel__prefLabel)

BIND(?id as ?uri__id)
BIND(?id as ?uri__dataProviderUrl)
BIND(?id as ?uri__prefLabel)

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
  { ?person__id :student_nation ?id }
  UNION
  { ?person__id :has_event/:student_nation ?id }
  ?person__id a :Person ;
    skos:prefLabel ?person__prefLabel .
  BIND(CONCAT("/people/page/", REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
  
  OPTIONAL { 
    { ?person__id :student_nation ?related__id }
    UNION
    { ?person__id :has_event/:student_nation ?related__id }
    FILTER (?related__id != ?id)
    ?related__id skos:prefLabel ?related__prefLabel .
    BIND(CONCAT("/nations/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
  }
}
UNION
{ 
  ?id :wikidata ?externalLink__id. 
  BIND ("Wikidata" AS ?externalLink__prefLabel)
  BIND (?externalLink__id AS ?externalLink__dataProviderUrl)
}
`
