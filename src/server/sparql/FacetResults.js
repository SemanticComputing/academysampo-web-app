import { runSelectQuery } from './SparqlApi'
import { runNetworkQuery } from './NetworkApi'
import { prefixes } from './SparqlQueriesPrefixes'
import { peoplePropertiesInstancePage, 
  peoplePropertiesFacetResults, peoplePlacesQuery } from './SparqlQueriesPeople'
import {
  endpoint,
  countQuery,
  facetResultSetQuery,
  instanceQuery
} from './SparqlQueriesGeneral'
import {
  manuscriptPropertiesFacetResults,
  manuscriptPropertiesInstancePage,
  productionPlacesQuery,
  lastKnownLocationsQuery,
  migrationsQuery,
  networkLinksQuery,
  networkNodesQuery
} from './SparqlQueriesManuscripts'
import { workProperties } from './SparqlQueriesWorks'
import { eventProperties, eventPlacesQuery } from './SparqlQueriesEvents'
import { generateEventsByPeriodQuery } from './FacetResultsEvents'
import { placesActorsQuery } from './SparqlQueriesActors'
import {
  placePropertiesInfoWindow,
  manuscriptsProducedAt,
  lastKnownLocationsAt,
  actorsAt,
  allPlacesQuery,
  peopleRelatedTo 
} from './SparqlQueriesPlaces'
import { facetConfigs } from './FacetConfigsAs'
import { mapCount, mapPlaces } from './Mappers'
import { makeObjectList } from './SparqlObjectMapper'
import { generateConstraintsBlock } from './Filters'

export const getPaginatedResults = async ({
  resultClass,
  page,
  pagesize,
  constraints,
  sortBy,
  sortDirection,
  resultFormat
}) => {
  const response = await getPaginatedData({
    resultClass,
    page,
    pagesize,
    constraints,
    sortBy,
    sortDirection,
    resultFormat
  })
  if (resultFormat === 'json') {
    return {
      resultClass: resultClass,
      page: page,
      pagesize: pagesize,
      data: response.data,
      sparqlQuery: response.sparqlQuery
    }
  } else {
    return response
  }
}

export const getAllResults = ({
  resultClass,
  facetClass,
  constraints,
  resultFormat
}) => {
  let q = ''
  let filterTarget = ''
  let mapper = makeObjectList
  switch (resultClass) {
    case 'peoplePlaces':
      q = peoplePlacesQuery
      filterTarget = 'person'
      break
    case 'placesMsProduced':
      q = productionPlacesQuery
      filterTarget = 'manuscripts'
      mapper = mapPlaces
      break
    case 'lastKnownLocations':
      q = lastKnownLocationsQuery
      filterTarget = 'manuscripts'
      mapper = mapPlaces
      break
    case 'placesActors':
      q = placesActorsQuery
      filterTarget = 'actor__id'
      mapper = mapPlaces
      break
    case 'placesMsMigrations':
      q = migrationsQuery
      filterTarget = 'manuscript__id'
      break
    case 'placesEvents':
      q = eventPlacesQuery
      filterTarget = 'event'
      break
    case 'eventsByTimePeriod':
      q = generateEventsByPeriodQuery({ startYear: 1600, endYear: 1620, periodLength: 10 })
      filterTarget = 'event'
      break
    case 'manuscriptsNetwork':
      q = networkLinksQuery
      filterTarget = 'source'
      break
  }
  if (constraints == null) {
    q = q.replace('<FILTER>', '# no filters')
  } else {
    q = q.replace('<FILTER>', generateConstraintsBlock({
      resultClass: resultClass,
      facetClass: facetClass,
      constraints: constraints,
      filterTarget: filterTarget,
      facetID: null
    }))
  }
  if (resultClass === 'manuscriptsNetwork') {
    // console.log(prefixes + q)
    return runNetworkQuery({
      endpoint,
      prefixes,
      links: q,
      nodes: networkNodesQuery
    })
  }
  // console.log(prefixes + q)
  return runSelectQuery({
    query: prefixes + q,
    endpoint,
    resultMapper: mapper,
    resultFormat
  })
}

export const getResultCount = async ({
  resultClass,
  constraints,
  resultFormat
}) => {
  let q = countQuery
  q = q.replace('<FACET_CLASS>', facetConfigs[resultClass].facetClass)
  if (constraints == null) {
    q = q.replace('<FILTER>', '# no filters')
  } else {
    q = q.replace('<FILTER>', generateConstraintsBlock({
      resultClass: resultClass,
      facetClass: resultClass,
      constraints: constraints,
      filterTarget: 'id',
      facetID: null
    }))
  }
  const response = await runSelectQuery({
    query: prefixes + q,
    endpoint,
    resultMapper: mapCount,
    resultFormat
  })
  return ({
    resultClass: resultClass,
    data: response.data,
    sparqlQuery: response.sparqlQuery
  })
}

const getPaginatedData = ({
  resultClass,
  page,
  pagesize,
  constraints,
  sortBy,
  sortDirection,
  resultFormat
}) => {
  let q = facetResultSetQuery
  const facetConfig = facetConfigs[resultClass]
  if (constraints == null) {
    q = q.replace('<FILTER>', '# no filters')
  } else {
    q = q.replace('<FILTER>', generateConstraintsBlock({
      resultClass: resultClass,
      facetClass: resultClass,
      constraints: constraints,
      filterTarget: 'id',
      facetID: null
    }))
  }
  q = q.replace('<FACET_CLASS>', facetConfig.facetClass)
  if (sortBy == null) {
    q = q.replace('<ORDER_BY_TRIPLE>', '')
    q = q.replace('<ORDER_BY>', '# no sorting')
  } else {
    let sortByPredicate = ''
    if (sortBy.endsWith('Timespan')) {
      sortByPredicate = sortDirection === 'asc'
        ? facetConfig[sortBy].sortByAscPredicate
        : facetConfig[sortBy].sortByDescPredicate
    } else {
      sortByPredicate = facetConfig[sortBy].labelPath
    }
    q = q.replace('<ORDER_BY_TRIPLE>',
      `OPTIONAL { ?id ${sortByPredicate} ?orderBy }`)
    q = q.replace('<ORDER_BY>',
      `ORDER BY (!BOUND(?orderBy)) ${sortDirection}(?orderBy)`)
  }
  q = q.replace('<PAGE>', `LIMIT ${pagesize} OFFSET ${page * pagesize}`)
  let resultSetProperties
  switch (resultClass) {
    case 'people':
      resultSetProperties = peoplePropertiesFacetResults
      break
    case 'perspective2':
      resultSetProperties = workProperties
      break
    case 'perspective3':
      resultSetProperties = eventProperties
      break
    default:
      resultSetProperties = ''
  }
  q = q.replace('<RESULT_SET_PROPERTIES>', resultSetProperties)
  // console.log(prefixes + q);
  return runSelectQuery({
    query: prefixes + q,
    endpoint,
    resultMapper: makeObjectList,
    resultFormat
  })
}

export const getByURI = ({
  resultClass,
  facetClass,
  constraints,
  uri,
  resultFormat
}) => {
  let q
  switch (resultClass) {
    case 'people':
      q = instanceQuery
      q = q.replace('<PROPERTIES>', peoplePropertiesInstancePage)
      q = q.replace('<RELATED_INSTANCES>', '')
      break
    case 'places':
      q = instanceQuery
      q = q.replace('<PROPERTIES>', placePropertiesInstancePage)
      q = q.replace('<RELATED_INSTANCES>', '')
      break 
    case 'peoplePlaces':
        q = instanceQuery
        q = q.replace('<PROPERTIES>', placePropertiesInfoWindow)
        q = q.replace('<RELATED_INSTANCES>', peopleRelatedTo)
        break 
    case 'perspective1':
      q = instanceQuery
      q = q.replace('<PROPERTIES>', manuscriptPropertiesInstancePage)
      q = q.replace('<RELATED_INSTANCES>', '')
      break
    case 'perspective2':
      q = instanceQuery
      q = q.replace('<PROPERTIES>', workProperties)
      q = q.replace('<RELATED_INSTANCES>', '')
      break
    case 'perspective3':
      q = instanceQuery
      q = q.replace('<PROPERTIES>', eventProperties)
      q = q.replace('<RELATED_INSTANCES>', '')
      break
    case 'placesAll':
      q = instanceQuery
      q = q.replace('<PROPERTIES>', placePropertiesInfoWindow)
      q = q.replace('<RELATED_INSTANCES>', '')
      break
    case 'placesActors':
      q = instanceQuery
      q = q.replace('<PROPERTIES>', placePropertiesInfoWindow)
      q = q.replace('<RELATED_INSTANCES>', actorsAt)
      break
    case 'placesMsProduced':
      q = instanceQuery
      q = q.replace('<PROPERTIES>', placePropertiesInfoWindow)
      q = q.replace('<RELATED_INSTANCES>', manuscriptsProducedAt)
      break
    case 'lastKnownLocations':
      q = instanceQuery
      q = q.replace('<PROPERTIES>', placePropertiesInfoWindow)
      q = q.replace('<RELATED_INSTANCES>', lastKnownLocationsAt)
      break
    case 'placesEvents':
      q = instanceQuery
      q = q.replace('<PROPERTIES>', placePropertiesInfoWindow)
      q = q.replace('<RELATED_INSTANCES>', '')
      break
  }
  if (constraints == null) {
    q = q.replace('<FILTER>', '# no filters')
  } else {
    q = q.replace('<FILTER>', generateConstraintsBlock({
      resultClass: resultClass,
      facetClass: facetClass,
      constraints: constraints,
      filterTarget: 'related__id',
      facetID: null
    }))
  }
  q = q.replace('<ID>', `<${uri}>`)
  // console.log(prefixes + q)
  return runSelectQuery({
    query: prefixes + q,
    endpoint,
    resultMapper: makeObjectList,
    resultFormat
  })
}
