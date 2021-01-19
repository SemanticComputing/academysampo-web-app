import { peoplePerspectiveConfig } from './perspective_configs/PeoplePerspectiveConfig'
import { placesPerspectiveConfig } from './perspective_configs/PlacesPerspectiveConfig'
import { titlesPerspectiveConfig } from './perspective_configs/TitlesPerspectiveConfig'
import {
  peopleEventPlacesQuery,
  peopleMigrationsQuery,
  networkLinksQuery,
  networkNodesQuery,
  academicNetworkNodesQuery,
  relationNetworkNodesQuery,
  familyNetworkNodesQuery,
  networkFamilyRelationQuery,
  networkAcademicRelationQuery,
  connectionLinkQuery,
  connectionNodesQuery,
  networkRelationQuery,
  pointCloudLinksQuery,
  pointCloudNodesQuery,
  eventsByYearQuery
} from './sparql_queries/SparqlQueriesPeople'
import {
  placePropertiesInfoWindow,
  actorsAt,
  peopleRelatedTo,
  placeByYearQuery,
  placeMapQuery
} from './sparql_queries/SparqlQueriesPlaces'
import { relativesPropertiesInstancePage } from './sparql_queries/SparqlQueriesRelatives'
import { titleByYearQuery } from './sparql_queries/SparqlQueriesTitles'
import {
  nationsPropertiesInstancePage,
  nationByYearQuery
} from './sparql_queries/SparqlQueriesNations'
import { categoriesPropertiesInstancePage } from './sparql_queries/SparqlQueriesCategories'
import { referencesPropertiesInstancePage } from './sparql_queries/SparqlQueriesReferences'
import { organizationsPropertiesInstancePage } from './sparql_queries/SparqlQueriesOrganizations'
import { timesPropertiesInstancePage } from './sparql_queries/SparqlQueriesTimes'
import { fullTextSearchProperties } from './sparql_queries/SparqlQueriesFullText'
import { makeObjectList } from '../SparqlObjectMapper'
import { mapPlaces } from '../Mappers'
import { mapMultipleLineChart } from '../as_Mappers'

export const backendSearchConfig = {
  people: peoplePerspectiveConfig,
  places: placesPerspectiveConfig,
  titles: titlesPerspectiveConfig,
  relatives: {
    perspectiveID: 'people', // use endpoint config from people
    instance: {
      properties: relativesPropertiesInstancePage,
      relatedInstances: ''
    }
  }, /**
  titles: {
    perspectiveID: 'people', // use endpoint config from people
    instance: {
      properties: titlesPropertiesInstancePage,
      relatedInstances: ''
    }
  },
  */
  nations: {
    perspectiveID: 'people',
    instance: {
      properties: nationsPropertiesInstancePage,
      relatedInstances: ''
    }
  },
  categories: {
    perspectiveID: 'people',
    instance: {
      properties: categoriesPropertiesInstancePage,
      relatedInstances: ''
    }
  },
  references: {
    perspectiveID: 'people',
    instance: {
      properties: referencesPropertiesInstancePage,
      relatedInstances: ''
    }
  },
  organizations: {
    perspectiveID: 'people',
    instance: {
      properties: organizationsPropertiesInstancePage,
      relatedInstances: ''
    }
  },
  times: {
    perspectiveID: 'people',
    instance: {
      properties: timesPropertiesInstancePage,
      relatedInstances: ''
    }
  },
  peoplePlaces: {
    perspectiveID: 'people', // use endpoint config from people
    q: peopleEventPlacesQuery,
    filterTarget: 'person',
    resultMapper: mapPlaces,
    instance: {
      properties: placePropertiesInfoWindow,
      relatedInstances: peopleRelatedTo
    }
  },
  peopleMigrations: {
    perspectiveID: 'people', // use endpoint config from people
    q: peopleMigrationsQuery,
    filterTarget: 'person__id',
    resultMapper: makeObjectList
  },
  placesActors: {
    perspectiveID: 'people', // use endpoint config from people
    instance: {
      properties: placePropertiesInfoWindow,
      relatedInstances: actorsAt
    }
  },
  // Network tab in people facet results
  peopleNetwork: {
    perspectiveID: 'people', // use endpoint config from people
    q: networkLinksQuery,
    nodes: networkNodesQuery,
    filterTarget: 'person',
    useNetworkAPI: true
  },
  // Point cloud tab in people facet results
  peoplePointCloud: {
    perspectiveID: 'people', // use endpoint config from people
    q: pointCloudLinksQuery,
    nodes: pointCloudNodesQuery,
    filterTarget: 'person',
    useNetworkAPI: true
  },
  connections: {
    perspectiveID: 'people',
    q: connectionLinkQuery,
    nodes: connectionNodesQuery,
    filterTarget: 'person',
    useNetworkAPI: true
  },
  // Family relations tab in person page
  familyNetwork: {
    perspectiveID: 'people',
    q: networkFamilyRelationQuery,
    nodes: familyNetworkNodesQuery,
    useNetworkAPI: true
  },
  // Academic relations tab in person page
  academicNetwork: {
    perspectiveID: 'people', // use endpoint config from people
    q: networkAcademicRelationQuery,
    nodes: academicNetworkNodesQuery,
    useNetworkAPI: true
  },
  // Relations tab in person page
  relationNetwork: {
    perspectiveID: 'people', // use endpoint config from people
    q: networkRelationQuery,
    nodes: relationNetworkNodesQuery,
    useNetworkAPI: true
  },
  jenaText: {
    perspectiveID: 'people', // use endpoint config from people
    properties: fullTextSearchProperties
  },
  eventsByYear: {
    perspectiveID: 'people',
    q: eventsByYearQuery,
    filterTarget: 'person__id',
    resultMapper: mapMultipleLineChart
  },
  nationByYear: {
    perspectiveID: 'people',
    q: nationByYearQuery,
    resultMapper: mapMultipleLineChart
  },
  placeMap: {
    perspectiveID: 'places', // use endpoint config from people
    q: placeMapQuery,
    resultMapper: makeObjectList
  },
  placeByYear: {
    perspectiveID: 'places',
    q: placeByYearQuery,
    resultMapper: mapMultipleLineChart
  },
  titleByYear: {
    perspectiveID: 'titles',
    q: titleByYearQuery,
    resultMapper: mapMultipleLineChart
  }
}
