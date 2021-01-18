export const peoplePropertiesInstancePage = `
?id skos:prefLabel ?prefLabel__id .
BIND(?prefLabel__id AS ?prefLabel__prefLabel)

BIND(?id as ?uri__id)
BIND(?id as ?uri__dataProviderUrl)
BIND(?id as ?uri__prefLabel)

{
  ?id skosxl:altLabel/skos:prefLabel ?altLabel 
}
UNION
{
  ?id a :Person .
  BIND ("Matrikkelissa mainittu ylioppilas" AS ?type)
}
UNION
{
  ?id a :ReferencedPerson .
  BIND ("Matrikkelissa mainittu sukulainen" AS ?type)
}
UNION
{ ?id :entry_text ?entryText }
UNION
{ ?id :reference_text ?referenceText }
UNION
{ ?id :relative_text ?relativeText }
UNION
{
  ?id :place_of_origin ?birthPlace__id .
  ?birthPlace__id skos:prefLabel ?birthPlace__prefLabel .
  FILTER (LANG(?birthPlace__prefLabel)="fi")
  BIND(CONCAT("/places/page/", REPLACE(STR(?birthPlace__id), "^.*\\\\/(.+)", "$1")) AS ?birthPlace__dataProviderUrl)
}
UNION {
  ?id :date_of_origin ?birthDateTimespan__id .
  ?birthDateTimespan__id skos:prefLabel ?birthDateTimespan__prefLabel .
  OPTIONAL { ?birthDateTimespan__id gvp:estStart ?birthDateTimespan__start }
  OPTIONAL { ?birthDateTimespan__id gvp:estEnd ?birthDateTimespan__end }
  BIND(CONCAT("/times/page/", REPLACE(STR(?birthDateTimespan__id), "^.*\\\\/(.+)", "$1")) AS ?birthDateTimespan__dataProviderUrl)
}
UNION
{
?id :has_enrollment [ schema:date ?enrollmentTimespan__id ; skos:prefLabel ?enrollmentTimespan__prefLabel ]
BIND(CONCAT("/times/page/", REPLACE(STR(?enrollmentTimespan__id), "^.*\\\\/(.+)", "$1")) AS ?enrollmentTimespan__dataProviderUrl)
# OPTIONAL { ?enrollmentTimespan__id gvp:estStart ?enrollmentTimespan__start }
# OPTIONAL { ?enrollmentTimespan__id gvp:estEnd ?enrollmentTimespan__end }
}
UNION
{
  ?id :place_of_end ?deathPlace__id .
  ?deathPlace__id skos:prefLabel ?deathPlace__prefLabel .
  FILTER (LANG(?deathPlace__prefLabel)="fi")
  BIND(CONCAT("/places/page/", REPLACE(STR(?deathPlace__id), "^.*\\\\/(.+)", "$1")) AS ?deathPlace__dataProviderUrl)
}
UNION 
{
  ?id :date_of_end ?deathDateTimespan__id .
  ?deathDateTimespan__id skos:prefLabel ?deathDateTimespan__prefLabel .
  OPTIONAL { ?deathDateTimespan__id gvp:estStart ?deathDateTimespan__start }
  OPTIONAL { ?deathDateTimespan__id gvp:estEnd ?deathDateTimespan__end }
  BIND(CONCAT("/times/page/", REPLACE(STR(?deathDateTimespan__id), "^.*\\\\/(.+)", "$1")) AS ?deathDateTimespan__dataProviderUrl)
}
UNION
{
  { ?id :has_title ?title__id } UNION { ?id :has_event/:has_title ?title__id }
  OPTIONAL { ?title__id skos:prefLabel ?title__prefLabel }
  BIND(CONCAT("/titles/page/", REPLACE(STR(?title__id), "^.*\\\\/(.+)", "$1")) AS ?title__dataProviderUrl)
}
UNION
{
  ?id :has_event/schema:place ?place__id .
  ?place__id skos:prefLabel ?place__prefLabel .
  BIND(CONCAT("/places/page/", REPLACE(STR(?place__id), "^.*\\\\/(.+)", "$1")) AS ?place__dataProviderUrl)
}
UNION
{
  ?id :has_event/:student_nation ?studentnation__id .
  ?studentnation__id skos:prefLabel ?studentnation__prefLabel .
  FILTER (LANG(?studentnation__prefLabel)='fi')
  BIND(CONCAT("/nations/page/", REPLACE(STR(?studentnation__id), "^.*\\\\/(.+)", "$1")) AS ?studentnation__dataProviderUrl)
}
UNION
{
  ?id :has_category ?category__id .
  ?category__id skos:prefLabel ?category__prefLabel .
  BIND(CONCAT("/categories/page/", REPLACE(STR(?category__id), "^.*\\\\/(.+)", "$1")) AS ?category__dataProviderUrl)
}
UNION
{
  ?id :has_reference ?reference__id .
  ?reference__id skos:prefLabel ?reference__prefLabel .
  BIND(CONCAT("/references/page/", REPLACE(STR(?reference__id), "^.*\\\\/(.+)", "$1")) AS ?reference__dataProviderUrl)
}
UNION
{
  ?id :has_event/:organization ?organization__id .
  ?organization__id skos:prefLabel ?organization__prefLabel .
  FILTER (LANG(?organization__prefLabel)='fi')
  BIND(CONCAT("/organizations/page/", REPLACE(STR(?organization__id), "^.*\\\\/(.+)", "$1")) AS ?organization__dataProviderUrl)
}
UNION
{
  ?id schema:sameAs ?externalLink__id .
  ?externalLink__id a/skos:prefLabel ?externalLink__prefLabel .
  BIND (?externalLink__id AS ?externalLink__dataProviderUrl)
}
UNION
{ ?id dct:source ?source__id .
  ?source__id
    skos:prefLabel ?source__prefLabel ;
    skos:related ?source__dataProviderUrl ;
    dct:author ?source__author ;
    dct:description ?source__desc .

    OPTIONAL {
      ?id schema:sameAs ?source__link ;
        skosxl:prefLabel/skos:prefLabel ?fullname .
      VALUES ?source__class { <http://ldf.fi/yoma/external/D1640> <http://ldf.fi/yoma/external/D1853> }
      ?source__link a ?source__class .
    }

    BIND (CONCAT(?source__author, ', <em>',
          ?source__prefLabel, ': ',
          REPLACE(?fullname, "^([^,]+), (.*)$", "$2 $1"), '</em>. ',
          ?source__desc,
          ' &lt;', str(?source__link), '&gt;. ',
          REPLACE(STR(NOW()), "^([0-9]{4})[-]0*([0-9]{1,2})[-]0*([0-9]{1,2}).+$", "Luettu $3.$2.$1.")
          )
        AS ?sourcereference)
}
UNION
{
  ?id schema:gender ?gender__id.
  ?gender__id skos:prefLabel ?gender__prefLabel .
  FILTER (LANG(?gender__prefLabel)='fi')
  BIND (?gender__id AS ?gender__dataProviderUrl)
}
UNION
{
  ?id ^:supervisor/a :Study .
  BIND("Supervisor" as ?role)
}
UNION
{
  ?id bioc:has_family_relation  ?relative__id .
  OPTIONAL { ?relative__id a/rels:level ?relative__level }
  ?relative__id skos:prefLabel ?relative__prefLabel ;
                bioc:inheres_in ?relative__personUrl .
  ?relative__personUrl a :Person .
  BIND(CONCAT("/people/page/", REPLACE(STR(?relative__personUrl), "^.*\\\\/(.+)", "$1")) AS ?relative__dataProviderUrl)
}
UNION
{
  ?id bioc:has_family_relation  ?otherrelative__id .
  OPTIONAL { ?otherrelative__id a/rels:level ?otherrelative__level }
  ?otherrelative__id skos:prefLabel ?otherrelative__prefLabel ;
                bioc:inheres_in ?otherrelative__personUrl .
  ?otherrelative__personUrl a :ReferencedPerson .
  BIND(CONCAT("/relatives/page/", REPLACE(STR(?otherrelative__personUrl), "^.*\\\\/(.+)", "$1")) AS ?otherrelative__dataProviderUrl)
}
UNION
{
  SELECT DISTINCT ?id 
    ?similar__id 
    (CONCAT("/people/page/", REPLACE(STR(?similar__id), "^.*\\\\/(.+)", "$1")) AS ?similar__dataProviderUrl) 
    (CONCAT(SAMPLE(?similar__label),': [', GROUP_CONCAT(DISTINCT ?link; separator="; "), ']') AS ?similar__prefLabel)
    WHERE {
      ?id ^rels:relates_to ?node .
      ?node
        a :Distance ;
        rels:relates_to ?similar__id ;
        :value ?similar__distance .
      FILTER (?similar__id != ?id)
    
      OPTIONAL { ?node :link_by [ skos:prefLabel ?link ; a ?link_class ]
        # do not show e.g. ammo hierarchy
        FILTER (REGEX(STR(?link_class), '/yoma/'))
      }
      ?similar__id skos:prefLabel ?similar__label .
  }
  GROUP BY ?id ?similar__id ?similar__distance ORDER BY ?similar__distance
}
UNION
{
  ?id bioc:has_person_relation ?related__id .
  ?related__id skos:prefLabel ?related__prefLabel ;
                bioc:inheres_in ?related__personUrl .
  BIND(CONCAT("/people/page/", REPLACE(STR(?related__personUrl), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
}
uNION
{
  ?id :has_event ?related__evt .
  ?related__evt :supervisor ?related__id ; skos:prefLabel ?related__label .
  ?related__id skos:prefLabel ?related__personLabel .
    BIND(CONCAT(?related__personLabel, ' (', ?related__label, ')') AS ?related__prefLabel)
  BIND(CONCAT("/people/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
}
UNIoN
{
  ?related__id :has_event [ :supervisor ?id ; skos:prefLabel ?evt_label ] ;
      skos:prefLabel ?prs_label .
      BIND(CONCAT("/people/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
      BIND (CONCAT(REPLACE(STR(?prs_label), '[(][^)]+[)]',''),': ',?evt_label) AS ?related__prefLabel)
}
UnION
{
?id :has_event/a :RectorPeriod .
BIND("Rector" as ?role)
}
UNiON
{
  ?id schema:image ?image__id ;
    skos:prefLabel ?image__description ;
    skos:prefLabel ?image__title .
    BIND(URI(CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=600")) as ?image__url)
}
`

export const peoplePropertiesFacetResults =
  `?id skos:prefLabel ?prefLabel__id .
  BIND(?prefLabel__id AS ?prefLabel__prefLabel)
  BIND(CONCAT("/people/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__dataProviderUrl)
  BIND(?id as ?uri__prefLabel)

  {
    ?id skosxl:prefLabel/schema:familyName ?fname .
  }
  UNION
  {
    ?id schema:image ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
      BIND(URI(CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=600")) as ?image__url)
  }
  UNION
  {
    ?id :place_of_origin ?birthPlace__id .
    ?birthPlace__id skos:prefLabel ?birthPlace__prefLabel .
    FILTER (LANG(?birthPlace__prefLabel)="fi")
    BIND(CONCAT("/places/page/", REPLACE(STR(?birthPlace__id), "^.*\\\\/(.+)", "$1")) AS ?birthPlace__dataProviderUrl)
  }
  UNION {
    ?id :date_of_origin ?birthDateTimespan__id .
    ?birthDateTimespan__id skos:prefLabel ?birthDateTimespan__prefLabel .
    OPTIONAL { ?birthDateTimespan__id gvp:estStart ?birthDateTimespan__start }
    OPTIONAL { ?birthDateTimespan__id gvp:estEnd ?birthDateTimespan__end }
  }
  UNION
  {
    ?id :has_enrollment [ schema:date ?enrollmentTimespan__id ; skos:prefLabel ?enrollmentTimespan__prefLabel ]
    BIND(CONCAT("/times/page/", REPLACE(STR(?enrollmentTimespan__id), "^.*\\\\/(.+)", "$1")) AS ?enrollmentTimespan__dataProviderUrl)
    OPTIONAL { ?enrollmentTimespan__id gvp:estStart ?enrollmentTimespan__start }
    OPTIONAL { ?enrollmentTimespan__id gvp:estEnd ?enrollmentTimespan__end }
  }
  UNION
  {
  ?id :place_of_end ?deathPlace__id .
  ?deathPlace__id skos:prefLabel ?deathPlace__prefLabel .
  FILTER (LANG(?deathPlace__prefLabel)="fi")
  BIND(CONCAT("/places/page/", REPLACE(STR(?deathPlace__id), "^.*\\\\/(.+)", "$1")) AS ?deathPlace__dataProviderUrl)
  }
  UNION 
  {
  ?id :date_of_end ?deathDateTimespan__id .
  ?deathDateTimespan__id skos:prefLabel ?deathDateTimespan__prefLabel .
  OPTIONAL { ?deathDateTimespan__id gvp:estStart ?deathDateTimespan__start }
  OPTIONAL { ?deathDateTimespan__id gvp:estEnd ?deathDateTimespan__end }
  }
  UNION
  {
    ?id :has_category ?category__id .
    ?category__id skos:prefLabel ?category__prefLabel .
    BIND(CONCAT("/categories/page/", REPLACE(STR(?category__id), "^.*\\\\/(.+)", "$1")) AS ?category__dataProviderUrl)
  }
  UNION
  {
  ?id :has_reference ?reference__id .
  ?reference__id skos:prefLabel ?reference__prefLabel .
  BIND(CONCAT("/references/page/", REPLACE(STR(?reference__id), "^.*\\\\/(.+)", "$1")) AS ?reference__dataProviderUrl)
  }
  UNION
  {
  ?id :has_title ?title__id . # { ?id :has_title ?title__id } UNION { ?id :has_event/:has_title ?title__id }
  # FILTER EXISTS { ?title__id :related_occupation/skos:broader [] }
  ?title__id skos:prefLabel ?title__prefLabel .
  BIND(CONCAT("/titles/page/", REPLACE(STR(?title__id), "^.*\\\\/(.+)", "$1")) AS ?title__dataProviderUrl)
  }
  UNION
  {
  ?id (:has_event|:has_title)/schema:place ?place__id .
  ?place__id skos:prefLabel ?place__prefLabel .
  BIND(CONCAT("/places/page/", REPLACE(STR(?place__id), "^.*\\\\/(.+)", "$1")) AS ?place__dataProviderUrl)
  }
  UNION
  {
  ?id :has_event/:organization ?organization__id .
  ?organization__id skos:prefLabel ?organization__prefLabel .
  FILTER (LANG(?organization__prefLabel)='fi')
  BIND(CONCAT("/organizations/page/", REPLACE(STR(?organization__id), "^.*\\\\/(.+)", "$1")) AS ?organization__dataProviderUrl)
  }
  UNION
  {
    { ?id :has_event/:student_nation ?studentnation__id }
    UNION
    { ?id :student_nation ?studentnation__id }
    ?studentnation__id skos:prefLabel ?studentnation__prefLabel .
    FILTER (LANG(?studentnation__prefLabel)='fi')
    BIND(CONCAT("/nations/page/", REPLACE(STR(?studentnation__id), "^.*\\\\/(.+)", "$1")) AS ?studentnation__dataProviderUrl)
  }
  UNION
  {
  ?id schema:sameAs ?externalLink__id .
  ?externalLink__id a/skos:prefLabel ?externalLink__prefLabel .
  BIND (?externalLink__id AS ?externalLink__dataProviderUrl)
  }
  UNION
  {
  ?id schema:gender ?gender__id.
  ?gender__id skos:prefLabel ?gender__prefLabel .
  FILTER (LANG(?gender__prefLabel)='fi')
  BIND (?gender__id AS ?gender__dataProviderUrl)
  }
  UNION
  { 
    ?id dct:source ?source__id .
    ?source__id skos:prefLabel ?source__prefLabel .
  }
`

export const peopleEventPlacesQuery = `
  SELECT ?id ?lat ?long
  (COUNT(DISTINCT ?person) as ?instanceCount)
  WHERE {
    <FILTER>

    { ?person :has_event/schema:place ?id }
    UNION
    { ?person :has_title/schema:place ?id }

    OPTIONAL {
      ?id geo:lat ?lat1 ;
        geo:long ?long1
    }
    OPTIONAL {
      ?id skos:broader [ geo:lat ?lat2 ; geo:long ?long2 ]
    }
    BIND (COALESCE(?lat1, ?lat2) AS ?lat)
    BIND (COALESCE(?long1, ?long2) AS ?long)
    
    # skip all places with missing coordinates:
    FILTER(BOUND(?lat))
    FILTER(BOUND(?long))
  }
  GROUP BY ?id ?lat ?long
`

// # https://github.com/uber/deck.gl/blob/master/docs/layers/arc-layer.md
export const peopleMigrationsQuery = `
SELECT DISTINCT ?id 
  ?person__id ?person__dataProviderUrl ?person__prefLabel
  ?from__id ?from__prefLabel ?from__lat ?from__long
  ?to__id ?to__prefLabel ?to__lat ?to__long 
WHERE {
  <FILTER>
  ?person__id a :Person ;
    :place_of_origin ?from__id ;
    :place_of_end ?to__id ;
    skos:prefLabel ?person__prefLabel .
  BIND(CONCAT("/people/page/", REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
  ?from__id skos:prefLabel ?from__prefLabel ;
            geo:lat ?from__lat ;
            geo:long ?from__long .
  FILTER (lang(?from__prefLabel)="fi")
  BIND(CONCAT("/places/page/", REPLACE(STR(?from__id), "^.*\\\\/(.+)", "$1")) AS ?from__dataProviderUrl)

  ?to__id skos:prefLabel ?to__prefLabel ;
          geo:lat ?to__lat ;
          geo:long ?to__long .
  FILTER (lang(?to__prefLabel)="fi")
  BIND(CONCAT("/places/page/", REPLACE(STR(?to__id), "^.*\\\\/(.+)", "$1")) AS ?to__dataProviderUrl)
  BIND(IRI(CONCAT(STR(?from__id), "-", REPLACE(STR(?to__id), "http://ldf.fi/yoma/place/", ""))) as ?id)
} 

`

//  query on people facet page tab 'Network'
export const networkLinksQuery = `
  SELECT DISTINCT (?person as ?source) ?target ("Teacher" as ?prefLabel)
  WHERE {
    <FILTER>
    ?person :has_event/:supervisor ?target .
  }
`

export const connectionLinkQuery = `
SELECT DISTINCT ?source ?target (GROUP_CONCAT(DISTINCT ?link; separator="; ") AS ?prefLabel) (1.0-?val AS ?weight)
WHERE {
  VALUES ?id { <ID> }
  ?node a :Distance ;
    rels:relates_to ?id ;
      rels:relates_to ?target ;
      :value ?val .
  FILTER (?id!=?target)
  OPTIONAL { ?node :link_by [ skos:prefLabel ?link ; a ?link_class ] }
  FILTER (REGEX(str(?link_class), 'yoma'))
  BIND(?id as ?source)
}
GROUP BY ?source ?target ?val ORDER BY ?val
`

export const connectionNodesQuery = `
  SELECT DISTINCT ?id ?prefLabel ?gender ?color ?size ?href
  WHERE {
    VALUES (?class ?size) { (:Person "16px") (:ReferencedPerson "12px") }
    VALUES ?id { <ID_SET> }
    ?id a ?class ;
        skos:prefLabel ?prefLabel .
    OPTIONAL {
      ?id schema:gender/skos:prefLabel ?gender . FILTER(lang(?gender)="fi")
      VALUES (?gender ?color) { ("Mies"@fi "blue") ("Nainen"@fi "red") }
    }
    BIND(CONCAT("../", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"),"/connections") AS ?href)
  }
`

//  link query on person page tab "FAMILY RELATIONS"
export const networkFamilyRelationQuery = `
  SELECT DISTINCT ?source ?target ?prefLabel (1 as ?weight)
  WHERE {
    VALUES ?id { <ID> }
    VALUES ?rel { rels:f3 rels:f4 rels:f5 rels:f6 rels:f7 rels:f10 rels:f11 rels:f12 }
    {
      ?id bioc:has_family_relation [ a ?rel ; a/rels:level ?level ; bioc:inheres_in ?target ] .
      OPTIONAL { ?rel skos:prefLabel ?prefLabel . FILTER(LANG(?prefLabel)='fi') }
      BIND(?id AS ?source)
    }
    UNION
    {
      ?source bioc:has_family_relation [ a ?rel ; a/rels:level ?level ; bioc:inheres_in ?id ] .
      OPTIONAL { ?rel skos:prefLabel ?prefLabel . FILTER(LANG(?prefLabel)='fi') }
      BIND(?id AS ?target)
    }
  }
  ORDER BY DESC(?level)
`

export const familyNetworkNodesQuery = `
  SELECT DISTINCT ?id ?prefLabel ?gender ?color ?size ?href ?_y
  WHERE {
    VALUES (?class ?size) { (:Person "16px") (:ReferencedPerson "12px") }
    VALUES ?id { <ID_SET> }
    ?id a ?class ;
        skos:prefLabel ?prefLabel .
    OPTIONAL {
      ?id schema:gender/skos:prefLabel ?gender . FILTER(lang(?gender)="fi")
      VALUES (?gender ?color) { ("Mies"@fi "blue") ("Nainen"@fi "red") }
    }
    
    OPTIONAL { ?id :date_of_origin/gvp:estStart ?btime }
    OPTIONAL { ?id :date_of_end/gvp:estStart ?dtime }
    BIND(year(COALESCE(?btime, ?dtime-"P25550DT0H0M0S"^^xsd:duration)) AS ?_y)

    BIND(CONCAT("../", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"),"/familyNetwork") AS ?href)
  }
`

//  query on person page tab "ACADEMIC RELATIONS"
export const networkAcademicRelationQuery = `
SELECT DISTINCT ?source ?target ?prefLabel (1 as ?weight)
  WHERE {
    VALUES ?id { <ID> }
    {
      ?id bioc:has_person_relation [ a ?rel ; bioc:inheres_in ?target ]
       OPTIONAL { ?rel skos:prefLabel ?prefLabel . FILTER(LANG(?prefLabel)='fi') }
       BIND (?id AS ?source)
    }
    UNION
    {
      ?id :has_event/:supervisor ?source . BIND("oppilas" AS ?prefLabel)
      BIND (?id AS ?target)
    }
    UNION
    {
      ?target :has_event/:supervisor ?id . BIND("oppilas" AS ?prefLabel)
      BIND (?id AS ?source)
    }
}
`

//  query on person page tab relationNetwork
export const networkRelationQuery = `
SELECT DISTINCT ?source ?target ("" AS ?name) (1 AS ?weight)
WHERE {
  VALUES ?source { <ID> }
  VALUES ?prop { schema:date schema:place skos:broader
    bioc:inheres_in # :has_baptism :has_birth :has_burial :has_death

    :has_title :has_event :has_category :has_enrollment :related_occupation :student_nation :organization }
  ?source ?prop ?target .
  FILTER ISURI(?target)
  OPTIONAL { ?prop skos:prefLabel ?label . FILTER (LANG(?label)="fi") }
}
`

export const networkNodesQuery = `
  SELECT DISTINCT ?id ?prefLabel ?gender ?color ?size ?href
  WHERE {
    VALUES (?class ?size) { (:Person "16px") (:ReferencedPerson "12px") }
    VALUES ?id { <ID_SET> }
    ?id a ?class ;
        skos:prefLabel ?prefLabel .
    OPTIONAL {
      ?id schema:gender/skos:prefLabel ?gender . FILTER(lang(?gender)="fi")
      VALUES (?gender ?color) { ("Mies"@fi "blue") ("Nainen"@fi "red") }
    }
    BIND(CONCAT("../page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"),"/academicNetwork") AS ?href)
  }
`

//  http://localhost:8080/people/faceted-search/network
//  http://localhost:8080/people/page/p10000/academicNetwork
//  "../../page/p11252/academicNetwork"
export const academicNetworkNodesQuery = `
  SELECT DISTINCT ?id ?prefLabel ?gender ?color ?size ?href
  WHERE {
    VALUES (?class ?size) { (:Person "16px") (:ReferencedPerson "12px") }
    VALUES ?id { <ID_SET> }
    ?id a ?class ;
        skos:prefLabel ?prefLabel .
    OPTIONAL {
      ?id schema:gender/skos:prefLabel ?gender . FILTER(lang(?gender)="fi")
      VALUES (?gender ?color) { ("Mies"@fi "blue") ("Nainen"@fi "red") }
    }
    BIND(CONCAT("../", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"),"/academicNetwork") AS ?href)
  }
`

export const relationNetworkNodesQuery = `
SELECT DISTINCT ?id ?prefLabel ?size ?cls ?color ?href
  WHERE {
    VALUES ?id { <ID_SET> }
    ?id skos:prefLabel ?prefLabel ; a ?cls .
    OPTIONAL { VALUES (?cls ?_color ?_size ?href_start ?href_end)
      { (:Person    "red"       25 "../" "/relationNetwork")
        (:Place     "blue"      15 "../../../places/page/" "/table")
        (:Title     "green"     15 "../../../titles/page/" "/table")
        (:Category  "green"     15 "../../../categories/page/" "/table")
        (:Organization "black"  15 "../../../organizations/page/" "/table")
        (:StudentNation "black" 15 "../../../nations/page/" "/table")
      }
    }
    BIND(COALESCE(?_color, 'grey') AS ?color)
    BIND(COALESCE(?_size, 12) AS ?size)
    BIND(CONCAT(?href_start, REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"), ?href_end) AS ?href)
}
`

//  query for point cloud 'links'
export const pointCloudLinksQuery = `
  SELECT DISTINCT (?person as ?source) ?target ("?" as ?prefLabel)
  WHERE {
    <FILTER>
    ?person ^rels:relates_to [ a :Distance ; rels:relates_to ?target ]
    FILTER (?person != ?target)
  }
`

export const pointCloudNodesQuery = `
  SELECT DISTINCT ?id ?prefLabel ?gender ?color ?size ?href ?x ?y
  WHERE {
    VALUES (?class ?size) { (:Person "16px") (:ReferencedPerson "12px") }
    VALUES ?id { <ID_SET> }
    ?id a ?class ;
        skos:prefLabel ?prefLabel .
    OPTIONAL {
      ?id schema:gender/skos:prefLabel ?gender . FILTER(lang(?gender)="fi")
      VALUES (?gender ?color) { ("Mies"@fi "blue") ("Nainen"@fi "red") }
    }
    OPTIONAL { ?id :coordinate [ :x ?x ; :y ?y ]}
    BIND(CONCAT("../../people/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"),"/academicNetwork") AS ?href)
  }
`

// https://api.triplydb.com/s/Jr-nZL_tR
export const eventsByYearQuery = `
  SELECT DISTINCT ?category 
  (COUNT(?birth_date) AS ?Birth) 
  (COUNT(?enrol_date) AS ?Enrollment) 
  (COUNT(?death_date) AS ?Death) 
WHERE {
  <FILTER>
  ?person__id a :Person .
  { 
    ?person__id :has_enrollment/schema:date ?enrol_date . 
    ?enrol_date gvp:estStart ?time_0 ;
      gvp:estEnd ?time_1
  } UNION {
    ?person__id :date_of_origin ?birth_date .
    ?birth_date gvp:estStart ?time_0 ;
      gvp:estEnd ?time_1
  } UNION {
    ?person__id :date_of_end ?death_date .
    ?death_date gvp:estStart ?time_0 ;
      gvp:estEnd ?time_1
  }
  FILTER (year(?time_0)=year(?time_1))
  BIND (STR(year(?time_0)) AS ?category)
} GROUP BY ?category ORDER BY ?category
`
