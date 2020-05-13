export const categoriesPropertiesInstancePage = `

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
  ?id skos:broader+ ?broader__id . 
  ?broader__id skos:prefLabel ?broader__prefLabel .
  BIND(CONCAT("/categories/page/", REPLACE(STR(?broader__id), "^.*\\\\/(.+)", "$1")) AS ?broader__dataProviderUrl)
}
UNION 
{ 
  ?narrower__id skos:broader ?id ;
    skos:prefLabel ?narrower__prefLabel .
  BIND(CONCAT("/categories/page/", REPLACE(STR(?narrower__id), "^.*\\\\/(.+)", "$1")) AS ?narrower__dataProviderUrl)
}
UNION
{
  ?id schema:place ?place__id .
	?place__id skos:prefLabel ?place__prefLabel .
	BIND(CONCAT("/places/page/", REPLACE(STR(?place__id), "^.*\\\\/(.+)", "$1")) AS ?place__dataProviderUrl)
}
UNION
{
  ?person__id :has_category ?id ;
    a :Person ;
    skos:prefLabel ?person__prefLabel .
  BIND(CONCAT("/people/page/", REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
}

`


