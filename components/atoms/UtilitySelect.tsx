import { createStyles, makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

type Props = {
  label: string
  categories: string[]
}

const UtilitySelect: React.FC<Props> = ({ label, categories }) => {
  const useStyles = makeStyles(() =>
    createStyles({
      formControl: {
        minWidth: 120,
      }
    }),
  )
  const classes = useStyles()
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">
        {label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        label={label}
      >
        {categories.map(category =>
          <MenuItem value={category} key={`category_${category}`}>
            {category}
          </MenuItem>
        )}
      </Select>
    </FormControl>
  )
}

export default UtilitySelect