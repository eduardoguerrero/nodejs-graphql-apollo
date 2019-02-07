


//The two packages you need to get started with Apollo Server are apollo-server and graphql
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');

//Pass our schema to the typeDefs property on the configuration object.
const server = new ApolloServer({ typeDefs });


//Run  server
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
