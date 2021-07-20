const { User } = require("./db/models");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET

const resolvers = {
  Query: {
    async current(_, args, { user }) {
      if (user) {
        return await User.findOne({ where: { id: user.id } });
      }
      throw new Error("Sorry, you're not an authenticated user!");
    }
  },

  Mutation: {
    async register(_, { username, email, password }) {
      const isEmail = await User.findOne({where: { email: email } })
      console.log(isEmail)
      if (username === "" || email === "" || password === "") {
        return Error("Fill in all the fields")
      }
      if (isEmail) {
        return Error("User have an account!")
      }
      const user = await User.create({
        username,
        email,
        password: await bcrypt.hash(password, 10),
      });
      return jsonwebtoken.sign({ id: user.id, username: user.username, email: user.email }, JWT_SECRET, {
        expiresIn: "3m",
      });
    },

    async login(_, { email, password }) {
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
  },
};

module.exports = resolvers;