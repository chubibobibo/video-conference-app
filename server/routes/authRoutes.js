import express from "express";
const router = express.Router();
import passport from "passport";

import { rateLimit } from "express-rate-limit";

/** import for the validation that will check for user inputs. */
import {
  registerValidation,
  loginValidation,
} from "../middleware/authValidations.js";

/** controller imports */
import {
  register,
  login,
  currentLoggedUser,
  logout,
} from "../controllers/authControllers.js";

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, //15 mins
  limit: 3,
  standardHeaders: "draft-7",
  headers: true,
  message: "Login requests exceeded 3 tries. Try again in 15 mins",
});

/** set the path for the route and the controller to be used */
/** use validation for routes that require input from users */
router.post("/register", registerValidation, register);
/** authenticate using passport.authenticate() and specifying the strategy (local) */
router.post(
  "/login",
  apiLimiter,
  loginValidation,
  passport.authenticate("local", {
    failureMessage: true,
  }),
  login
);
router.get("/loggedUser", currentLoggedUser);
router.get("/logout", logout);

export default router;
