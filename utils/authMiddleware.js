const passport = require("./passport");

// Middleware to authenticate the request
const authenticate = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // If authentication succeeds, store user in req.user and continue to next middleware
    req.user = user;
    return next();
  })(req, res, next);
};

module.exports = authenticate;
