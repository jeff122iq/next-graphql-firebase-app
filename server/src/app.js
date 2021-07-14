const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT
const URL = process.env.LOCAL_URL
const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID
const FIREBASE_CLIENT_EMAIL = process.env.FIREBASE_CLIENT_EMAIL
const FIREBASE_PRIVATE_KEY = process.env.FIREBASE_PRIVATE_KEY
const FIREBASE_DATABASE_URL = process.env.FIREBASE_DATABASE_URL
const cors = require("cors")
const firebase = require("firebase");
const { ApolloServer } = require("apollo-server-express");
const firebaseAdmin = require('firebase-admin');
const database = firebase.database();

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert({
    projectId: FIREBASE_PROJECT_ID,
    clientEmail: FIREBASE_CLIENT_EMAIL,
    privateKey: FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
  }),
  databaseURL: FIREBASE_DATABASE_URL
});


// const server = new ApolloServer({
//   context: ({ req }) => {
//     return {
//       headers: req.headers,
//     };
//   }
// });
// server.applyMiddleware({ app });

const typeDefs = gql`
    type Query {
        hello: String
    }
    type Mutation{
        setName: Boolean
    }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello roger!',
  },
  Mutation:{
    setName:async()=>
    {
      await database.ref('users/').push({
        name: 'alejandro',
        surname: 'gomez gonzalez the best'
      })
      return true
    }
  }
};

function gqlServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // Enable graphiql gui
    introspection: true,
    playground: true
  })

  server.applyMiddleware({app, path: '/', cors: true})
}

app.listen(PORT, () => {
  console.log(`Server start on ${URL}:${PORT}/graphql`)
})