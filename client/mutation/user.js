import {gql} from "@apollo/client"

export const REGISTER = gql`
    mutation register(
        $username: String!,
        $email: String!,
        $password: String!
    ){
        register(
            username: $username, 
            email: $email,
            password: $password
        )
    }
`

export const LOGIN = gql`
    mutation login(
        $email: String!,
        $password: String!
    ) {
        login(
            email: $email,
            password: $password,
        )
    }
`