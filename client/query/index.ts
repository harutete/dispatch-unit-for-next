import { gql } from '@apollo/client'

export const GET_MEMBERS = gql`
  query getMembers {
    members {
      member_id
      member_name
    }
  }
`