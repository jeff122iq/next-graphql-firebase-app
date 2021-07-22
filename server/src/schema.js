const {gql} = require("apollo-server-express");

const typeDefs = gql`
    type User {
        id: String!,
        username: String!
        email: String!
        password: String!
    }
    
    type Token {
        jwt_token: String!
    }

    type Query {
        getUser(id: String!): [User]
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
        getId(jwt_token: String!): Token
    }
`;

module.exports = typeDefs;