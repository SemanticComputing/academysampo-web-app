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
        ?id skos:broader+ ?broader__id . 
        ?broader__id skos:prefLabel ?broader__prefLabel .
        BIND(CONCAT("/places/page/", REPLACE(STR(?broader__id), "^.*\\\\/(.+)", "$1")) AS ?broader__dataProviderUrl)
        FILTER (LANG(?broader__prefLabel)='fi')
      }
      UNION 
      { 
        ?narrower__id skos:broader ?id ; skos:prefLabel ?narrower__prefLabel .
        FILTER EXISTS { [] schema:place ?narrower__id }
        BIND(CONCAT("/places/page/", REPLACE(STR(?narrower__id), "^.*\\\\/(.+)", "$1")) AS ?narrower__dataProviderUrl)
        FILTER (LANG(?narrower__prefLabel)='fi')
      }
      UNION 
      { 
        ?id :wikidata ?externalLink__id . 
        BIND ("Wikidata" AS ?externalLink__prefLabel)
        BIND (?externalLink__id AS ?externalLink__dataProviderUrl)
      } 
      UNION 
      { 
        ?id :wikipedia ?externalLink__id . 
        BIND ("Wikipedia" AS ?externalLink__prefLabel)
        BIND (?externalLink__id AS ?externalLink__dataProviderUrl)
      } 
      UNION 
      { 
        ?id :yso ?externalLink__id . 
        BIND ("YSO" AS ?externalLink__prefLabel)
        BIND (?externalLink__id AS ?externalLink__dataProviderUrl)
      } 
      UNION 
      { 
        ?id owl:sameAs ?externalLink__id . 
        FILTER (REGEX(STR(?externalLink__id), 'geonames.org'))
        BIND ("Geonames" AS ?externalLink__prefLabel)
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
        { ?peopleActive__id :has_event/schema:place ?id }
        UNION
        { ?peopleActive__id :has_title/schema:place ?id }
        ?peopleActive__id a :Person ; skos:prefLabel ?peopleActive__prefLabel .
        BIND(CONCAT("/people/page/", REPLACE(STR(?peopleActive__id), "^.*\\\\/(.+)", "$1")) AS ?peopleActive__dataProviderUrl)
      } 
      UNION 
      { 
        ?title__id schema:place ?id ; 
          a :Title ;
          skos:prefLabel ?title__prefLabel .
        BIND(CONCAT("/titles/page/", REPLACE(STR(?title__id), "^.*\\\\/(.+)", "$1")) AS ?title__dataProviderUrl)
      } 
    
`

export const placePropertiesFacetResults = `
    {
      ?id skos:prefLabel ?prefLabel__id .
      BIND(?prefLabel__id AS ?prefLabel__prefLabel)
      BIND(CONCAT("/places/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
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
      ?related__id skos:prefLabel ?related__prefLabel .
      BIND(CONCAT("/people/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
    }
`
