const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/UserModel");

// LocalStrategy configuration
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      // Find the user by username
      const user = await User.findOne({ username });

      // If user not found or password doesn't match, return error
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return done(null, false, { message: "Invalid username or password" });
      }

      // If authentication succeeds, return the user
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

// Serialize user object to store in the session
passport.serializeUser((user, done) => {
  done(null, user._id);
});

// Deserialize user object from the session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
