/** Importing styled components */
import TextInputField from "../../assets/wrappers/TextInputWrapper.js";
function TextInput({ type, name, placeholder }) {
  /** Using the context imported from Login.jsx*/

  return (
    <div>
      <TextInputField
        type={type}
        name={name}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
export default TextInput;
