export const studentNationsPropertiesInstancePage = `

?id skos:prefLabel ?prefLabel__id .
FILTER (LANG(?prefLabel__id)='<LANG>')
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
    FILTER (LANG(?altLabel__id)!='<LANG>')
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
  { SELECT ?id (COUNT(DISTINCT ?prs) AS ?numberOfPeople) {
    { ?prs :student_nation ?id }
  UNION
  { ?prs :has_event/:student_nation ?id }
    ?prs a :Person 
  } GROUP BY ?id
  }
UNION
{
  { SELECT DISTINCT ?id ?role__id ?role__prefLabel ?role__dataProviderUrl
    {
      ?evt__id :student_nation ?id ; :has_title ?title__id ; skos:prefLabel ?evt__label .
      ?title__id a :Title ; skos:prefLabel ?title__label .
      FILTER (REGEX(?title__label, '^osakunnan '))
      
      ?role__id :has_event ?evt__id ; skosxl:prefLabel/skos:prefLabel ?role__label .
      BIND(CONCAT(?title__label, ': ', ?role__label, ' (', ?evt__label, ')') AS ?role__prefLabel)
      BIND(CONCAT("/people/page/", REPLACE(STR(?role__id), "^.*\\\\/(.+)", "$1")) AS ?role__dataProviderUrl)
      
      OPTIONAL { ?evt__id schema:date/gvp:estStart ?evt__start }
    } ORDER BY ?evt__start
  }
}
UNION
{ 
  ?id :wikidata ?externalLink__id. 
  BIND ("Wikidata" AS ?externalLink__prefLabel)
  BIND (?externalLink__id AS ?externalLink__dataProviderUrl)
}
`

export const studentNationsPropertiesFacetResults = `
{
  ?id skos:prefLabel ?prefLabel__id .
  FILTER (LANG(?prefLabel__id)='<LANG>')
  BIND(?prefLabel__id AS ?prefLabel__prefLabel)
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__dataProviderUrl)
  BIND(?id as ?uri__prefLabel)
  BIND(CONCAT("/studentNations/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
}
UNION
{
  ?id skos:altLabel ?altLabel
}
UNION
  { 
    SELECT ?id (COUNT(DISTINCT ?prs) AS ?numberOfPeople) {
      { ?prs :student_nation ?id }
      UNION
      { ?prs :has_event/:student_nation ?id }
      ?prs a :Person
    }   GROUP BY ?id
  }
UNION
{ 
  ?id :wikidata ?externalLink__id. 
  BIND ("Wikidata" AS ?externalLink__prefLabel)
  BIND (?externalLink__id AS ?externalLink__dataProviderUrl)
}
`

/** TODO this piece of query returns a different result than https://api.triplydb.com/s/c3WtDl3KB
 UNION
{
  SELECT DISTINCT ?id ?place__id
  (CONCAT(?place__label, ' (', STR(COUNT(DISTINCT ?prs)), ')')  AS ?place__prefLabel)
  (CONCAT("/places/page/", REPLACE(STR(?place__id), "^.*\\\\/(.+)", "$1")) AS ?place__dataProviderUrl)
  {

 { ?prs :student_nation ?id }
 UNION
 { ?prs :has_event/:student_nation ?id }
 ?prs a :Person ;
         :place_of_origin ?place__id .
 ?place__id skos:prefLabel ?place__label . FILTER(lang(?place__label)='fi')

}  GROUP BY ?id ?place__id ?place__label
  ORDER BY DESC(COUNT(DISTINCT ?prs)) LIMIT 20
}
*/

// https://api.triplydb.com/s/v-cnFMKbM
export const nationByYearQuery = `
SELECT DISTINCT ?category (COUNT(DISTINCT ?person__id) AS ?Registerings)
WHERE {
  VALUES ?id { <ID> }
  ?person__id :has_event/:student_nation ?id ;
    :has_enrollment/schema:date/gvp:estStart ?enr__time .
  BIND (STR(year(?enr__time)) AS ?category)
} 
GROUP BY ?category 
ORDER BY ?category 
`
