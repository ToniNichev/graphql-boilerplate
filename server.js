const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const schema = require('./src/schema');

const app = express();
app.use('/graphql', cors(), graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4001);
console.log('Running a GraphQL API server at localhost:4001/graphql');