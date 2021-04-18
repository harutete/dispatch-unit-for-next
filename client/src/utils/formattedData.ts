import { Member } from '../graphql/generated/graphql'

type formattedMembersTypes = {
  id: number
  value: string
}

export const formattedMembers = (members: Member[]): formattedMembersTypes[] =>
  members.map((member) => ({
    id: member.member_id,
    value: member.member_name,
  }))
