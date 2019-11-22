
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');


const users = [
   {
      id: 'hello',
      email: 'alexedrodgers@gmail.com',
      password: '1234'
   }
];

const resolvers = {
   Query: {
      users: () => {
         return users
      },
   },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server is live at: ${url}`);
});