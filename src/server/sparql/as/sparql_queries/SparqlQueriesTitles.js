export const titlesPropertiesInstancePage = `

{
?id skos:prefLabel ?prefLabel__id .
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
  ?id :related_occupation ?broad .
  ?broad skos:broader* ?ammo__id .
  ?ammo__id skos:prefLabel ?ammo__prefLabel .
  # BIND( IF(?ammo__id=?broad, CONCAT("/titles/page/", REPLACE(STR(?ammo__id), "^.*\\\\/(.+)", "$1")), "") AS ?ammo__dataProviderUrl)
  
  OPTIONAL {
    ?related__id :related_occupation ?broad .
    FILTER (?related__id != ?id)
    ?related__id skos:prefLabel ?related__prefLabel .
    BIND(CONCAT("/titles/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
  }
}
UNION
{
  ?id schema:place ?place__id .
  ?place__id skos:prefLabel ?place__prefLabel .
  BIND(CONCAT("/places/page/", REPLACE(STR(?place__id), "^.*\\\\/(.+)", "$1")) AS ?place__dataProviderUrl)
}
UNION
{
  { ?person__id :has_title ?id } UNION { ?person__id :has_event/:has_title ?id }
  {
    ?person__id a :Person .
    BIND(CONCAT("/people/page/", REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
  } UNION {
    ?person__id a :ReferencedPerson .
    BIND(CONCAT("/relatives/page/", REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
  }
  ?person__id skos:prefLabel ?person__prefLabel .
}
`

export const titlePropertiesFacetResults =
  `?id skos:prefLabel ?prefLabel__id .
  BIND(?prefLabel__id AS ?prefLabel__prefLabel)
  BIND(CONCAT("/titles/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__dataProviderUrl)
  BIND(?id as ?uri__prefLabel)

  {
    ?id skos:altLabel ?altLabel__id .
    BIND (?altLabel__id AS ?altLabel__prefLabel )
  }
  UNION
  { 
    ?id :related_occupation ?broad .
    ?broad skos:broader* ?ammo__id .
    ?ammo__id skos:prefLabel ?ammo__prefLabel .
    # BIND( IF(?ammo__id=?broad, CONCAT("/titles/page/", REPLACE(STR(?ammo__id), "^.*\\\\/(.+)", "$1")), "") AS ?ammo__dataProviderUrl)
    
    OPTIONAL {
        ?related__id :related_occupation ?broad .
        FILTER (?related__id != ?id)
        ?related__id skos:prefLabel ?related__prefLabel .
        BIND(CONCAT("/titles/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
    }
  }
  UNION
  {
    ?id schema:place ?place__id .
    ?place__id skos:prefLabel ?place__prefLabel .
    BIND(CONCAT("/places/page/", REPLACE(STR(?place__id), "^.*\\\\/(.+)", "$1")) AS ?place__dataProviderUrl)
  }
`
