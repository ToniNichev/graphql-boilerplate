var graphql = require('graphql');

const cats = [  // Dummy data
    {
      id: 1,
      name: 'MiauMiau',
      age: '15',
      gender: 'M'
    },
    {
      id:2,
      name: 'Kim',
      age: '7',
      gender: 'M'
    },
    {
      id:3,
      name: 'Joseph',
      age: '2',
      gender: 'M'
    },
    {
      id:3,
      name: 'Faith',
      age: '14',
      gender: 'F'
    },
    {
      id:5,
      name: 'Joy',
      age: '1',
      gender: 'F'
    }
  ];


  var Cat = new graphql.GraphQLObjectType({
    name: 'Cat',
    fields: {
      id: { type: graphql.GraphQLID },
      name: { type: graphql.GraphQLString },
      age: { type: graphql.GraphQLInt }
    }
  });
  
  
const catsQuery = {
    getCat: {
      type: Cat,
      args: {
        id: { type: graphql.GraphQLID }
      },
      resolve: function (_, {id}) {
        return cats[id];
      }
    },
  }

module.exports = catsQuery;  
  