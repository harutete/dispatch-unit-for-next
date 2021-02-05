import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

// spring ff91b2
// summer ffc800
// autumn ff9b63
// winter 6ac1ff

const MyApp = ({ Component, pageProps }) =>  {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#e6e6df'
      },
      text: {
        primary: '#666666'
      }
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
