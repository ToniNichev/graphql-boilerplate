let types = require('./types');
var graphql = require('graphql');



var queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {...types }
});

module.exports = new graphql.GraphQLSchema({query: queryType});