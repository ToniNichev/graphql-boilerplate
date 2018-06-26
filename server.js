var express = require('express');
const cors = require('cors');
var graphqlHTTP = require('express-graphql');
var { buildSchema, GraphQLList } = require('graphql');
var graphql = require('graphql');

var dogs = require('./src/schema/dogs');

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
    },
    getAnotherDog: {
      type: new GraphQLList(Dog),
      args: {
        id: { type: graphql.GraphQLID }
      },
      resolve: function (_, {id}) {
        return [dogs[id], dogs[id]];
      }
    }
  }
});

var schema = new graphql.GraphQLSchema({query: queryType});


var app = express();
app.use('/graphql', cors(), graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4001);
console.log('Running a GraphQL API server at localhost:4001/graphql');