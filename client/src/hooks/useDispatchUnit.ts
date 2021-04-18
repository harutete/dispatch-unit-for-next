import { useState } from 'react'
import { LinkSkill } from '../graphql/generated/graphql'
import { UNIT_TYPES } from '../pages'

type Args = {
  member: number
  unitType: number
  linkSkills: LinkSkill[]
}

export const useDispatchUnit = () => {
  const [unit, setUnit] = useState<LinkSkill[] | null>(null)
  const setDispatchUnit = ({ memberId, unitTypeId, linkSkills }: Args) => {
    if (!memberId || !unitTypeId) {
      setUnit(null)
      return
    }
    const findSelectedUnitType = UNIT_TYPES.find(
      (type) => type.id === unitTypeId
    )['value']
    const filteredUnit = linkSkills.filter((skill) => {
      const findSelectedMemberIncluded = skill.members.find(
        (member) => member.member_id === memberId
      )

      return (
        skill.category === findSelectedUnitType && findSelectedMemberIncluded
      )
    })
    setUnit(filteredUnit)
  }
  return {
    unit,
    dispatchUnit: setDispatchUnit,
  }
}
