const { User } = require("./db/models");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const uuid = require('uuid');

const resolvers = {
  Query: {
    async getUser(_, {id}) {
      if (id) {
        return await User.findOne({ where: { id: id } });
      }
      await Error("Sorry, you're not an authenticated user!");
    },
  },

  Mutation: {
    async register(__, { username, email, password }) {
      console.log(123)
      const isEmail = await User.findOne({where: { email: email } })
      console.log(isEmail)
      if (username === "" || email === "" || password === "") {
        return Error("Fill in all the fields")
      }
      if (isEmail) {
        return Error("Id have an account!")
      }
      const id = uuid.v1()
      const user = await User.create({
        id,
        username,
        email,
        password: await bcrypt.hash(password, 10),
      });
      const token = jsonwebtoken.sign({ id: user.id, username: user.username, email: user.email }, JWT_SECRET, {
        expiresIn: "3m",
      })
      return token
    },

    async login(_, { email, password }) {
      if (email === "" || password === "") {
        return Error("Fill in all the fields")
      }
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw Error(
          "This user doesn't exist. Please, make sure to type the right login."
        );
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw Error("You password is incorrect!");
      }
      return jsonwebtoken.sign({ id: user.id, username: user.username, email: user.email }, JWT_SECRET, {
        expiresIn: "1d",
      });
    },
    async getId(_, {jwt_token}) {
      try {
        console.log(jwt_token)
        const decode = await jsonwebtoken.decode(jwt_token, {payload: true})
        console.log(decode)
        const userId = decode.id
        return userId
      } catch (e) {
        console.log(e)
      }
    }
  },
};

module.exports = resolvers;