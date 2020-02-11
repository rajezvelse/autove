const { GraphQLObjectType, GraphQLInputObjectType, GraphQLString, GraphQLNonNull, GraphQLBoolean, GraphQLEnumType } = require('graphql');
const UserTypes = require('./user.types');

// Auth details type for login success response
exports.AuthDetailsType = new GraphQLObjectType({
  name: "AuthDetails",
  fields: {
    token: { type: new GraphQLNonNull(GraphQLString), access: "open" },
    user: {
      type: UserTypes.UserDetailsType,
      access: "open"
    }
  }
})

// Login mutation type
exports.LoginInputType = new GraphQLInputObjectType({
  name: "LoginInput",
  fields: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) }
  }
})