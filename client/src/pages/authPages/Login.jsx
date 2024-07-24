/** Importing styled components */
import Wrapper from "../../assets/wrappers/LoginWrapper.js";

import { Form, redirect, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

/** import components */
import TextInput from "../../components/inputFields/TextInput";
import SubmitButton from "../../components/buttons/SubmitButton.jsx";

export const action = async ({ request }) => {
  const formData = await request.formData(); /** obtains data from forms */
  const data =
    Object.fromEntries(formData); /** converts data to usable object*/
  try {
    await axios.post("/api/auth/login/", data);
    toast.success("User logged in");
    return redirect("/dashboard/upcomingMeetings");
  } catch (err) {
    console.log(err);
    toast.error(err?.response?.data);
    return err;
  }
};

function Login() {
  return (
    <Wrapper>
      <div className='login-container'>
        <h1>Login</h1>
        <Form method='post' className='form-container'>
          <TextInput
            type={"text"}
            name={"username"}
            placeholder={"Username"}
            required={"required"}
          />
          <TextInput
            type={"password"}
            name={"password"}
            placeholder={"Password"}
            required={"required"}
          />
          <SubmitButton
            type={"submit"}
            label={"Submit"}
            required={"required"}
          />
          <p>
            No account yet? <Link to='/register'>Register</Link>
          </p>
        </Form>
      </div>
    </Wrapper>
  );
}
export default Login;
