import TextInput from "../inputFields/TextInput.jsx";
import { Button } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";
import axios from "axios";

/** importing the RoomContext */
import { RoomSocketContext } from "../../context/RoomSocketContext.jsx";
// import { BsArrowClockwise } from "react-icons/bs";

function Header() {
  const { ws } = useContext(RoomSocketContext);
  /** stores text data of textfield */
  const [roomText, setRoomText] = useState("");
  const navigate = useNavigate();

  /** sets the state with the input values in textfield  */
  const handleChange = (e) => {
    setRoomText(e.target.value);
  };

  /** function that will emit a message to the socket server to join a room */
  /** @joinRoom will be used as an onClick event */
  /** @ws initializes the connection to the websocket server using the specified server url ('localhost:3001) */
  const createRoom = async () => {
    ws.emit("create-room", roomText);
    // await axios.post("/api/room/addRoom", { roomName: roomText });
  };

  /** @joinRoom emits a message that will be listened to in the roomHandler in server.*/
  /** @roomText state that contains the roomName and is emitted together with the message */
  const joinRoom = async () => {
    ws.emit("peer-join-room", roomText);
  };

  const logout = async () => {
    try {
      await axios.get("/api/auth/logout");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='top-bar'>
        <button onClick={logout}>logout</button>
        <h2>Jitsi Meet</h2>
        <p> Secured high quality video conference</p>
        {/** container for input text and button to start conference */}

        <div className='start-conf-container'>
          <TextInput
            name={"roomName"}
            value={roomText} /** sets value of field to current state */
            onChange={handleChange}
          />
          <Button
            color='blue'
            className='w-[50%] mr-2'
            onClick={createRoom}
            type={"submit"}
          >
            Start the conference
          </Button>
          <Button
            color='blue'
            className='w-[50%]'
            onClick={joinRoom}
            type={"submit"}
          >
            Join conference
          </Button>
        </div>
      </div>
    </>
  );
}
export default Header;
