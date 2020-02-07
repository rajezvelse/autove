var handleError = require('./error-handling.middleware');
var tokenHandler = require('./token-handler.middleware');


module.exports = {
  handleError,
  ...tokenHandler
}