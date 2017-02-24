var express =  require('express');
var graphqlHTTP = require('express-graphql');

import schema from './schema'


const cors = require('cors');
const app = express();
app.options('/graphql', cors())
app.use('/graphql', cors(),graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');