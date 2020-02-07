var password = require('./password');
var parseValidationError = require('./error-handler');
var token = require('./token');

module.exports = {
  ...password,
  ...parseValidationError,
  ...token
}