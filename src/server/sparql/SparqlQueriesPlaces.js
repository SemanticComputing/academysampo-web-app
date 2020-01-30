export const placePropertiesInstancePage = `
    {
      ?id skos:prefLabel ?prefLabel__id .
      BIND(?prefLabel__id AS ?prefLabel__prefLabel)
      BIND(CONCAT("/places/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
      BIND(?id as ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
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
      ?related__id :has_birth/schema:place ?id .
      ?related__id skos:prefLabel ?related__prefLabel .
      BIND(CONCAT("/people/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
    }
`

export const lastKnownLocationsAt = `
    OPTIONAL {
      <FILTER>
      ?related__id mmm-schema:last_known_location ?id .
      ?related__id skos:prefLabel ?related__prefLabel .
      BIND(CONCAT("/manuscripts/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
    }
`

export const actorsAt = `
    OPTIONAL {
      { ?related__id crm:P98i_was_born/crm:P7_took_place_at ?id }
      UNION
      { ?related__id crm:P100i_died_in/crm:P7_took_place_at ?id }
      UNION
      { ?related__id ^crm:P11_had_participant/crm:P7_took_place_at ?id }
      ?related__id skos:prefLabel ?related__prefLabel .
      BIND(CONCAT("/actors/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
    }
`
