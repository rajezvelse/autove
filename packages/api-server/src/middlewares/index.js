var graphqlFormatError = require('./graphql-format-error.middleware');
var authInterceptor = require('./auth.middleware');
var graphqlPermissionInterceptor = require('./graphql-permission.middleware');


module.exports = {
  graphqlFormatError,
  authInterceptor,
  graphqlPermissionInterceptor
}