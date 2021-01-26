export const organizationsPropertiesInstancePage = `
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
  ?id skos:altLabel ?altLabel__id .
  BIND (?altLabel__id AS ?altLabel__prefLabel )
}
UNION
{ SELECT DISTINCT ?id ?person__id ?person__prefLabel ?person__dataProviderUrl 
  ?title__id ?title__prefLabel ?title__dataProviderUrl
  WHERE {
  ?person__id :has_event ?evt .
   ?evt :organization ?id ; skos:prefLabel ?evt__label .

  ?person__id a :Person ;
    skosxl:prefLabel/skos:prefLabel ?person__label .
  
  OPTIONAL { ?evt :has_title ?title__id .
    ?title__id skos:prefLabel ?title__prefLabel .
    BIND(CONCAT("/titles/page/", REPLACE(STR(?title__id), "^.*\\\\/(.+)", "$1")) AS ?title__dataProviderUrl)
  }

  BIND(CONCAT(?person__label, ' (', ?evt__label, ')') AS ?person__prefLabel)
  BIND(CONCAT("/people/page/", REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
  }
}
UNION
  { SELECT DISTINCT ?id ?related__id
      (CONCAT (?related__label, ' (', STR(COUNT(?prs)), ')') AS ?related__prefLabel)
      (CONCAT("/organizations/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
    WHERE {
      ?prs :has_event/:organization ?id ; :has_event/:organization ?related__id .
      FILTER (?related__id != ?id)
      ?related__id skos:prefLabel ?related__label . 
    }
    GROUP BY ?id ?related__id ?related__label 
    ORDER BY DESC(COUNT(?prs))
} 
`
