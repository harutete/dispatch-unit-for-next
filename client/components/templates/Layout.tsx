import { Container } from '@material-ui/core'

import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

const Layout: React.FC = (props) => (
  <div>
    <Header />
    <Container component="main" maxWidth="sm">
      {props.children}
    </Container>
    <Footer />
  </div>
)

export default Layout