import { useCompanyMembersQuery, Member } from '../graphql/generated/graphql'
import { useSelect } from '../hooks/useSelect'
import { useDispatchUnit } from '../hooks/useDispatchUnit'
import { formattedMembers } from '../utils/formattedData'

import { Box, Avatar } from '@material-ui/core'

import { UtilitySelect } from '../components/atoms/UtilitySelect'
import { UtilityButton } from '../components/atoms/UtilityButton'
import { LoadingIcon } from '../components/atoms/LoadingIcon'

export const UNIT_TYPES = [
  {
    id: 1,
    value: 'comedy',
  },
  {
    id: 2,
    value: 'action',
  },
  {
    id: 3,
    value: 'serious',
  },
]

const Home = (): JSX.Element => {
  const { loading, data, error } = useCompanyMembersQuery()
  const member = useSelect('')
  const unitType = useSelect('')
  const { unit, dispatchUnit } = useDispatchUnit()

  if (loading) {
    return <LoadingIcon />
  }

  if (error) {
    return <div>Failed to load</div>
  }
  if (!data) {
    return <div>Not contents</div>
  }

  const { members, linkSkills } = data
  const formatMembers = formattedMembers(members)
  const handleDispatchUnit = () => {
    console.log('click')
    dispatchUnit({
      memberId: member.value,
      unitTypeId: unitType.value,
      linkSkills,
    })
  }
  console.log({ unit })
  return (
    <Box mt={4}>
      <form>
        <UtilitySelect
          margin="normal"
          value={member.value}
          label="メンバーを選択"
          categories={formatMembers}
          handleChange={member.onChange}
          fullWidth
        />
        <UtilitySelect
          margin="normal"
          value={unitType.value}
          label="ユニットタイプを選択"
          categories={UNIT_TYPES}
          handleChange={unitType.onChange}
          fullWidth
        />
        <Box mt={2}>
          <UtilityButton
            onClick={handleDispatchUnit}
            fullWidth
            label="Dispatch"
            color="primary"
          />
        </Box>
      </form>
      {unit !== null &&
        unit.map((item) => (
          <div key={item.skill_name}>
            <p>{item.skill_name}</p>
            {item.members.map((member: Member) => (
              <Avatar key={member.member_id}>{member.member_name}</Avatar>
            ))}
          </div>
        ))}
    </Box>
  )
}

export default Home
