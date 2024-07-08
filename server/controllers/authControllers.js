import "express-async-errors"; /**  handles express async errors */
import { UserModel } from "../models/UserModel.js";
import { ExpressError } from "../ExpressError/ExpressError.js";

/** Registering a new user */
export const register = async (req, res) => {
  if (!req.body) {
    throw new ExpressError("No data received");
  }
  /** Destructure the req.body to isolate the password */
  const { username, firstName, lastName, email, password } = req.body;
  const newUser = await UserModel.create({
    username: username,
    firstName: firstName,
    lastName: lastName,
    email: email,
  });
  //   console.log(newUser);
  /** set the password for the created newUser manually, separate from the other properties */
  await newUser.setPassword(password);
  await newUser.save();
  if (!newUser) {
    throw new ExpressError("Error registering a new user", 400);
  }
  res.status(200).json({ message: "New user registered", newUser });
};

/** Login in a new user */
/** parse the req.body for the username and query the database to look for that username */
/** passport.authenticate() is going to be used in the routes tor authentication */
export const login = async (req, res) => {
  if (!req.body) {
    throw new ExpressError("no data received", 400);
  }
  const foundUser = await UserModel.findOne({ username: req.body.username });
  if (!foundUser) {
    throw new ExpressError("User not found", 400);
  }
  res.status(200).json({ message: "user found", foundUser });
};

/** Logging out a user */
export const logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.status(200).json({ message: "user logged out" });
  });
};
