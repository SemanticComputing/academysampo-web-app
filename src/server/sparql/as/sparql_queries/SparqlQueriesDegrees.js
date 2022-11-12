export const degreesPropertiesInstancePage = `
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
  ?id :has_title ?title__id 
  OPTIONAL { ?title__id skos:prefLabel ?title__prefLabel }
  BIND(CONCAT("/titles/page/", REPLACE(STR(?title__id), "^.*\\\\/(.+)", "$1")) AS ?title__dataProviderUrl)
}
UNION
{
  SELECT DISTINCT ?id ?person__id 
    (CONCAT(?person__label, ', ', ?_abbr) AS ?person__prefLabel)
    (CONCAT('/people/page/', REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
  WHERE {
    ?evt a ?id ; ^(:has_event/:has_part) ?person__id ; skos:prefLabel ?_abbr .
    OPTIONAL { ?evt schema:date/gvp:estEnd ?_time }
    ?person__id skosxl:prefLabel/skos:prefLabel ?person__label
    
  } ORDERBY ?_time
}
UNION
{
    SELECT DISTINCT ?id ?related__id
      (CONCAT (?related__label, ' (', STR(COUNT(?prs)), ')') AS ?related__prefLabel)
      (CONCAT("/degrees/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
    WHERE {
      ?id ^(:has_event/:has_part/a) ?prs .
      ?prs :has_event/:has_part/a ?related__id .
      FILTER(?related__id!=?id)
      ?related__id skos:prefLabel ?related__label . 
    } GROUPBY ?id ?related__id ?related__label 
    ORDER BY DESC (COUNT(?prs))
}
`

// https://api.triplydb.com/s/ucjwX-Jqi
export const degreeByYearQuery = `
SELECT DISTINCT ?category (COUNT(DISTINCT ?prs) AS ?Students)
WHERE {
  VALUES ?id { <ID> }
  ?id ^a [ 
    schema:date/gvp:estStart ?evt__time ;
    ^(:has_event/:has_part) ?prs ]
  BIND (STR(year(?evt__time)) AS ?category)
} GROUP BY ?category ORDER BY ?category
`
