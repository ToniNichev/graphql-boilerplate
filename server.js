var express = require('express');
const cors = require('cors');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
//import { buildSchema } from 'graphql'; 
var graphql = require('graphql');

var dogs = require('./src/schema/dogs');


/*
var schema = buildSchema(`
  type RandomDie {
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }

  type Dog {
    id: ID!,
    name: String!,
    age: Int
  }

  type Query {
    getDie(numSides: Int): RandomDie
    getDog(id: ID): Dog
  }
`);
*/


var Dog = new graphql.GraphQLObjectType({
  name: 'Dog',
  fields: {
    id: { type: graphql.GraphQLID },
    name: { type: graphql.GraphQLString },
    age: { type: graphql.GraphQLInt }
  }
});

// Define the Query type
var queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    getDog: {
      type: Dog,
      // `args` describes the arguments that the `user` query accepts
      args: {
        id: { type: graphql.GraphQLID }
      },
      resolve: function (_, {id}) {
        return dogs[id]
      }
    }
  }
});

var schema = new graphql.GraphQLSchema({query: queryType});


// The root provides the top-level API endpoints
var root = {

  getDog: ({id}) => {
    return dogs[id];
  }
}


var app = express();
app.use('/graphql', cors(), graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4001);
console.log('Running a GraphQL API server at localhost:4001/graphql');