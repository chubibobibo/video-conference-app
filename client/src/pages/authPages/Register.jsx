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
    return redirect("/");
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
      <h1>Register</h1>
      <div className='register-container'>
        <Form method='post'>
          <TextInput type={"text"} name={"username"} placeholder={"Username"} />
          <TextInput type={"email"} name={"email"} placeholder={"Email"} />
          <TextInput
            type={"text"}
            name={"firstName"}
            placeholder={"First name"}
          />
          <TextInput
            type={"text"}
            name={"lastName"}
            placeholder={"Last name"}
          />
          <TextInput
            type={"password"}
            name={"password"}
            placeholder={"Password"}
          />
          <SubmitButton type={"submit"} label={"register"} />
        </Form>
      </div>
      <p>
        Have an account <Link to='/login'>Login</Link>
      </p>
    </Wrapper>
  );
}
export default Register;
