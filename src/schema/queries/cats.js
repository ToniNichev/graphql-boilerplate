

export default catsQuery = {
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