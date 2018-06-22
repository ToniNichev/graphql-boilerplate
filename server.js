var express = require('express');
const cors = require('cors');
// var schema = require('./src/schema/roll');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
//import { buildSchema } from 'graphql'; 
var graphql = require('graphql');

// Construct a schema, using GraphQL schema language

/*
var RandomDie = new graphql.GraphQLObjectType({
  name: 'RandomDie',
  fields: {
    numSides: { type: graphql.GraphQLInt },
    rollOnce: { type: graphql.GraphQLInt },
    roll: {
      fields: {
        numRolls: { type: graphql.GraphQLInt }
      },
      type: graphql.GraphQLInt
    }
  }
});


// Define the Query type
var queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    getDie: {
      type: RandomDie,
      // `args` describes the arguments that the `user` query accepts
      args: {
        numSides: { type: graphql.GraphQLInt }
      },
      resolve: function (_, {numSides}) {
        return new RandomDieClass(numSides || 6);
      }
    }
  }
});

var schema = new graphql.GraphQLSchema({query: queryType});
*/


var schema = buildSchema(`
  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }

  type Query {
    getDie(numSides: Int): RandomDie
  }
`);


// This class implements the RandomDie GraphQL type
class RandomDie {
  constructor(numSides) {
    this.numSides = numSides;
  }

  rollOnce() {
    return 1 + Math.floor(Math.random() * this.numSides);
  }

  roll({numRolls}) {
    var output = [];
    for (var i = 0; i < numRolls; i++) {
      output.push(this.rollOnce());
    }
    return output;
  }
}

// The root provides the top-level API endpoints
var root = {
  getDie: function ({numSides}) {
    return new RandomDie(numSides || 6);
  }
}


var app = express();
app.use('/graphql', cors(), graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');