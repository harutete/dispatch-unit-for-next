import { Button } from '@material-ui/core'

const UtilityButton: React.FC = ({children}) => (
  <Button variant="contained">
    {children}
  </Button>
)

export default UtilityButton