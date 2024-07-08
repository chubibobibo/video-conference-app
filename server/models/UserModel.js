/** NOTE: password will be provided by passportJS */
import mongoose from "mongoose";
/** passport local mongoose to create a unique username and password */
import passportLocalMongoose from "passport-local-mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
});

/** Using passport local mongoose as plugin to the userSchema */
/** this allows the use of different methods for authenticating a user*/
/** creates unique username and a password  */
UserSchema.plugin(passportLocalMongoose);

export const UserModel = mongoose.model("UserModel", UserSchema);
