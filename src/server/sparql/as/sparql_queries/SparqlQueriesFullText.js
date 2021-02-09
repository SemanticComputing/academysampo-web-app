export const fullTextSearchProperties = `
?id a ?type__id .
?type__id skos:prefLabel ?type__prefLabel_ .
BIND(STR(?type__prefLabel_) AS ?type__prefLabel)  # ignore language tags

{
  ?id a :Person ;
    skos:prefLabel ?prefLabel__id .
  BIND(?prefLabel__id as ?prefLabel__prefLabel)
  BIND(CONCAT("/people/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
}
UNION
{
  ?id a :Place ; skos:prefLabel ?prefLabel__id .
  FILTER EXISTS { [] schema:place ?id }
  BIND(?prefLabel__id as ?prefLabel__prefLabel)
  BIND(CONCAT("/places/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
}
UNION
{
  ?id a :Title ; skos:prefLabel ?prefLabel__id .
  BIND(?prefLabel__id as ?prefLabel__prefLabel)
  BIND(CONCAT("/titles/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
}
UNION
{
  ?id a :Category ; skos:prefLabel ?prefLabel__id .
  BIND(?prefLabel__id as ?prefLabel__prefLabel)
  BIND(CONCAT("/categories/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
}
UNION
{
  ?id a :StudentNation ; skos:prefLabel ?prefLabel__id .
  BIND(?prefLabel__id as ?prefLabel__prefLabel)
  BIND(CONCAT("/studentNations/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
}
UNION
{
  ?id a :Organization ; skos:prefLabel ?prefLabel__id .
  BIND(?prefLabel__id as ?prefLabel__prefLabel)
  BIND(CONCAT("/organizations/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
} 
`

/**
UNION
{
  ?id a :ReferencedPerson ; skos:prefLabel ?prefLabel__id .
  BIND(?prefLabel__id as ?prefLabel__prefLabel)
  BIND(CONCAT("/relatives/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
} */
