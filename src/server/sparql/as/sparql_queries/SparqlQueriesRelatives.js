export const relativesPropertiesInstancePage = `

?id skos:prefLabel ?prefLabel__id .
BIND(?prefLabel__id AS ?prefLabel__prefLabel)

BIND(?id as ?uri__id)
BIND(?id as ?uri__dataProviderUrl)
BIND(?id as ?uri__prefLabel)

{
  ?id skosxl:altLabel/skos:prefLabel ?altLabel__id .
  BIND (?altLabel__id AS ?altLabel__prefLabel )
}
UNION
{
  ?id skosxl:prefLabel/schema:familyName ?fname .
}
UNION
{
  ?id skosxl:prefLabel/schema:givenName ?gname__prefLabel .
  BIND(?gname__prefLabel AS ?gname__id)
}
UNION
{
  ?id a :ReferencedPerson .
  BIND ("Matrikkelissa mainittu sukulainen" AS ?type)
}
UNION 
{ 
  ?id :has_birth|:has_baptism ?bir 
  OPTIONAL {
      ?bir schema:place ?birthPlace__id .
      ?birthPlace__id skos:prefLabel ?birthPlace__prefLabel .
      BIND(CONCAT("/places/page/", REPLACE(STR(?birthPlace__id), "^.*\\\\/(.+)", "$1")) AS ?birthPlace__dataProviderUrl)
  }
  OPTIONAL {
      ?bir schema:date ?birthDateTimespan__id .
      ?birthDateTimespan__id skos:prefLabel ?birthDateTimespan__prefLabel .
      OPTIONAL { ?birthDateTimespan__id gvp:estStart ?birthDateTimespan__start }
      OPTIONAL { ?birthDateTimespan__id gvp:estEnd ?birthDateTimespan__end }
  }
}
UNION
{ 
  ?id :has_death|:has_burial ?dea
  OPTIONAL {
      ?dea schema:place ?deathPlace__id .
      ?deathPlace__id skos:prefLabel ?deathPlace__prefLabel .
      BIND(CONCAT("/places/page/", REPLACE(STR(?deathPlace__id), "^.*\\\\/(.+)", "$1")) AS ?deathPlace__dataProviderUrl)
  }
  OPTIONAL {
      ?dea schema:date ?deathDateTimespan__id .
      ?deathDateTimespan__id skos:prefLabel ?deathDateTimespan__prefLabel .
      OPTIONAL { ?deathDateTimespan__id gvp:estStart ?deathDateTimespan__start }
      OPTIONAL { ?deathDateTimespan__id gvp:estEnd ?deathDateTimespan__end }
  }
}
UNION
{
  { ?id :has_title ?title__id } UNION { ?id :has_event/:has_title ?title__id }
OPTIONAL { ?title__id skos:prefLabel ?title__prefLabel }
BIND(CONCAT("/titles/page/", REPLACE(STR(?title__id), "^.*\\\\/(.+)", "$1")) AS ?title__dataProviderUrl)
}
UNION
{
  ?id schema:sameAs ?externalLink__id .
  ?externalLink__id skos:prefLabel ?externalLink__prefLabel .
  BIND (?externalLink__id AS ?externalLink__dataProviderUrl)
}
UNION
{ ?id dct:source ?source__id .
  ?source__id 
    skos:prefLabel ?source__prefLabel ;
    skos:related ?source__dataProviderUrl .
}
UNION
{
  ?id schema:gender ?gender__id. 
  ?gender__id skos:prefLabel ?gender__prefLabel .
  FILTER (LANG(?gender__prefLabel)='fi')
  BIND (?gender__id AS ?gender__dataProviderUrl)
} 
UNION
{
  ?id :in_bio ?referer__id. 
  ?referer__id skos:prefLabel ?referer__prefLabel .
  BIND(CONCAT("/people/page/", REPLACE(STR(?referer__id), "^.*\\\\/(.+)", "$1")) AS ?referer__dataProviderUrl)
} 
UNION
{
  ?id bioc:has_family_relation  ?relative__id .
  OPTIONAL { ?relative__id a/rels:level ?relative__level }
  ?relative__id skos:prefLabel ?relative__prefLabel ;
  bioc:inheres_in ?relative__personUrl .
  ?relative__personUrl a :Person .
  BIND(CONCAT("/people/page/", REPLACE(STR(?relative__personUrl), "^.*\\\\/(.+)", "$1")) AS ?relative__dataProviderUrl)
}
UNION
{
  ?id bioc:has_family_relation  ?otherrelative__id .
  OPTIONAL { ?otherrelative__id a/rels:level ?otherrelative__level }
  ?otherrelative__id skos:prefLabel ?otherrelative__prefLabel ;
  bioc:inheres_in ?otherrelative__personUrl .
  ?otherrelative__personUrl a :ReferencedPerson .
  BIND(CONCAT("/relatives/page/", REPLACE(STR(?otherrelative__personUrl), "^.*\\\\/(.+)", "$1")) AS ?otherrelative__dataProviderUrl)
}
UNION
{
  ?id schema:image ?image__id ;
    skos:prefLabel ?image__description ;
    skos:prefLabel ?image__title .
    BIND(URI(CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=600")) as ?image__url)
}
`
