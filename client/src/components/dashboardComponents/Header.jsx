import TextInput from "../inputFields/TextInput.jsx";
import { Button } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Form } from "react-router-dom";
// import axios from "axios";

/** importing the RoomContext */
import { RoomSocketContext } from "../../context/RoomSocketContext.jsx";
import { BsArrowClockwise } from "react-icons/bs";

function Header() {
  const { ws } = useContext(RoomSocketContext);

  const [roomText, setRoomText] = useState("");

  const handleChange = (e) => {
    setRoomText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post("/api/room/addRoom/", roomText);
    } catch (err) {
      console.log(err);
    }
  };

  /** function that will emit a message to the socket server to join a room */
  /** @joinRoom will be used as an onClick event */
  /** @ws initializes the connection to the websocket server using the specified server url ('localhost:3001) */
  const createRoom = async () => {
    ws.emit("create-room", roomText);
    // await axios.post("/api/room/addRoom", { roomName: roomText });
  };

  return (
    <>
      <div className='top-bar'>
        <h2>Jitsi Meet</h2>
        <p> Secured high quality video conference</p>
        {/** container for input text and button to start conference */}
        <Form method='post'>
          <div className='start-conf-container'>
            <TextInput
              name={"roomName"}
              value={roomText}
              onChange={handleChange}
            />
            <Button
              color='blue'
              className='w-[50%]'
              onSubmit={handleSubmit}
              onClick={createRoom}
              type={"submit"}
            >
              Start the conference
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
export default Header;
