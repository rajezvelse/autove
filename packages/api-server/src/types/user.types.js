const { GraphQLObjectType, GraphQLInputObjectType, GraphQLString, GraphQLNonNull, GraphQLBoolean, GraphQLEnumType } = require('graphql');
const CommonTypes = require('./common.types');

var UserRoleType = {
  type: new GraphQLEnumType({
    name: 'role',
    values: {
      admin: { value: 'admin' },
      shop_keeper: { value: 'shop_keeper' }
    }
  }),
  defaultValue: 'shop_keeper'
};

// User object common fields
var UserFieldsTypes = {
  _id: CommonTypes.IDType,
  username: { type: new GraphQLNonNull(GraphQLString) },
  role: UserRoleType,
  firstName: { type: GraphQLString },
  lastName: { type: GraphQLString },
  email: { type: new GraphQLNonNull(GraphQLString) },
  phone: { type: GraphQLString },
  addressLine1: { type: GraphQLString },
  addressLine2: { type: GraphQLString },
  deleted: {
    type: new GraphQLNonNull(GraphQLBoolean),
    defaultValue: false
  },
  createdAt: CommonTypes.CreatedAtType,
  updatedAt: CommonTypes.UpdatedAtType
};

exports.UserFieldsTypes = UserFieldsTypes;

// User details type
exports.UserDetailsType = new GraphQLObjectType({
  name: 'UserDetails',
  fields: {
    ...UserFieldsTypes
  }
})

// Register user input type
exports.RegisterUserInputType = new GraphQLInputObjectType({
  name: "RegisterUserInput",
  fields: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    role: UserRoleType,
    firstName: { type:  new GraphQLNonNull(GraphQLString) },
    lastName: { type: GraphQLString },
    email: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: GraphQLString },
    addressLine1: { type: GraphQLString },
    addressLine2: { type: GraphQLString },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});