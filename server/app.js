//Server
const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT
const URL = process.env.LOCAL_URL
const cors = require("cors")
const jwt = require("express-jwt")
const JWT_SECRET = process.env.JWT_SECRET

const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { graphqlHTTP } = require('express-graphql');
const { schema, root } = require("../src/schema/index")
const { ApolloServer } = require("apollo-server-express");

const auth = jwt({
  secret: JWT_SECRET,
  credentialsRequired: false,
});
app.use(auth);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: "/graphql",
  },
  context: ({ req }) => {
    const user = req.headers.user
      ? JSON.parse(req.headers.user)
      : req.user
        ? req.user
        : null;
    return { user };
  },
});

server.applyMiddleware({ app });

app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Server start on ${URL}:${PORT}/graphql`)
})