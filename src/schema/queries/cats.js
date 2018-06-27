const graphql = require('graphql');
const cats = require('../../models/cats');
const CatType = require('../types/cats');
    
module.exports = {
    getCat: {
      type: CatType,
      args: {
        id: { type: graphql.GraphQLID }
      },
      resolve: function (_, {id}) {
        return cats[id];
      }
    },
  }

  