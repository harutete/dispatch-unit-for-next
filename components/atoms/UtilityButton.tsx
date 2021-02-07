import { Button } from '@material-ui/core'

type Props = {
  onClick: () => void
}
const UtilityButton: React.FC<Props> = (props) => (
  <Button variant="contained" fullWidth onClick={props.onClick}>
    {props.children}
  </Button>
)

export default UtilityButton