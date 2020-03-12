import { runSelectQuery } from './SparqlApi'
import { runNetworkQuery } from './NetworkApi'
import { prefixes } from './as/SparqlQueriesPrefixes'
import {
  peoplePropertiesInstancePage,
  peoplePropertiesFacetResults,
  peopleEventPlacesQuery,
  peopleMigrationsQuery,
  networkLinksQuery,
  networkNodesQuery,
  networkFamilyRelationQuery,
  networkAcademicRelationQuery
} from './as/SparqlQueriesPeople'
import {
  relativesPropertiesInstancePage
  // relativesPropertiesFacetResults,
  // relativesPlacesQuery
} from './as/SparqlQueriesRelatives'
import {
  titlesPropertiesInstancePage
} from './as/SparqlQueriesTitles'
import {
  nationsPropertiesInstancePage
} from './as/SparqlQueriesNations'
import {
  categoriesPropertiesInstancePage
} from './as/SparqlQueriesCategories'
import {
  placePropertiesInstancePage,
  // placePropertiesFacetResults,
  placePropertiesInfoWindow,
  actorsAt,
  // allPlacesQuery,
  peopleRelatedTo
} from './as/SparqlQueriesPlaces'
import {
  countQuery,
  facetResultSetQuery,
  instanceQuery
} from './SparqlQueriesGeneral'
import { facetConfigs, endpoint } from './as/FacetConfigs'
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
  resultFormat,
  groupBy
}) => {
  let q = ''
  let filterTarget = ''
  let mapper = makeObjectList
  switch (resultClass) {
    case 'peoplePlaces':
      q = peopleEventPlacesQuery
      filterTarget = 'person'
      console.log(q)
      mapper = mapPlaces
      break
    case 'peopleMigrations':
      q = peopleMigrationsQuery
      filterTarget = 'person__id'
      break
    case 'peopleNetwork':
      q = networkLinksQuery
      filterTarget = 'person'
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
  if (resultClass === 'peopleNetwork') {
    // console.log(q)
    return runNetworkQuery({
      endpoint,
      prefixes,
      links: q,
      nodes: networkNodesQuery
    })
  }
  /**
  if (resultClass === 'familyNetwork') {
    return runNetworkQuery({
      // id:
      endpoint,
      prefixes,
      links: q,
      nodes: networkNodesQuery
    })
  }
  if (resultClass === 'academicNetwork') {
    return runNetworkQuery({
      // id:
      endpoint,
      prefixes,
      links: q,
      nodes: networkNodesQuery
    })
  }
  */
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
    // case 'perspective2':
    //   resultSetProperties = workProperties
    //   break
    // case 'perspective3':
    //   resultSetProperties = eventProperties
    //   break
    default:
      resultSetProperties = ''
  }
  q = q.replace('<RESULT_SET_PROPERTIES>', resultSetProperties)
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
    case 'relatives':
      q = instanceQuery
      q = q.replace('<PROPERTIES>', relativesPropertiesInstancePage)
      q = q.replace('<RELATED_INSTANCES>', '')
      break
    case 'places':
      q = instanceQuery
      q = q.replace('<PROPERTIES>', placePropertiesInstancePage)
      q = q.replace('<RELATED_INSTANCES>', '')
      break
    case 'titles':
      q = instanceQuery
      q = q.replace('<PROPERTIES>', titlesPropertiesInstancePage)
      q = q.replace('<RELATED_INSTANCES>', '')
      break
    case 'nations':
      q = instanceQuery
      q = q.replace('<PROPERTIES>', nationsPropertiesInstancePage)
      q = q.replace('<RELATED_INSTANCES>', '')
      break
    case 'categories':
      q = instanceQuery
      q = q.replace('<PROPERTIES>', categoriesPropertiesInstancePage)
      q = q.replace('<RELATED_INSTANCES>', '')
      break
    case 'peoplePlaces':
      q = instanceQuery
      q = q.replace('<PROPERTIES>', placePropertiesInfoWindow)
      q = q.replace('<RELATED_INSTANCES>', peopleRelatedTo)
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
    case 'placesEvents':
      q = instanceQuery
      q = q.replace('<PROPERTIES>', placePropertiesInfoWindow)
      q = q.replace('<RELATED_INSTANCES>', '')
      break
  }

  if (resultClass === 'familyNetwork') {
    return runNetworkQuery({
      endpoint,
      prefixes,
      links: networkFamilyRelationQuery,
      id: uri,
      nodes: networkNodesQuery
    })
  }

  if (resultClass === 'academicNetwork') {
    // console.log(uri, networkAcademicRelationQuery)
    return runNetworkQuery({
      endpoint,
      prefixes,
      links: networkAcademicRelationQuery,
      id: uri,
      nodes: networkNodesQuery
    })
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
  // console.log(q);
  return runSelectQuery({
    query: prefixes + q,
    endpoint,
    resultMapper: makeObjectList,
    resultFormat

  })
}
