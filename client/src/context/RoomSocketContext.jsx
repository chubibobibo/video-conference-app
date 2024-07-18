/** library that allows bi-directional event based communication between client and server */
import socketIO from "socket.io-client";
import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import { Peer } from "peerjs";
import { useState } from "react";

/** Web socket server will be used to connect client to server upon mounting */
const WS = "http://localhost:3001";

/** Creating the context to avoid prop drilling*/
/** values can be accessed anywhere from the app when we wrap it around the app component */
export const RoomSocketContext = createContext(null);

/** @ws initializes the connection of the web socket server to the specified server url (WS)*/
const ws = socketIO(WS);

/** RoomProvider component accepts children as argument then wraps around it's children components with Provider */
/** this will be used to wrap components */
export const RoomProvider = ({ children }) => {
  const navigate = useNavigate();

  /** @me state that will handle the id of the user using peerjs */
  /** pass the state as context to all components */
  /** @stream state that handles media stream */
  const [me, setMe] = useState();
  const [stream, setStream] = useState();

  //   /** @enterRoom function to execute after listening to the emitted message from the server when a room is created */
  //   /** this function takes an argument of roomId and use it to navigate to a room, */
  const enterRoom = ({ roomId }) => {
    // console.log({ roomId });
    navigate(`/roomPage/${roomId}`);
  };

  /** initialize web socket connection */
  /** @ws listens to an emitted message ("room created " from server.js upon creation of a room (create-room) event ) */
  /** then executes the function createRoom that logs the roomId */
  useEffect(() => {
    const meId = uuidv4();
    const peerId = new Peer(meId); /** creates a new peer */
    setMe(peerId);
    /** implement getUserMedia to obtain video */
    /** @stream response from promise that we use to set the stream state */
    try {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((response) => {
          console.log(response);
          setStream(response);
        });
    } catch (err) {
      console.log(err);
    }
    ws.on("room created", enterRoom);
    ws.on("get-users", (participants) => {
      console.log(participants);
    });
  }, []);

  return (
    <RoomSocketContext.Provider value={{ ws, me, stream }}>
      {children}
    </RoomSocketContext.Provider>
  );
};

export default RoomProvider;
