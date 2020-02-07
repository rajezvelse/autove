var login = require('./login.controller');
var registerUser = require('./register-user.controller');
var usersList = require('./users-list.controller');

module.exports = {
  query: {
    ...usersList
  },
  mutation: {
    ...registerUser,
    ...login
  }
}