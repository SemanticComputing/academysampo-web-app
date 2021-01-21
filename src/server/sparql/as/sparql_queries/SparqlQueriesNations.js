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
  { SELECT ?id (COUNT(DISTINCT ?prs) AS ?totalcount) {
    { ?prs :student_nation ?id }
  UNION
  { ?prs :has_event/:student_nation ?id }
    ?prs a :Person 
  } GROUPBY ?id
  }
UNION
{ 
  ?id :wikidata ?externalLink__id. 
  BIND ("Wikidata" AS ?externalLink__prefLabel)
  BIND (?externalLink__id AS ?externalLink__dataProviderUrl)
}
`

export const nationsPropertiesFacetResults = `
?id skos:prefLabel ?prefLabel__id .
FILTER (LANG(?prefLabel__id)="fi")
BIND(?prefLabel__id AS ?prefLabel__prefLabel)

BIND(?id as ?uri__id)
BIND(?id as ?uri__dataProviderUrl)
BIND(?id as ?uri__prefLabel)

{
    ?id skos:altLabel ?altLabel
}
UNION
  { SELECT ?id (COUNT(DISTINCT ?prs) AS ?number_of_students) {
    { ?prs :student_nation ?id }
  UNION
  { ?prs :has_event/:student_nation ?id }
    ?prs a :Person
  } GROUPBY ?id
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
} GROUP BY ?category ORDER BY ?category 
`
