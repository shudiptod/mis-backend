const UserService = require("../services/UserServices");

class UserController {
  static async createUser(req, res) {
    const { last_name, other_name, email, username, password, role } = req.body;

    try {
      const newUser = await UserService.createUser(
        last_name,
        other_name,
        email,
        username,
        password,
        role
      );
      return res.status(201).json(newUser);
    } catch (error) {
      console.log(
        "🚀 ~ file: UserController.js:11 ~ UserController ~ createUser ~ error:",
        error
      );
      return res.status(500).json(error.message);
    }
  }
  static async getAllUser(req, res) {
    try {
      const allUser = await UserService.getAllUsers();
      return res.status(200).json(allUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  static async getUserByUsername(req, res) {
    const username = req.params.username;

    try {
      const user = await UserService.getUserByUsername(username);
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  // Update a user by username
  static async updateUser(req, res) {
    const username = req.params.username;
    const updateData = req.body;

    try {
      const updatedUser = await UserService.updateUser(
        { username: username },
        updateData
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found." });
      }
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = UserController;
