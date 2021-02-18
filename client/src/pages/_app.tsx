import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

// spring ff91b2
// summer ffc800
// autumn ff9b63
// winter 6ac1ff

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

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
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
