import { body, param, validationResult } from "express-validator";
import { UserModel } from "../models/UserModel.js";
import { ExpressError } from "../ExpressError/ExpressError.js";

/**create a function that will handle the error */
/**This function will accept an array (validateValues) of values to be validated. */
/**then this function will return the array we passed as an argument and an error response */
const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req); //this returns all available errors based on the validation provided when checking the incoming request.
      //check if the errors array is not empty meaning there errors.
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((allErrors) => allErrors.msg); //turns the errors from the validationResult into array then mapped it to access the msg key for every item in the original array, then populate the created array with that.
        throw new ExpressError(errorMessages); //use the custom error that we created and pass the errorMessages that we mapped instead of a string.
      }
      next();
    },
  ];
};

/** validations for inputs */
/**saving the function to handle validation errors to available that we can export. */
/**then pass the values from the req.body (jobInput) that needs validating. */
/**using body() we will specify the name of the input which are validating. then chaining different validations (refer to documentation) */
/**NOTE: for jobType and jobStatus we are using isIn() to check whether the input is one of the values that we created in the object constants. */
/**NOTE: custom() should always by async */
export const registerValidation = withValidationErrors([
  body("username")
    .notEmpty()
    .withMessage("username cannot be empty")
    .isLength({ min: 5 })
    .withMessage("username cannot be less than 5 characters")
    .isLength({ max: 25 })
    .withMessage("username cannot exceed 25 characters"),
  body("firstName")
    .notEmpty()
    .withMessage("firstName cannot be empty")
    .isLength({ max: 25 })
    .withMessage("firstName cannot exceed 25 characters"),
  body("lastName")
    .notEmpty()
    .withMessage("lastName cannot be empty")
    .isLength({ max: 25 })
    .withMessage("lastName cannot exceed 25 characters"),
  body("email")
    .notEmpty()
    .withMessage("email cannot be empty")
    .isEmail()
    .withMessage("email must be a valid email address")
    /** Checks if email entered already exist in the database */
    /** using an async function that will query the database */
    .custom(async (email) => {
      const foundEmail = await UserModel.findOne({ email: email });
      if (foundEmail) {
        throw new ExpressError("email is already registered", 400);
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Password cannot be  empty")
    .isLength({ min: 8 })
    .withMessage("Password needs to be at least 8 characters"),
]);

export const loginValidation = withValidationErrors([
  body("username")
    .notEmpty()
    .withMessage("username cannot be empty")
    .isLength({ min: 5 })
    .withMessage("username cannot be less than 5 characters")
    .isLength({ max: 25 })
    .withMessage("username cannot exceed 25 characters"),
  body("password")
    .notEmpty()
    .withMessage("Password cannot be  empty")
    .isLength({ min: 8 })
    .withMessage("Password needs to be at least 8 characters"),
]);
