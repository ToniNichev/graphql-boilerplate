const graphql = require('graphql');
// const DogType = require('../types/dogs');
const mongoDB = require('../../connectors/database/mongodb');
    
module.exports = {
    addDog: {
      type: graphql.GraphQLBoolean,
      args: {
        id: { type: graphql.GraphQLID },
        name: { type: graphql.GraphQLString },
        age: { type: graphql.GraphQLInt },
        gender: { type: graphql.GraphQLString },
      },
      resolve: function (_, {id, name, age, gender}) {      
        return new Promise((resolve, reject) => {

          const dog = {
            id: id,
            name: name,
            age: age,
            gender: gender
          }

          mongoDB.add(dog, 'Dogs', function(err, result) {
            console.log("Adding dog ...");
            if(err) 
              reject(err);
            else 
              console.log(result);
              resolve(true);
          });
        }); 

    },
  }
}


  