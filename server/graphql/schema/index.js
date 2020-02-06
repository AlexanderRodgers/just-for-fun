const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Event {
      _id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    type AuthData {
      userId: ID!
      token: String!
      tokenExpiration: Int!
    }

    type User {
      _id: ID!
      firstName: String!
      lastName: String!
      email: String!
      password: String
    }

    type RootQuery {
      events: [Event!]!
      login(email: String!, password: String!): AuthData!
    }

    input EventInput {
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    input UserInput {
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    }

    type RootMutation {
      createEvent(eventInput: EventInput): Event
      createUser(userInput: UserInput): User
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `);