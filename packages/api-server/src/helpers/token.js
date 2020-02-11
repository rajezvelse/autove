var jwt = require('jsonwebtoken');
const { APP_SECRET, TOKEN_EXPIRATION } = require('@app/config');
var { UnauthorizedError } = require('./error-handler');


// Generating new JWT token
exports.generateToken = (userId, userRole) => {
  let tokenPayload = {
    iat: Math.floor(Date.now() / 1000),
    uid: userId,
    uacs: userRole
  };

  let token = jwt.sign(tokenPayload, APP_SECRET, { expiresIn: TOKEN_EXPIRATION });

  return token;
}

exports.verifyToken = token => {

  try {

    var decoded = jwt.verify(token, APP_SECRET);

  } catch (e) {
    throw new UnauthorizedError('Invalid token');
  }

  // Validating token expiration
  if (decoded.exp <= Math.floor(Date.now() / 1000))
    throw new UnauthorizedError('Token expired');

  return decoded;



}