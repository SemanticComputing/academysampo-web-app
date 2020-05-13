import { peoplePerspectiveConfig } from './perspective_configs/PeoplePerspectiveConfig'
import { placesPerspectiveConfig } from './perspective_configs/PlacesPerspectiveConfig'
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
  networkRelationQuery,
  pointCloudLinksQuery,
  pointCloudNodesQuery
} from './sparql_queries/SparqlQueriesPeople'
import {
  placePropertiesInfoWindow,
  actorsAt,
  peopleRelatedTo
} from './sparql_queries/SparqlQueriesPlaces'
import { relativesPropertiesInstancePage } from './sparql_queries/SparqlQueriesRelatives'
import { titlesPropertiesInstancePage } from './sparql_queries/SparqlQueriesTitles'
import { nationsPropertiesInstancePage } from './sparql_queries/SparqlQueriesNations'
import { categoriesPropertiesInstancePage } from './sparql_queries/SparqlQueriesCategories'
import { organizationsPropertiesInstancePage } from './sparql_queries/SparqlQueriesOrganizations'
import { fullTextSearchProperties } from './sparql_queries/SparqlQueriesFullText'
import { makeObjectList } from '../SparqlObjectMapper'
import { mapPlaces } from '../Mappers'

export const backendSearchConfig = {
  people: peoplePerspectiveConfig,
  places: placesPerspectiveConfig,
  relatives: {
    perspectiveID: 'people', // use endpoint config from people
    instance: {
      properties: relativesPropertiesInstancePage,
      relatedInstances: ''
    }
  },
  titles: {
    perspectiveID: 'people', // use endpoint config from people
    instance: {
      properties: titlesPropertiesInstancePage,
      relatedInstances: ''
    }
  },
  nations: {
    perspectiveID: 'people', // use endpoint config from people
    instance: {
      properties: nationsPropertiesInstancePage,
      relatedInstances: ''
    }
  },
  categories: {
    perspectiveID: 'people', // use endpoint config from people
    instance: {
      properties: categoriesPropertiesInstancePage,
      relatedInstances: ''
    }
  },
  organizations: {
    perspectiveID: 'people', // use endpoint config from people
    instance: {
      properties: organizationsPropertiesInstancePage,
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
  // Family relations tab in person page
  familyNetwork: {
    perspectiveID: 'people', // use endpoint config from people
    links: networkFamilyRelationQuery,
    nodes: familyNetworkNodesQuery,
    useNetworkAPI: true
  },
  // Academic relations tab in person page
  academicNetwork: {
    perspectiveID: 'people', // use endpoint config from people
    links: networkAcademicRelationQuery,
    nodes: academicNetworkNodesQuery,
    useNetworkAPI: true
  },
  // Relations tab in person page
  relationNetwork: {
    perspectiveID: 'people', // use endpoint config from people
    links: networkRelationQuery,
    nodes: relationNetworkNodesQuery,
    useNetworkAPI: true
  },
  jenaText: {
    perspectiveID: 'people', // use endpoint config from people
    properties: fullTextSearchProperties
  }
}
