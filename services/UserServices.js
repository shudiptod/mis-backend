const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

class UserService {
  static async createUser(
    last_name,
    other_name,
    email,
    username,
    password,
    role
  ) {
    try {
      // Check if the username already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        throw new Error("Username already exists");
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create the new user
      const newUser = new User({
        username,
        password: hashedPassword,
        role,
        last_name,
        email,
        other_name,
      });

      // Save the user to the database
      await newUser.save();

      return newUser;
    } catch (error) {
      console.log(
        "🚀 ~ file: UserServices.js:30 ~ UserService ~ createUser ~ error:",
        error
      );
      return error;
    }
  }
}

module.exports = UserService;
