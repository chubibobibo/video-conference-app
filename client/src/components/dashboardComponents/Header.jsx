import TextInput from "../inputFields/TextInput.jsx";
import { Button } from "@material-tailwind/react";
import { useContext, useEffect } from "react";

/** importing the RoomContext */
import { RoomSocketContext } from "../../context/RoomSocketContext.jsx";

function Header() {
  const { ws } = useContext(RoomSocketContext);

  /** function that will emit a message to the socket server to join a room */
  /** @joinRoom will be used as an onClick event */
  /** @ws initializes the connection to the websocket server using the specified server url ('localhost:3001) */
  const createRoom = () => {
    ws.emit("create-room");
  };

  return (
    <>
      <div className='top-bar'>
        <h2>Jitsi Meet</h2>
        <p> High quality secured video conference</p>
        {/** container for input text and button to start conference */}
        <div className='start-conf-container'>
          <TextInput />
          <Button color='blue' className='w-[50%]' onClick={createRoom}>
            Start the conference
          </Button>
        </div>
      </div>
    </>
  );
}
export default Header;
