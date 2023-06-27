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
      res.status(201).json(newUser);
    } catch (error) {
      console.log(
        "🚀 ~ file: UserController.js:11 ~ UserController ~ createUser ~ error:",
        error
      );
      res.status(500).json({ message: "Failed to create user", error: error });
    }
  }
}

module.exports = UserController;
