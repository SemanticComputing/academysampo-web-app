export const peoplePropertiesInstancePage = `

?id skos:prefLabel ?prefLabel__id .
BIND(?prefLabel__id AS ?prefLabel__prefLabel)

BIND(?id as ?uri__id)
BIND(?id as ?uri__dataProviderUrl)
BIND(?id as ?uri__prefLabel)

{
  ?id skosxl:altLabel/skos:prefLabel ?altLabel__id .
  BIND (?altLabel__id AS ?altLabel__prefLabel )
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
  ?id :has_birth|:has_baptism ?bir
  OPTIONAL {
      ?bir schema:place ?birthPlace__id .
      ?birthPlace__id skos:prefLabel ?birthPlace__prefLabel .
      FILTER (LANG(?birthPlace__prefLabel)="fi")
      BIND(CONCAT("/places/page/", REPLACE(STR(?birthPlace__id), "^.*\\\\/(.+)", "$1")) AS ?birthPlace__dataProviderUrl)
  }
  OPTIONAL {
      ?bir schema:date ?birthDateTimespan__id .
      ?birthDateTimespan__id skos:prefLabel ?birthDateTimespan__prefLabel .
      OPTIONAL { ?birthDateTimespan__id gvp:estStart ?birthDateTimespan__start }
      OPTIONAL { ?birthDateTimespan__id gvp:estEnd ?birthDateTimespan__end }
  }
}
UNION
{
?id :has_enrollment [ schema:date ?enrollmentTimespan__id ; skos:prefLabel ?enrollmentTimespan__prefLabel ]
OPTIONAL { ?enrollmentTimespan__id gvp:estStart ?enrollmentTimespan__start }
OPTIONAL { ?enrollmentTimespan__id gvp:estEnd ?enrollmentTimespan__end }
}
UNION
{
  ?id :has_death|:has_burial ?dea
  OPTIONAL {
      ?dea schema:place ?deathPlace__id .
      ?deathPlace__id skos:prefLabel ?deathPlace__prefLabel .
      FILTER (LANG(?deathPlace__prefLabel)="fi")
      BIND(CONCAT("/places/page/", REPLACE(STR(?deathPlace__id), "^.*\\\\/(.+)", "$1")) AS ?deathPlace__dataProviderUrl)
  }
  OPTIONAL {
      ?dea schema:date ?deathDateTimespan__id .
      ?deathDateTimespan__id skos:prefLabel ?deathDateTimespan__prefLabel .
      OPTIONAL { ?deathDateTimespan__id gvp:estStart ?deathDateTimespan__start }
      OPTIONAL { ?deathDateTimespan__id gvp:estEnd ?deathDateTimespan__end }
  }
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
  ?id :has_event/:organization ?organization__id .
  ?organization__id skos:prefLabel ?organization__prefLabel .
  FILTER (LANG(?organization__prefLabel)='fi')
  BIND(CONCAT("/organizations/page/", REPLACE(STR(?organization__id), "^.*\\\\/(.+)", "$1")) AS ?organization__dataProviderUrl)
}
UNION
{
  ?id schema:relatedLink ?externalLink__id.
  BIND ("Ylioppilasmatrikkeli" AS ?externalLink__prefLabel)
  BIND (?externalLink__id AS ?externalLink__dataProviderUrl)
}
UNION
{
  ?id :wikidata ?externalLink__id.
  BIND ("Wikidata" AS ?externalLink__prefLabel)
  BIND (?externalLink__id AS ?externalLink__dataProviderUrl)
}
UNION
{
  ?id :nbf ?externalLink__id.
  BIND ("Biografiasampo" AS ?externalLink__prefLabel)
  BIND (REPLACE(STR(?externalLink__id) , "^.+nbf/(p.+)$", "http://biografiasampo.fi/henkilo/$1") AS ?externalLink__dataProviderUrl )
}
UNION
{ ?id dct:source ?source__id .
  ?source__id
    skos:prefLabel ?source__prefLabel ;
    skos:related ?source__dataProviderUrl ;
    dct:author ?source__author ;
    dct:description ?source__desc .

    OPTIONAL {
      ?id schema:relatedLink ?source__link ;
      skosxl:prefLabel/skos:prefLabel ?fullname .
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
  {
    ?relative__personUrl a :Person .
    BIND(CONCAT("/people/page/", REPLACE(STR(?relative__personUrl), "^.*\\\\/(.+)", "$1")) AS ?relative__dataProviderUrl)
  } UNION {
    ?relative__personUrl a :ReferencedPerson .
    BIND(CONCAT("/relatives/page/", REPLACE(STR(?relative__personUrl), "^.*\\\\/(.+)", "$1")) AS ?relative__dataProviderUrl)
  }
}
UNION
{
  ?id ^rels:relates_to [ a :Distance ; rels:relates_to ?similar__id ; :value ?similar__distance ]
  FILTER (?similar__id != ?id)
  #?similar__id skos:prefLabel ?similar__label .
  #BIND(CONCAT(?similar__label, STR(?similar__distance)) AS ?similar__prefLabel)
  ?similar__id skos:prefLabel ?similar__prefLabel .
  BIND(CONCAT("/people/page/", REPLACE(STR(?similar__id), "^.*\\\\/(.+)", "$1")) AS ?similar__dataProviderUrl)
}
UNION
{
  ?id bioc:has_person_relation  ?related__id .
  ?related__id skos:prefLabel ?related__prefLabel ;
                bioc:inheres_in ?related__personUrl .
  BIND(CONCAT("/people/page/", REPLACE(STR(?related__personUrl), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
}
UNION
{
  ?id :has_event ?related__id .
  ?related__id :supervisor ?related__personUrl ;  skos:prefLabel ?related__prefLabel .
  BIND(CONCAT("/people/page/", REPLACE(STR(?related__personUrl), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
}
UNION
{
  ?related__id :has_event [ :supervisor ?id ; skos:prefLabel ?evt_label ] ;
      skos:prefLabel ?prs_label .
      BIND(CONCAT("/people/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
      BIND (CONCAT(REPLACE(STR(?prs_label), '[(][^)]+[)]',''),': ',?evt_label) AS ?related__prefLabel)
}
UNION
{
?id :has_event/a :RectorPeriod .
BIND("Rector" as ?role)
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
    ?id :has_birth ?bir
    OPTIONAL {
        ?bir schema:place ?birthPlace__id .
        ?birthPlace__id skos:prefLabel ?birthPlace__prefLabel .
        BIND(CONCAT("/places/page/", REPLACE(STR(?birthPlace__id), "^.*\\\\/(.+)", "$1")) AS ?birthPlace__dataProviderUrl)
    }
    OPTIONAL {
        ?bir schema:date ?birthDateTimespan__id .
        ?birthDateTimespan__id skos:prefLabel ?birthDateTimespan__prefLabel .
        OPTIONAL { ?birthDateTimespan__id gvp:estStart ?birthDateTimespan__start }
        OPTIONAL { ?birthDateTimespan__id gvp:estEnd ?birthDateTimespan__end }
    }
  }
  UNION
  {
  ?id :has_enrollment [ schema:date ?enrollmentTimespan__id ; skos:prefLabel ?enrollmentTimespan__prefLabel ]
  OPTIONAL { ?enrollmentTimespan__id gvp:estStart ?enrollmentTimespan__start }
  OPTIONAL { ?enrollmentTimespan__id gvp:estEnd ?enrollmentTimespan__end }
  }
  UNION
  {
    ?id :has_death ?dea
    OPTIONAL {
        ?dea schema:place ?deathPlace__id .
        ?deathPlace__id skos:prefLabel ?deathPlace__prefLabel .
        BIND(CONCAT("/places/page/", REPLACE(STR(?deathPlace__id), "^.*\\\\/(.+)", "$1")) AS ?deathPlace__dataProviderUrl)
    }
    OPTIONAL {
        ?dea schema:date ?deathDateTimespan__id .
        ?deathDateTimespan__id skos:prefLabel ?deathDateTimespan__prefLabel .
        OPTIONAL { ?deathDateTimespan__id gvp:estStart ?deathDateTimespan__start }
        OPTIONAL { ?deathDateTimespan__id gvp:estEnd ?deathDateTimespan__end }
    }
  }
  UNION
  {
    ?id :has_category ?category__id .
    ?category__id skos:prefLabel ?category__prefLabel .
    BIND(CONCAT("/categories/page/", REPLACE(STR(?category__id), "^.*\\\\/(.+)", "$1")) AS ?category__dataProviderUrl)
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
    ?id :has_event/:student_nation ?studentnation__id .
    ?studentnation__id skos:prefLabel ?studentnation__prefLabel .
    FILTER (LANG(?studentnation__prefLabel)='fi')
    BIND(CONCAT("/nations/page/", REPLACE(STR(?studentnation__id), "^.*\\\\/(.+)", "$1")) AS ?studentnation__dataProviderUrl)
  }
  UNION
  {
    ?id :wikidata ?externalLink__id.
    BIND ("Wikidata" AS ?externalLink__prefLabel)
    BIND (?externalLink__id AS ?externalLink__dataProviderUrl)
  }
  UNION
  {
    ?id schema:relatedLink ?externalLink__id.
    BIND ("Ylioppilasmatrikkeli" AS ?externalLink__prefLabel)
    BIND (?externalLink__id AS ?externalLink__dataProviderUrl)
  }
  UNION
  {
    ?id :nbf ?externalLink__id.
    BIND ("Biografiasampo" AS ?externalLink__prefLabel)
    BIND (REPLACE(STR(?externalLink__id) , "^.+nbf/(p.+)$", "http://biografiasampo.fi/henkilo/$1") AS ?externalLink__dataProviderUrl )
  }
  UNION
  {
    ?id schema:gender ?gender__id.
    ?gender__id skos:prefLabel ?gender__prefLabel .
    FILTER (LANG(?gender__prefLabel)='fi')
    BIND (?gender__id AS ?gender__dataProviderUrl)
  }
  UNION
  { ?id dct:source ?source__id .
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
  }
  GROUP BY ?id ?lat ?long
`

// # https://github.com/uber/deck.gl/blob/master/docs/layers/arc-layer.md
export const peopleMigrationsQuery = `
SELECT DISTINCT ?id ?person__id ?person__prefLabel ?person__dataProviderUrl
    ?from__id ?from__prefLabel ?from__dataProviderUrl ?from__lat ?from__long
    ?to__id ?to__prefLabel ?to__dataProviderUrl ?to__lat ?to__long
  WHERE {
    <FILTER>
    ?person__id a :Person ;
      :has_birth/schema:place ?from__id ;
      :has_death/schema:place ?to__id ;
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

//  query on facet page
export const networkLinksQuery = `
  SELECT DISTINCT (?person as ?source) ?target ("Teacher" as ?prefLabel)
  WHERE {
    <FILTER>
    ?person :has_event/:supervisor ?target .
  }
`

//  query on person page tab "FAMILY RELATIONS"
export const networkFamilyRelationQuery = `
  SELECT DISTINCT ?source ?target ?prefLabel (1 as ?weight)
  WHERE {
    VALUES ?id { <ID> }
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
  ORDER BY ?level
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

//  query on person page tab "TODO"
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
    OPTIONAL { ?id :coordinate [ :x ?x ; :y ?y ]}
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

export const familyNetworkNodesQuery = `
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
    BIND(CONCAT("../", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"),"/familyNetwork") AS ?href)
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
      gvp:estEnd ?time_1 .
  } UNION {
  ?person__id (:has_birth|:has_baptism)/schema:date ?birth_date .
    ?birth_date gvp:estStart ?time_0 ;
      gvp:estEnd ?time_1 .
  } UNION {
  ?person__id (:has_death|:has_burial)/schema:date ?death_date .
    ?death_date gvp:estStart ?time_0 ;
      gvp:estEnd ?time_1 
  }

  FILTER (year(?time_0)=year(?time_1))
  BIND (STR(year(?time_0)) AS ?category)

  } GROUP BY ?category ORDER BY ?category
`