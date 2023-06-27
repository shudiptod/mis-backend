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
}

module.exports = UserController;
