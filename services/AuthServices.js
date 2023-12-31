const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/UserModel");

class AuthService {
  static generateToken(user) {
    const payload = {
      id: user._id,
      username: user.username,
      role: user.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return token;
  }

  static async authenticateUser(username, password) {
    try {
      const user = await User.findOne({ username }).populate("role");

      if (!user || !bcrypt.compareSync(password, user.password)) {
        console.log("did not match");
        return null; // Return null if user not found or password doesn't match
      }

      return {
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
        role: user.role.name,
        blocked: user.blocked,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        _id: user._id,
      };
    } catch (error) {
      console.log(
        "🚀 ~ file: AuthServices.js:29 ~ AuthService ~ authenticateUser ~ error:",
        error
      );
      throw new Error("Failed to authenticate user");
    }
  }
}

module.exports = AuthService;
