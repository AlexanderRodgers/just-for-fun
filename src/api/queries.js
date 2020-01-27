import { gql } from 'apollo-boost';


export const ADD_USER = gql`
 mutation {
  createUser(userInput:{firstName: "Alex", lastName:"Rodgers", email:"alexedrodgers@gmail.com", password:"test"}) {
    _id
    firstName
    lastName
    email
  }
}
`