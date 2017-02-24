'use strict';

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var graphqlHTTP = require('express-graphql');

var cors = require('cors');
var app = express();
app.options('/graphql', cors());
app.use('/graphql', cors(), graphqlHTTP({
  schema: _schema2.default,
  graphiql: true
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');