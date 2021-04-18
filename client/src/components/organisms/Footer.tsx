import { Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
    },
  })
)

const Footer: React.VFC = () => {
  const classes = useStyles()
  return (
    <footer className={classes.root}>
      <Typography
        component="small"
        variant="caption"
        display="block"
        align="center"
      >
        &copy; 2021 harutete.
      </Typography>
    </footer>
  )
}

export default Footer
