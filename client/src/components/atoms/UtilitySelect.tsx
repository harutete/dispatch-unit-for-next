import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlProps,
} from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

type Props = {
  value: string
  label: string
  categories: { id: number; value: string }[]
  handleChange: (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>,
    child: React.ReactNode
  ) => void
} & FormControlProps

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minWidth: '200px',
    },
  })
)

export const UtilitySelect = ({
  value,
  label,
  categories,
  handleChange,
  ...props
}: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <FormControl variant="outlined" className={classes.root} {...props}>
      <InputLabel id="select-category">{label}</InputLabel>
      <Select
        labelId="select-category-label"
        id="select-category"
        label={label}
        value={value}
        onChange={handleChange}
      >
        {categories.map((category) => (
          <MenuItem value={category.id} key={`category_${category.id}`}>
            {category.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
