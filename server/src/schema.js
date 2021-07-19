const {gql} = require("apollo-server-express");

const typeDefs = gql`
    type User {
        username: String!
        email: String!
        password: String!
    }

    type Query {
        current: User
    }

    type Mutation {
        register( 
            username: String! 
            email: String!
            password: String!
        ): String
        login(
            email: String!
            password: String!
        ): String
    }
`;

module.exports = typeDefs;