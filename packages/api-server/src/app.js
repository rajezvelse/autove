const express = require('express');
const graphqlHTTP = require('express-graphql');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const { applyMiddleware } = require('graphql-middleware')

var { authInterceptor, graphqlFormatError, graphqlPermissionInterceptor } = require('@app/middlewares');
console.log()

// Importing all the controller schema
var appRootSchema = require('@app/controllers');

var app = express();

// Configure CROS settings
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "optionsSuccessStatus": 204
}));

// Cofigure logger
app.use(logger('dev'));

// Set body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Authentication validator
app.use(authInterceptor);

// Static content
app.use('/favicon.ico', express.static(path.join(__dirname, 'favicon.ico')));
app.use('/static', express.static(path.join(__dirname, 'src/static')));

// Configuring GraphQL API middleware
app.use('/graphql', graphqlHTTP({
  schema: applyMiddleware(appRootSchema, graphqlPermissionInterceptor),
  graphiql: true,
  customFormatErrorFn: graphqlFormatError
}));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404);
  res.send('Page not found');
});

// error handler
app.use(function (err, req, res, next) {

  // render the error content
  res.status(err.status || 500);
  res.send([
    {
      message: err.message,
      status: err.status || 500
    }
  ]
  );
});

module.exports = app;

