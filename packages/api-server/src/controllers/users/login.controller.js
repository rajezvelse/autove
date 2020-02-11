
const { GraphQLNonNull } = require('graphql');
const { LoginInputType, AuthDetailsType } = require('@app/types');
const { AuthService } = require('@app/services');

// Register user mutation
var loginMutation = {
  type: AuthDetailsType,
  access: "open",
  args: {
    loginData: { type: new GraphQLNonNull(LoginInputType) }
  },
  resolve: async (source, { loginData }, args, context) => {

    let data = await AuthService.login(loginData.username, loginData.password);
    
    return data;
  }
}

module.exports = {
  login: loginMutation
}