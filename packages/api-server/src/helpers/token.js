var jwt = require('jsonwebtoken');
const { APP_SECRET, TOKEN_EXPIRATION } = require('@app/config');

// Generating new JWT token
exports.generateToken = (userId) => {
  let tokenPayload = {
    iat: Date.now(),
    uid: userId
  };

  let token = jwt.sign(tokenPayload, APP_SECRET, { expiresIn: TOKEN_EXPIRATION });

  return token;
}