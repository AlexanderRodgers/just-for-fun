const { gql } = require('apollo-server');
const typeDefs = gql`
type Query {
   users: [User]
   user(id: ID!): User
}

type User {
   id: ID!
   email: String!
   password: String
}
`;

module.exports = typeDefs;