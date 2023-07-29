const AuthService = require("../services/AuthServices");

class AuthController {
  static async login(req, res) {
    try {
      const { username, password } = req.body;

      // Authenticate the user
      let user = await AuthService.authenticateUser(username, password);
      console.log(
        "🚀 ~ file: AuthController.js:10 ~ AuthController ~ login ~ user:",
        user
      );

      if (!user) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }

      // Generate a JWT token
      const token = AuthService.generateToken(user);

      // Return the token in the response
      return res.status(200).json({ token: token, user: user });
    } catch (error) {
      console.log(
        "🚀 ~ file: AuthController.js:27 ~ AuthController ~ login ~ error:",
        error
      );
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = AuthController;
