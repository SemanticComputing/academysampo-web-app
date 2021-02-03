export const placePropertiesInstancePage = `
{
  ?id skos:prefLabel ?prefLabel__id .
  FILTER (LANG(?prefLabel__id)="fi")
  BIND(?prefLabel__id AS ?prefLabel__prefLabel)
  BIND(CONCAT("/places/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__dataProviderUrl)
  BIND(?id as ?uri__prefLabel)
}
UNION
{
  ?id skos:altLabel ?altLabel .
}
UNION
{ 
  ?id skos:broader+ ?broader__id . 
  ?broader__id skos:prefLabel ?broader__prefLabel .
  BIND(CONCAT("/places/page/", REPLACE(STR(?broader__id), "^.*\\\\/(.+)", "$1")) AS ?broader__dataProviderUrl)
  FILTER (LANG(?broader__prefLabel)='fi')
}
UNION
{
  SELECT DISTINCT 
    ?id ?nearby__id ?nearby__prefLabel
    (CONCAT("/places/page/", REPLACE(STR(?nearby__id), "^.*\\\\/(.+)", "$1")) AS ?nearby__dataProviderUrl)
  WHERE {
    ?id skos:broader/(^skos:broader) ?nearby__id .
    FILTER (?nearby__id != ?id)
    
    ?nearby__id skos:prefLabel ?nearby__prefLabel ;
      :number_of_events ?nearby__sortby .
    FILTER (LANG(?nearby__prefLabel)='fi')
      
    } ORDER BY DESC(?nearby__sortby)
}
UNION
{ SELECT ?id ?narrower__id 
    # (CONCAT(?narrower__label, ' (', STR(COALESCE(?num_events, 0)), ')') AS ?narrower__prefLabel)
    (?narrower__label AS ?narrower__prefLabel)
    (CONCAT("/places/page/", REPLACE(STR(?narrower__id), "^.*\\\\/(.+)", "$1")) AS ?narrower__dataProviderUrl) 
  WHERE {
    ?narrower__id skos:broader ?id ;
                  skos:prefLabel ?narrower__label .
    FILTER EXISTS { [] schema:place ?narrower__id }
    FILTER (LANG(?narrower__label)='fi')
    FILTER (!(?narrower__id in (places:m3802)))
      
    OPTIONAL { ?narrower__id :number_of_events ?num_events }
  } ORDER BY DESC(?num_events)
}
UNION 
{
  ?id schema:sameAs ?externalLink__id .
  ?externalLink__id a/skos:prefLabel ?externalLink__prefLabel .
  BIND (?externalLink__id AS ?externalLink__dataProviderUrl)
}
UNION 
{ 
  ?peopleBorn__id :has_birth/schema:place ?id ;
            a :Person ;
            skos:prefLabel ?peopleBorn__prefLabel .
  BIND(CONCAT("/people/page/", REPLACE(STR(?peopleBorn__id), "^.*\\\\/(.+)", "$1")) AS ?peopleBorn__dataProviderUrl)
}
UNION 
{ 
  ?peopleBaptized__id :has_baptism/schema:place ?id ;
    a :Person ;
    skos:prefLabel ?peopleBaptized__prefLabel .
  BIND(CONCAT("/people/page/", REPLACE(STR(?peopleBaptized__id), "^.*\\\\/(.+)", "$1")) AS ?peopleBaptized__dataProviderUrl)
} 
UNION 
{ 
  ?peopleDied__id :has_death/schema:place ?id ;
    a :Person ;
    skos:prefLabel ?peopleDied__prefLabel .
  BIND(CONCAT("/people/page/", REPLACE(STR(?peopleDied__id), "^.*\\\\/(.+)", "$1")) AS ?peopleDied__dataProviderUrl)
} 
UNION 
{ 
  ?peopleBuried__id :has_burial/schema:place ?id ;
    a :Person ;
    skos:prefLabel ?peopleBuried__prefLabel .
  BIND(CONCAT("/people/page/", REPLACE(STR(?peopleBuried__id), "^.*\\\\/(.+)", "$1")) AS ?peopleBuried__dataProviderUrl)
} 
UNION
{
  SELECT DISTINCT ?id ?peopleActive__id 
    (CONCAT("/people/page/", REPLACE(STR(?peopleActive__id), "^.*\\\\/(.+)", "$1")) AS ?peopleActive__dataProviderUrl) 
    (CONCAT(?peopleActive__label, ' (', ?obj__label, ')') AS ?peopleActive__prefLabel) 
  {
    ?obj
        schema:place ?id ;
        skos:prefLabel ?obj__label .
    ?peopleActive__id 
        :has_title|:has_event ?obj ;
        a :Person ;
        skosxl:prefLabel/skos:prefLabel ?peopleActive__label .
  }
}
UNION
{ 
  SELECT DISTINCT ?id ?title__id ?title__prefLabel
    (CONCAT("/titles/page/", REPLACE(STR(?title__id), "^.*\\\\/(.+)", "$1")) AS ?title__dataProviderUrl)
  WHERE {
    { ?title__id schema:place ?id ; a :Title }
    UNION
    { ?evt schema:place ?id ; :has_title ?title__id }
    ?title__id a :Title ; skos:prefLabel ?title__prefLabel .
  }
}
UNiON
{
  ?id schema:image ?image__id ;
    skos:prefLabel ?image__description ;
    skos:prefLabel ?image__title .
    BIND(URI(CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=600")) as ?image__url)
}
UNION
{
  ?id geo:lat ?lat ; geo:long ?long .
  BIND (CONCAT('lat ', STR(?lat), ', long ',STR(?long)) as ?location__prefLabel)
  BIND (?location__prefLabel AS ?location__id)
}
UNION
{
  ?id :number_of_events ?num_activies
}
`
export const placePropertiesFacetPage = `
{
  ?id skos:prefLabel ?prefLabel__id .
  FILTER (LANG(?prefLabel__id)="fi")
  BIND(?prefLabel__id AS ?prefLabel__prefLabel)
  BIND(CONCAT("/places/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__dataProviderUrl)
  BIND(?id as ?uri__prefLabel)
}
UNION
{
  ?id skos:altLabel ?altLabel .
}
UNION
{ 
  ?id skos:broader+ ?broader__id . 
  ?broader__id skos:prefLabel ?broader__prefLabel .
  BIND(CONCAT("/places/page/", REPLACE(STR(?broader__id), "^.*\\\\/(.+)", "$1")) AS ?broader__dataProviderUrl)
  FILTER (LANG(?broader__prefLabel)='fi')
}
UNION
{
  ?id schema:sameAs ?externalLink__id .
  ?externalLink__id a/skos:prefLabel ?externalLink__prefLabel .
  BIND (?externalLink__id AS ?externalLink__dataProviderUrl)
}
UNiON
{
  ?id schema:image ?image__id ;
    skos:prefLabel ?image__description ;
    skos:prefLabel ?image__title .
    BIND(URI(CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=600")) as ?image__url)
}
UNION
{
  ?id :number_of_events ?num_activies
}
`

export const placePropertiesFacetResults = `
?id skos:prefLabel ?prefLabel__id .
BIND(?prefLabel__id AS ?prefLabel__prefLabel)
BIND(CONCAT("/places/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)

OPTIONAL {
  ?id skos:broader ?broader__id .
  ?broader__id skos:prefLabel ?broader__prefLabel .
  FILTER (LANG(?broader__prefLabel)="fi")
  BIND(CONCAT("/places/page/", REPLACE(STR(?broader__id), "^.*\\\\/(.+)", "$1")) AS ?broader__dataProviderUrl)
}
`

export const placePropertiesInfoWindow = `
?id skos:prefLabel ?prefLabel__id .
BIND(?prefLabel__id AS ?prefLabel__prefLabel)
BIND(CONCAT("/places/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
`

export const allPlacesQuery = `
SELECT *
WHERE {
  <FILTER>
  ?id a :Place .
  OPTIONAL {
    ?id wgs84:lat ?lat ;
        wgs84:long ?long .
  }
}
`

export const peopleRelatedTo = `
OPTIONAL {
  <FILTER>
  { ?related__id :has_event/schema:place ?id }
  UNION
  { ?related__id :has_title/schema:place ?id }
  VALUES ?rclass { :Person :ReferencedPerson }
  ?related__id a ?rclass ;
    skos:prefLabel ?related__prefLabel .
  BIND(CONCAT("/people/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
}
`

export const placeMapQuery = `
SELECT *
WHERE {
  { 
    VALUES ?id { <ID> }
    BIND("red" AS ?markerColor)
  } 
  UNION
  {
    ?id skos:broader+ <ID> 
    FILTER EXISTS { [] schema:place ?id }
  }
  

  ?id skos:prefLabel ?prefLabel .
  BIND(CONCAT("/places/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?dataProviderUrl)

  OPTIONAL {
    ?id geo:lat ?lat1 ;
      geo:long ?long1
  }
  OPTIONAL {
    ?id skos:broader [ geo:lat ?lat2 ; geo:long ?long2 ]
  }
  BIND (COALESCE(?lat1, ?lat2) AS ?lat)
  BIND (COALESCE(?long1, ?long2) AS ?long)

  # skip places with missing coordinates:
  FILTER(BOUND(?lat) && BOUND(?long))
}
`

// https://api.triplydb.com/s/fyCIq_tlO
export const placeByYearQuery = `
SELECT DISTINCT ?category 
  (SUM(?bir) AS ?Birth)
  (SUM(?dea) AS ?Death)
  (SUM(?eve) AS ?Event)
WHERE {
  VALUES ?id { <ID> }
  VALUES (?evt__class ?bir ?dea ?eve) {
    (:Birth 1 0 0)
    (:Baptism 1 0 0)
    (:Death 0 1 0)
    (:Burial 0 1 0)
    (:Career 0 0 1)
    (:Event 0 0 1)
    (:Study 0 0 1)
  }
  ?evt schema:place/skos:broader* ?id ;
    schema:date/gvp:estStart ?evt__time ;
    a ?evt__class .
  
  BIND (STR(year(?evt__time)) AS ?category)
} GROUP BY ?category ORDER BY ?category 
`
