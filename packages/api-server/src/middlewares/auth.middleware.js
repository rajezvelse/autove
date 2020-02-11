var { verifyToken, UnauthorizedError } = require('@app/helpers');

// Generating new JWT token
module.exports = (req, res, next) => {
  // Skip validation for open routes
  if (req.url === '/favicon.ico' || req.url.startsWith('/static')) {
    next(); return;
  }
  let isGraphQLRequest = req.url.startsWith('/graphql');

  let { authorization } = req.headers;

  try {
    // raise error if no auth token available and not graphql request
    if (!authorization || !authorization.startsWith('Bearer ')) throw new UnauthorizedError('Invalid auth details');


    // Parsing auth token -------------------
    let token = authorization.trim().replace('Bearer ', '');

    let authData = verifyToken(token);

    req.authorization = {
      userId: authData.uid,
      userRole: authData.uacs
    }

    next();
  }
  catch (e) {
    // Skip Auth error for GraphQL requests. The access validations will be handled in GraphQL resolver middlewares
    if (isGraphQLRequest) next();
    else throw e;
  }


}