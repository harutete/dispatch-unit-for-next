import Container from '@material-ui/core/Container'

import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

const Layout: React.FC = (props) => (
  <div>
    <Header />
    <main>
      <Container maxWidth="sm">
        {props.children}
      </Container>
    </main>
    <Footer />
  </div>
)

export default Layout