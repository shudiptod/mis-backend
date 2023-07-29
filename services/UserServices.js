const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { getCurrentTimeAndDate } = require("../utils/date");

class UserService {
  static async createUser(userData) {
    try {
      console.log(
        "🚀 ~ file: UserServices.js:7 ~ UserService ~ createUser ~ userData:",
        userData
      );
      // Check if the username already exists
      const existingUser = await User.findOne({ username: userData.username });
      if (existingUser) {
        throw new Error("Username already exists");
      }
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      let newData = structuredClone(userData);
      newData.password = hashedPassword;
      newData.blocked = false;
      // Hash the password

      // Create the new user
      const newUser = new User(newData);

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
            first_name: 1,
            username: 1,
            email: 1,
            phone: 1,
            createdAt: 1,
            updatedAt: 1,
            blocked: 1,
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
  // Get a user by username
  static async getUserByUsername(username) {
    try {
      const user = await User.aggregate([
        { $match: { username: username } }, // Match the specific user by username
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
            first_name: 1,
            username: 1,
            email: 1,
            phone: 1,
            createdAt: 1,
            updatedAt: 1,
            blocked: 1,
            role: { $arrayElemAt: ["$roleData.name", 0] },
          },
        },
      ]);
      return user;
    } catch (error) {
      throw new Error({ message: "Failed to fetch the user.", error: error });
    }
  }
  // Update a user by query
  static async updateUser(query, updateData) {
    console.log(
      "🚀 ~ file: UserServices.js:88 ~ UserService ~ updateUser ~ updateData:",
      updateData
    );
    console.log(
      "🚀 ~ file: UserServices.js:88 ~ UserService ~ updateUser ~ query:",
      query
    );
    try {
      const updatedUser = await User.findOneAndUpdate(query, updateData, {
        new: true,
      });
      return updatedUser;
    } catch (error) {
      console.log(
        "🚀 ~ file: UserServices.js:102 ~ UserService ~ updateUser ~ error:",
        error
      );
      throw new Error({ message: "Failed to update the user.", error });
    }
  }
  static async deleteUserById(userId) {
    try {
      // Find the user by ID and delete it
      const deletedUser = await User.findByIdAndDelete(userId);

      return deletedUser; // Return the deleted user (or null if user not found)
    } catch (error) {
      console.error("Error deleting user:", error);
      throw new Error("Failed to delete user.");
    }
  }
}

module.exports = UserService;
