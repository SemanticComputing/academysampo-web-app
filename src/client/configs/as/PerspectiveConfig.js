import React from 'react'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import AddLocationIcon from '@material-ui/icons/AddLocation'
// import LocationOnIcon from '@material-ui/icons/LocationOn'
import RedoIcon from '@material-ui/icons/Redo'
import BubbleChartIcon from '@material-ui/icons/BubbleChart'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import LineChartIcon from '@material-ui/icons/ShowChart'
import studentsImage from '../../img/main_page/promootio_452x262.jpg'
import placesImage from '../../img/main_page/senaatti_452x262.jpg'

export const perspectiveConfig = [
  {
    id: 'people',
    frontPageImage: studentsImage,
    perspectiveDescHeight: 160,
    defaultActiveFacets: new Set(['prefLabel']),
    tabs: [
      {
        id: 'table',
        value: 0,
        icon: <CalendarViewDayIcon />
      },
      {
        id: 'migrations',
        value: 1,
        icon: <RedoIcon />
      },
      {
        id: 'map',
        value: 2,
        icon: <AddLocationIcon />
      },
      {
        id: 'network',
        value: 3,
        icon: <BubbleChartIcon />
      },
      {
        id: 'pointcloud',
        value: 4,
        icon: <BubbleChartIcon />
      },
      {
        id: 'by_year',
        value: 5,
        icon: <LineChartIcon />
      },
      {
        id: 'export',
        value: 6,
        icon: <CloudDownloadIcon />
      }
    ],
    instancePageTabs: [
      {
        id: 'table',
        value: 0,
        icon: <CalendarViewDayIcon />
      },
      {
        id: 'familyNetwork',
        value: 1,
        icon: <BubbleChartIcon />
      },
      {
        id: 'academicNetwork',
        value: 2,
        icon: <BubbleChartIcon />
      },
      {
        id: 'relationNetwork',
        value: 3,
        icon: <BubbleChartIcon />
      },
      {
        id: 'connections',
        value: 4,
        icon: <BubbleChartIcon />
      },
      {
        id: 'export',
        value: 5,
        icon: <CloudDownloadIcon />
      }
    ]
  },
  {
    id: 'places',
    frontPageImage: placesImage,
    perspectiveDescHeight: 160,
    defaultActiveFacets: new Set(['prefLabel']),
    tabs: [
      {
        id: 'table',
        value: 0,
        icon: <CalendarViewDayIcon />
      },
      {
        id: 'map',
        value: 1,
        icon: <AddLocationIcon />
      },
      {
        id: 'export',
        value: 1,
        icon: <CloudDownloadIcon />
      }
    ],
    instancePageTabs: [
      {
        id: 'table',
        value: 0,
        icon: <CalendarViewDayIcon />
      },
      {
        id: 'placeByYear',
        value: 1,
        icon: <LineChartIcon />
      },
      {
        id: 'export',
        value: 2,
        icon: <CloudDownloadIcon />
      }
    ]
  }
]
