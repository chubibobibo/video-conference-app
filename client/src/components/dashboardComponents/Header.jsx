import TextInput from "../inputFields/TextInput.jsx";
import { Button } from "@material-tailwind/react";
import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <div className='top-bar'>
        <h2>Jitsi Meet</h2>
        <p> High quality secured video conference</p>
        {/** container for input text and button to start conference */}
        <div className='start-conf-container'>
          <TextInput />
          <Button color='blue' className='w-[50%]'>
            Start the conference
          </Button>
        </div>
      </div>
    </>
  );
}
export default Header;
