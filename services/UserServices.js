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
      throw new Error(error.message);
    }
  }

  static async getAllUsers() {
    try {
      const users = await User.aggregate([
        {
          $lookup: {
            from: "roles",
            localField: "role",
            foreignField: "_id",
            as: "roleData",
          },
        },
        {
          $project: {
            _id: 1,
            last_name: 1,
            other_name: 1,
            username: 1,
            email: 1,
            role: { $arrayElemAt: ["$roleData.name", 0] },
          },
        },
      ]);
      return users;
    } catch (error) {
      throw new Error({
        message: "Failed to retrieve users",
        error: error.message,
      });
    }
  }
}

module.exports = UserService;
