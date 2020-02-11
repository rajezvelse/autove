
const { GraphQLNonNull } = require('graphql');
const { RegisterUserInputType, UserDetailsType } = require('@app/types');
const { UserService } = require('@app/services');

// Register user mutation
var registerUserMutation = {
  type: UserDetailsType,
  access: ['admin'],
  args: {
    registrationData: { type: new GraphQLNonNull(RegisterUserInputType) }
  },
  resolve: async (source, { registrationData }, args, context) => {
    
    var userDetails = await UserService.registerUser(registrationData);

    return userDetails;
  }
}

module.exports = {
  registerUser: registerUserMutation
}