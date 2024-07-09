import express from "express";
const router = express.Router();
import passport from "passport";

/** import for the validation that will check for user inputs. */
import {
  registerValidation,
  loginValidation,
} from "../middleware/authValidations.js";

/** controller imports */
import { register, login, logout } from "../controllers/authControllers.js";

/** set the path for the route and the controller to be used */
/** use validation for routes that require input from users */
router.post("/register", registerValidation, register);
/** authenticate using passport.authenticate() and specifying the strategy (local) */
router.post(
  "/login",
  loginValidation,
  passport.authenticate("local", {
    failureMessage: true,
  }),
  login
);
router.get("/logout", logout);

export default router;
