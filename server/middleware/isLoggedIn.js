import { ExpressError } from "../ExpressError/ExpressError";

/** using passportJs isAuthenticated() method to verify if user is logged in */
export const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated) {
    throw new ExpressError("User is not logged in", 400);
  } else {
    next();
  }
};
