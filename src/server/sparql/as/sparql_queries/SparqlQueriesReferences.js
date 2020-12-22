export const referencesPropertiesInstancePage = `
{
  ?id skos:prefLabel ?prefLabel__id .
  FILTER (LANG(?prefLabel__id)="fi")
  BIND(?prefLabel__id AS ?prefLabel__prefLabel)
  
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__dataProviderUrl)
  BIND(?id as ?uri__prefLabel)
} 
UNION
{ ?id skos:related ?related__id 
  BIND("Search page at ylioppilasmatrikkeli.helsinki.fi" AS ?related__prefLabel)
  BIND(?related__id AS ?related__dataProviderUrl)
}
UNION
{ 
  ?id skos:broader+ ?broader__id .
  ?broader__id skos:prefLabel ?broader__prefLabel .
  BIND(CONCAT("/references/page/", REPLACE(STR(?broader__id), "^.*\\\\/(.+)", "$1")) AS ?broader__dataProviderUrl)
}
UNION 
{ 
  ?narrower__id skos:broader ?id ;
    skos:prefLabel ?narrower__prefLabel .
  BIND(CONCAT("/references/page/", REPLACE(STR(?narrower__id), "^.*\\\\/(.+)", "$1")) AS ?narrower__dataProviderUrl)
}
UNION
{
  ?person__id :has_reference ?id ;
    a :Person ;
    skos:prefLabel ?person__prefLabel .
  BIND(CONCAT("/people/page/", REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
} `
