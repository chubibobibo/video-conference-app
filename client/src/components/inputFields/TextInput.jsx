/** Importing styled components */
import TextInputField from "../../assets/wrappers/TextInputWrapper.js";

function TextInput({
  type,
  name,
  placeholder,
  value,
  onChange,
  handleSubmit,
  required,
}) {
  /** Using the context imported from Login.jsx*/

  return (
    <div>
      <TextInputField
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onSubmit={handleSubmit}
        required={required}
      />
    </div>
  );
}
export default TextInput;
