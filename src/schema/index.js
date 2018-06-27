const graphql = require('graphql');
const types = require('./queries');

var rootQuery = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {...types }
});

module.exports = new graphql.GraphQLSchema({
  query: rootQuery
});