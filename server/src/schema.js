const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    members: [Member!]!
    linkSkills: [LinkSkill]!
  }
  type Member {
    member_id: Int
    member_name: String
  }
  type LinkSkill {
    category: String
    category_name: String
    effect: Int
    skill_name: String
    is_act2: Boolean
    members: [Member]!
  }
`

module.exports = typeDefs
