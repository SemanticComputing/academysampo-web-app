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
  FILTER NOT EXISTS { ?ammo__id skos:broader :not_in_ammo }
  # BIND( IF(?ammo__id=?broad, CONCAT("/titles/page/", REPLACE(STR(?ammo__id), "^.*\\\\/(.+)", "$1")), "") AS ?ammo__dataProviderUrl)
}
UNION
{ SELECT DISTINCT ?id ?related__id (COUNT(?person__id) AS ?countprs)
    (CONCAT(?related__label, ' (', STR(?countprs), ')') AS ?related__prefLabel)
    (CONCAT("/titles/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1"), "") AS ?related__dataProviderUrl)
  WHERE {
    { ?person__id :has_title ?id } UNION { ?person__id :has_event/:has_title ?id }
    { ?person__id :has_title ?related__id } UNION { ?person__id :has_event/:has_title ?related__id }
    FILTER (?related__id!=?id)
    ?related__id skos:prefLabel ?related__label
  } GROUPBY ?id ?related__id ?related__label ORDER BY DESC(?countprs) LIMIT 12
}
UNION
{
  ?id schema:place ?place__id .
  ?place__id skos:prefLabel ?place__prefLabel .
  BIND(CONCAT("/places/page/", REPLACE(STR(?place__id), "^.*\\\\/(.+)", "$1")) AS ?place__dataProviderUrl)
}
UNION
{ SELECT ?id (COUNT(DISTINCT ?prs) AS ?totalcount) {
  { ?prs :has_title ?id } 
  UNION 
  { ?prs :has_event/:has_title ?id }
  VALUES ?prs_class { :Person :ReferencedPerson }
  ?prs a ?prs_class 
  } GROUPBY ?id
}
UNION
{
  SELECT DISTINCT ?id ?person__id
      (CONCAT(?person__label, COALESCE(SAMPLE(?postfix), '')) AS ?person__prefLabel)
      (CONCAT(?link_start, REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
    {
      {
        ?obj :has_title ?id ; skos:prefLabel ?obj__label .
        ?person__id :has_event ?obj .
        BIND(CONCAT(' (', ?obj__label, ')') AS ?postfix)
      }
      UNION
      {
        ?person__id :has_title ?id
      }
      
      ?person__id
        skosxl:prefLabel/skos:prefLabel ?person__label ;
        a ?person__class .
      
      VALUES (?person__class ?link_start) {
        (:Person '/people/page/')
        (:ReferencedPerson '/relatives/page/')
    }
  } GROUPBY ?id ?person__id ?person__label ?link_start 
}
`

export const titlesPropertiesFacetResults = `
  ?id skos:prefLabel ?prefLabel__id .
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
    ?id :related_occupation ?broader__id .
    ?broader__id skos:prefLabel ?broader__prefLabel .
    BIND(CONCAT("/titles/page/", REPLACE(STR(?broader__id), "^.*\\\\/(.+)", "$1")) AS ?broader__dataProviderUrl)

    OPTIONAL {
      ?broader__id skos:broader* ?ammo__id .
      ?ammo__id skos:prefLabel ?ammo__prefLabel .
      BIND(CONCAT("/titles/page/", REPLACE(STR(?ammo__id), "^.*\\\\/(.+)", "$1")) AS ?ammo__dataProviderUrl)
      FILTER NOT EXISTS { ?ammo__id skos:broader :not_in_ammo }
    }
  }
  UNION
  { SELECT ?id (COUNT(DISTINCT ?prs) AS ?totalcount) {
    { ?prs :has_title ?id }
    UNION 
    { ?prs :has_event/:has_title ?id }

    VALUES ?prs_class { :Person :ReferencedPerson }
    ?prs a ?prs_class
    } GROUPBY ?id
  }
  UNION
  {
    ?id schema:place ?place__id .
    ?place__id skos:prefLabel ?place__prefLabel .
    BIND(CONCAT("/places/page/", REPLACE(STR(?place__id), "^.*\\\\/(.+)", "$1")) AS ?place__dataProviderUrl)
  }
`

// https://api.triplydb.com/s/WfxaTI92x
export const titleByYearQuery = `
SELECT DISTINCT ?category (COUNT(DISTINCT ?people__id) AS ?People)
WHERE {
  VALUES ?id { <ID> }
  {
    # titles from events with dates
  ?people__id :has_event [
      :has_title ?id ;
      schema:date/gvp:estStart ?evt__time ]
  } UNION {
    # titles mentioned without date
  ?people__id :has_title ?id ;
              :date_of_origin/gvp:estStart ?bir__time .
    BIND((?bir__time + "P10957DT0H0M0.000S"^^xsd:duration) AS ?evt__time)
  }
  BIND (STR(year(?evt__time)) AS ?category)
  
} GROUP BY ?category ORDER BY ?category 
`
