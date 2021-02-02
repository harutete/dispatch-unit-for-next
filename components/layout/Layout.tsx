import Container from '@material-ui/core/Container'

const Layout: React.FC = (props) => (
  <Container maxWidth="sm">
    <header>
      <h1>dispatch-unit!</h1>
    </header>
    <main>
      {props.children}
    </main>
    <footer>
      <small>
        &copy; 2021 harutete.
      </small>
    </footer>
  </Container>
)

export default Layout