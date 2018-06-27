const graphql = require('graphql');
const dogs = require('../../models/dogs');
const DogType = require('../types/dogs');
    
module.exports = {
    getDog: {
      type: DogType,
      args: {
        id: { type: graphql.GraphQLID }
      },
      resolve: function (_, {id}) {
        return dogs[id];
      }
    },
  }


  