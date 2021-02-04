import { ApolloServer, gql } from 'apollo-server-micro'
// TODO レスポンスを下記JSONに置き換える
// import linkSkill from '../../assets/json/linkSkill.json'
// import member from '../../assets/json/linkSkill.json'

const typeDefs = gql`
  type Query {
    users: [User!]!
  }
  type User {
    name: String
  }
`

const resolvers = {
  Query: {
    users(parent, args, context) {
      return [{ name: 'Nextjs' }]
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
