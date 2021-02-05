import { ApolloServer, gql } from 'apollo-server-micro'
import members from './data/members'
import linkSkills from './data/linkSkills'

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
    members: [SkillMembers]!
  }
  type SkillMembers {
    id: Int
    name: String
  }
`

const resolvers = {
  Query: {
    members(parent, args, context) {
      return members
    },
    linkSkills(parent, args, context) {
      return linkSkills
    },
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
