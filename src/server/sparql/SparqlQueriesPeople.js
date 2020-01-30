export const peoplePropertiesInstancePage = `

?id skos:prefLabel ?prefLabel__id .
BIND(?prefLabel__id AS ?prefLabel__prefLabel)
BIND(CONCAT("/people/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
BIND(?id as ?uri__id)
BIND(?id as ?uri__dataProviderUrl)
BIND(?id as ?uri__prefLabel)
{
?id skosxl:altLabel/skos:prefLabel ?altLabel .
}
UNION
{
  ?id skosxl:prefLabel/schema:familyName ?fname__prefLabel .
  BIND(?fname__prefLabel AS ?fname__id)
}
UNION
{
  ?id skosxl:prefLabel/schema:givenName ?gname__prefLabel .
  BIND(?gname__prefLabel AS ?gname__id)
}
UNION
{ 
  ?id :has_birth ?bir 
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
?id :has_enrollment [ schema:date ?enrollmentTimespan__id ; skos:prefLabel ?enrollmentTimespan__prefLabel ]
OPTIONAL { ?enrollmentTimespan__id gvp:estStart ?enrollmentTimespan__start }
OPTIONAL { ?enrollmentTimespan__id gvp:estEnd ?enrollmentTimespan__end }
} 
UNION
{ 
  ?id :has_death ?dea
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
?id :has_title ?title__id .
OPTIONAL { ?title__id skos:prefLabel ?title__prefLabel }
BIND(CONCAT("/titles/page/", REPLACE(STR(?title__id), "^.*\\\\/(.+)", "$1")) AS ?title__dataProviderUrl)
}
UNION
{
?id :has_event/schema:place ?place__id .
?place__id skos:prefLabel ?place__prefLabel .
BIND(CONCAT("/places/page/", REPLACE(STR(?place__id), "^.*\\\\/(.+)", "$1")) AS ?place__dataProviderUrl)
}
UNION 
{
  ?id :has_event/:student_nation ?studentnation__id .
  ?studentnation__id skos:prefLabel ?studentnation__prefLabel .
  FILTER (LANG(?studentnation__prefLabel)='fi')
  BIND(CONCAT("/nations/page/", REPLACE(STR(?studentnation__id), "^.*\\\\/(.+)", "$1")) AS ?studentnation__dataProviderUrl)
}
UNION
{
  ?id :wikidata ?externalLink__id. 
  BIND ("Wikidata" AS ?externalLink__prefLabel)
  BIND (?externalLink AS ?externalLink__dataProviderUrl)
}
UNION
{
  ?id schema:relatedLink ?externalLink__id. 
  BIND ("Ylioppilasmatrikkeli" AS ?externalLink__prefLabel)
  BIND (?externalLink AS ?externalLink__dataProviderUrl)
}
UNION
{
?id ^:supervisor/a :Study .
BIND("Supervisor" as ?role)
}
UNION
{
?id :has_event/a :RectorPeriod .
BIND("Rector" as ?role)
}
`

export const peoplePropertiesFacetResults =
  `?id skos:prefLabel ?prefLabel__id .
  BIND(?prefLabel__id AS ?prefLabel__prefLabel)
  BIND(CONCAT("/people/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__dataProviderUrl)
  BIND(?id as ?uri__prefLabel)
  {
  ?id skosxl:altLabel/skos:prefLabel ?altLabel .
  }
  UNION
  {
    ?id skosxl:prefLabel/schema:familyName ?fname__prefLabel .
    BIND(?fname__prefLabel AS ?fname__id)
  }
  UNION
  {
    ?id skosxl:prefLabel/schema:givenName ?gname__prefLabel .
    BIND(?gname__prefLabel AS ?gname__id)
  }
  UNION
  { 
    ?id :has_birth ?bir 
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
  ?id :has_enrollment [ schema:date ?enrollmentTimespan__id ; skos:prefLabel ?enrollmentTimespan__prefLabel ]
  OPTIONAL { ?enrollmentTimespan__id gvp:estStart ?enrollmentTimespan__start }
  OPTIONAL { ?enrollmentTimespan__id gvp:estEnd ?enrollmentTimespan__end }
  } 
  UNION
  { 
    ?id :has_death ?dea
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
  ?id (:has_event*)/:has_title ?title__id .
  OPTIONAL { ?title__id skos:prefLabel ?title__prefLabel }
  BIND(CONCAT("/titles/page/", REPLACE(STR(?title__id), "^.*\\\\/(.+)", "$1")) AS ?title__dataProviderUrl)
  }
  UNION
  {
  ?id (:has_event|:has_title)/schema:place ?place__id .
  ?place__id skos:prefLabel ?place__prefLabel .
  BIND(CONCAT("/places/page/", REPLACE(STR(?place__id), "^.*\\\\/(.+)", "$1")) AS ?place__dataProviderUrl)
  }
  UNION 
  {
    ?id :has_event/:student_nation ?studentnation__id .
    ?studentnation__id skos:prefLabel ?studentnation__prefLabel .
    FILTER (LANG(?studentnation__prefLabel)='fi')
    BIND(CONCAT("/nations/page/", REPLACE(STR(?studentnation__id), "^.*\\\\/(.+)", "$1")) AS ?studentnation__dataProviderUrl)
  }
  UNION
  {
    ?id :wikidata ?externalLink__id. 
    BIND ("Wikidata" AS ?externalLink__prefLabel)
    BIND (?externalLink AS ?externalLink__dataProviderUrl)
  }
  UNION
  {
    ?id schema:relatedLink ?externalLink__id. 
    BIND ("Ylioppilasmatrikkeli" AS ?externalLink__prefLabel)
    BIND (?externalLink AS ?externalLink__dataProviderUrl)
  }
  UNION 
  { ?id dct:source ?source__id .
    ?source__id skos:prefLabel ?source__prefLabel .
  }
`


export const peoplePlacesQuery = `
  SELECT ?id ?lat ?long
  (COUNT(DISTINCT ?person) as ?instanceCount)
  WHERE {
    <FILTER>
    ?person :has_birth/schema:place ?id .
    ?id geo:lat ?lat ;
    geo:long ?long .
  }
  GROUP BY ?id ?lat ?long
`
