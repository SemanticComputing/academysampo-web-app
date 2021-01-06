export const timesPropertiesInstancePage = `

?id skos:prefLabel ?prefLabel__id .
BIND(?prefLabel__id AS ?prefLabel__prefLabel)

BIND(?id as ?uri__id)
BIND(?id as ?uri__dataProviderUrl)
BIND(?id as ?uri__prefLabel)

{
  ?id skos:broader ?broader__id .
  ?broader__id skos:prefLabel ?broader__prefLabel .
  BIND(CONCAT("/times/page/", REPLACE(STR(?broader__id), "^.*\\\\/(.+)", "$1")) AS ?broader__dataProviderUrl)
}
UNION
{ SELECT ?id ?narrower__id ?narrower__prefLabel ?narrower__dataProviderUrl
  WHERE {
    ?narrower__id skos:broader ?id ;
      skos:prefLabel ?narrower__prefLabel ;
      gvp:estStart ?__start .
    BIND(CONCAT("/times/page/", REPLACE(STR(?narrower__id), "^.*\\\\/(.+)", "$1")) AS ?narrower__dataProviderUrl)
  } ORDER BY ?__start
}
UNION
{
  ?enrolled__id :has_enrollment/schema:date ?id ;
    a :Person ;
    skos:prefLabel ?enrolled__prefLabel .
  BIND(CONCAT("/people/page/", REPLACE(STR(?enrolled__id), "^.*\\\\/(.+)", "$1")) AS ?enrolled__dataProviderUrl)
}
UNION
{
  ?born__id :date_of_origin ?id ;
    a :Person ;
    skos:prefLabel ?born__prefLabel .
  BIND(CONCAT("/people/page/", REPLACE(STR(?born__id), "^.*\\\\/(.+)", "$1")) AS ?born__dataProviderUrl)
}
UNION
{
  ?deceased__id :date_of_end ?id ;
    a :Person ;
    skos:prefLabel ?deceased__prefLabel .
  BIND(CONCAT("/people/page/", REPLACE(STR(?deceased__id), "^.*\\\\/(.+)", "$1")) AS ?deceased__dataProviderUrl)
}
`
