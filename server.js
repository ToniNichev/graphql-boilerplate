const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const schema = require('./src/schema');

// Your own super cool function
var logger = function(req, res, next) {
  debugger;
  console.log("GOT REQUEST >", req.url);
  next(); // Passing the request to the next handler in the stack.
}

const app = express();
app.use(logger); // Here you add your logger to the stack.

app.use('/graphql', cors(), graphqlHTTP({
  schema: schema,
  graphiql: true,
}));



app.listen(4001);
console.log('Running a GraphQL API server at localhost:4001/graphql');