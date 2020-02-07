
const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const usersSchema = require('./users');

// Combining all schema & resolvers used in the application
module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      ...usersSchema.query
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      ...usersSchema.mutation
    }
  })
});