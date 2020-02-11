const { GraphQLNonNull, GraphQLList } = require('graphql');
const {  UserDetailsType } = require('@app/types');
var { UserService } = require('@app/services');

// Register user mutation
var usersListQuery = {
  type: new GraphQLList(UserDetailsType),
  access: ['admin'],
  resolve: async (source, args, context) => {
    var users = await UserService.fetchUsers();
    
    return  users;
  }
} 

module.exports = {
  usersList: usersListQuery
}