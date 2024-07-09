import SubmitButtonStyled from "../../assets/wrappers/SubmitButtonWrapper";
import { Button } from "@material-tailwind/react";

function SubmitButton({ type, label }) {
  return <Button type={type}>{label}</Button>;
}
export default SubmitButton;
