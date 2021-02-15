import {
  AppBar,
  Typography,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  heading: {
    padding: theme.spacing(1, 2),
  }
}))
const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position="static" color="primary">
      <Typography variant="h5" component="h1" color="textPrimary" className={classes.heading}>
        dispatch-unit!
      </Typography>
    </AppBar>
  )
}

export default Header