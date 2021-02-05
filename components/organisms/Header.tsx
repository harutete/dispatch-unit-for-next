import {
  AppBar,
  Typography
} from '@material-ui/core'
const Header = () => (
  <AppBar position="static" color="primary">
    <Typography variant="h5" component="h1" color="textPrimary">
      dispatch-unit!
    </Typography>
  </AppBar>
)

export default Header