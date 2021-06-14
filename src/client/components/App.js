import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import SemanticPortal from '../containers/SemanticPortal'
import indigo from '@material-ui/core/colors/indigo'

const theme = createMuiTheme({
  palette: {
    primary: indigo
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '1 rem'
      }
    },
    MuiAccordion: {
      root: {
        '&$expanded': {
          marginTop: 8,
          marginBottom: 8
        }
      }
    },
    MuiAccordionSummary: {
      content: {
        '&$expanded': {
          marginTop: 4
        }
      },
      expandIcon: {
        '&$expanded': {
          marginTop: -16
        }
      }
    },
    MuiButton: {
      endIcon: {
        marginLeft: 0
      }
    },
    MuiIconButton: {
      root: {
        padding: 4
      }
    },
    MuiTableCell: {
      sizeSmall: {
        paddingTop: 0,
        paddingBottom: 0
      }
    }
  }
})

const App = () => (
  <MuiThemeProvider theme={theme}>
    <SemanticPortal />
  </MuiThemeProvider>
)

export default App
