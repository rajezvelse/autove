var express = require('express');
var graphqlHTTP = require('express-graphql');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');

var { handleError } = require('@app/middlewares');

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
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// Static content
app.use('/favicon.ico', express.static(path.join(__dirname, 'favicon.ico')));
// app.use(express.static(path.join(__dirname, 'src/static')));

// Configuring GraphQL API middleware
app.use('/graphql', graphqlHTTP({
  schema: appRootSchema,
  graphiql: true,
  customFormatErrorFn: handleError
}));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404);
  res.send('Page not found');
});

// error handler
app.use(function (err, req, res, next) {

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
