import { Button, ButtonProps } from '@material-ui/core'

type Props = {
  label: string
} & ButtonProps

export const UtilityButton = ({
  onClick,
  label,
  ...props
}: Props): JSX.Element => (
  <Button variant="contained" onClick={onClick} {...props}>
    {label}
  </Button>
)
