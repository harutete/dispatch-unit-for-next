import { useState } from 'react'
import { LinkSkill } from '../graphql/generated/graphql'

type Args = {
  member: string
  unitType: string
  linkSkills: LinkSkill[]
}

export const useDispatchUnit = () => {
  const [unit, setUnit] = useState(null)
  const setDispatchUnit = ({ member, unitType, linkSkills }: Args) => {
    if (!member.length || !unitType.length) {
      setUnit(null)
      return
    }
    const filteredUnit = linkSkills.filter((skill) => {
      console.log(skill)
    })
    console.log({ filteredUnit })
  }
  return {
    unit,
    dispatchUnit: setDispatchUnit,
  }
}
