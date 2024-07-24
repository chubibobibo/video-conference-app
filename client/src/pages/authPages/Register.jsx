import Wrapper from "../../assets/wrappers/RegisterWrapper.js";
import TextInput from "../../components/inputFields/TextInput.jsx";
import { Form, redirect, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import SubmitButton from "../../components/buttons/SubmitButton.jsx";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await axios.post("/api/auth/register", data);
    toast.success("Registered a new user");
    return redirect("/dashboard/upcomingMeetings");
  } catch (err) {
    toast.error(
      isArray(err?.response?.data?.message)
        ? err?.response?.data?.message[0]
        : err?.response?.data?.message
    );
    console.log(err);
    return err;
  }
};
function Register() {
  return (
    <Wrapper>
      <div className='register-container'>
        <h1>Register</h1>
        <Form method='post' className='form-container'>
          <TextInput
            type={"text"}
            name={"username"}
            placeholder={"Username"}
            required={"required"}
          />
          <TextInput
            type={"email"}
            name={"email"}
            placeholder={"Email"}
            required={"required"}
          />
          <TextInput
            type={"text"}
            name={"firstName"}
            placeholder={"First name"}
            required={"required"}
          />
          <TextInput
            type={"text"}
            name={"lastName"}
            placeholder={"Last name"}
            required={"required"}
          />
          <TextInput
            type={"password"}
            name={"password"}
            placeholder={"Password"}
            required={"required"}
          />
          <SubmitButton type={"submit"} label={"register"} />
        </Form>
        <p>
          Have an account <Link to='/login'>Login</Link>
        </p>
      </div>
    </Wrapper>
  );
}
export default Register;
