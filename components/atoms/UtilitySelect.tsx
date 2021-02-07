import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

type Props = {
  label: string
  categories: string[]
}

const UtilitySelect: React.FC<Props> = ({ label, categories }) => (
  <FormControl variant="outlined" fullWidth>
    <InputLabel id="select-category">
      {label}
    </InputLabel>
    <Select
      labelId="select-category-label"
      id="select-category"
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

export default UtilitySelect