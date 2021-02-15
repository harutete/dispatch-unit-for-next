const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const members = require('./data/members')
const linkSkills = require('./data/linkSkills')

const resolvers = {
  Query: {
    members: () => members,
    linkSkills: () => linkSkills
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
  `)
})