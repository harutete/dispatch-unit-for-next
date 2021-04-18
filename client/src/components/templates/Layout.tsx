import { Container } from '@material-ui/core'

import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props): JSX.Element => (
  <div>
    <Header />
    <Container component="main" maxWidth="xs">
      {children}
    </Container>
    <Footer />
  </div>
)
