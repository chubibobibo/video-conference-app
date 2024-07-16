import TextInput from "../inputFields/TextInput.jsx";
import { Button } from "@material-tailwind/react";
import { Link, Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";

/** importing the RoomContext */
import { RoomSocketContext } from "../../context/RoomSocketContext.jsx";

/** @enterRoom  function passed from DashboardLayout that accepts a roomId argument and use it to navigate to a page*/
function Header({ enterRoom }) {
  const { ws } = useContext(RoomSocketContext);
  // console.log(ws);

  /** initialize web socket connection */
  /** @ws listens to an emitted message ("room created " from server.js upon creation of a room (create-room) event ) */
  /** then executes the function createRoom that logs the roomId */
  useEffect(() => {
    ws.on("room created", enterRoom);
  }, []);

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
