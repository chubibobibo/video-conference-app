/** library that allows bi-directional event based communication between client and server */
import socketIO from "socket.io-client";
import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { peerReducer } from "./PeerReducer";
import { addPeerAction, removePeerAction } from "./PeerActions.js";

import { v4 as uuidv4 } from "uuid";
import { Peer } from "peerjs";
import { useState } from "react";

import axios from "axios";

/** Web socket server will be used to connect client to server upon mounting */
const WS = "http://localhost:3001";

/** Creating the context to avoid prop drilling*/
/** values can be accessed anywhere from the app when we wrap it around the app component */
export const RoomSocketContext = createContext(null);

/** @ws initializes the connection of the web socket server to the specified server url (WS)*/
const ws = socketIO(WS);

/** RoomProvider component accepts children as argument then wraps around it's children components with Provider */
/** this will be used to wrap components */
/** any component wrapped by RoomProvider will have access to the context */
export const RoomProvider = ({ children }) => {
  const navigate = useNavigate();

  /** @me state that will handle the id of the user using peerjs */
  /** pass the state as context to all components */
  /** @stream state that handles media stream */
  const [me, setMe] = useState();
  const [stream, setStream] = useState();
  /** using useReducer to create a new state that will contain an array of peers and their stream */
  /** @peerReducer function that will contain the logic for changing the global state for peers and stream */
  const [peers, dispatch] = useReducer(peerReducer, {});

  //   /** @enterRoom function to execute after listening to the emitted message from the server when a room is created */
  //   /** this function takes an argument of roomId and use it to navigate to a room, */
  const enterRoom = ({ roomId }) => {
    // console.log({ roomId });
    navigate(`/roomPage/${roomId}`);
  };

  /** @peerjoinRoom function to let peer join room of host */
  /** @roomId from foundRoom is used to navigate to a specific room */
  /** navigating to specific room because it emits a message to join a user that is listened by the roomHandler. */
  const peerJoinRoom = ({ foundRoom }) => {
    // console.log(foundRoom);
    navigate(`/roomPage/${foundRoom.roomId}`);
  };

  /** remove the video stream of a user once tab is closed */
  const removePeer = (peerId) => {
    dispatch(removePeerAction(peerId));
  };

  /** useEffect that initialize web socket connection and getUserMedia and disconnecting*/
  /** @ws listens to an emitted message ("room created " from server.js upon creation of a room (create-room) event ) */
  /** then executes the function createRoom that logs the roomId */
  useEffect(() => {
    const getUser = async () => {
      const currentLoggedUser = await axios.get("/api/auth/loggedUser");
      console.log(currentLoggedUser);

      // const meId = uuidv4();
      const meId = currentLoggedUser?.data?.loggedUser?._id;
      const peerId = new Peer(meId); /** creates a new peer */
      setMe(peerId);
      /** implement getUserMedia to obtain video */
      /** @stream response from promise that we use to set the stream state */
      /** NOTE: page should be served securely over https for GUM to work */
      try {
        navigator.mediaDevices
          .getUserMedia({ video: true, audio: false })
          .then((response) => {
            console.log(response);
            setStream(response);
            // console.log(stream);
          });
      } catch (err) {
        console.log(err);
      }

      /** Listens for emits from roomHandler in the server. */
      ws.on("room created", enterRoom);
      ws.on("get-users", (participants) => {
        console.log(participants);
      });
      ws.on("peer-joined-room", peerJoinRoom);
      /** @removePeer function that uses dispatch to remove a user using it's peerID */
      ws.on("user-disconnected", removePeer);
    };
    getUser();
  }, []);

  /** useEffect that will handle creating and answering of calls */
  /** @me state that contains peerId */
  /** @stream state that contains stream video */
  useEffect(() => {
    if (!me) return;
    if (!stream) return;
    // console.log(stream);

    /** listens for user-joined emits*/
    /** Call is initiated by the current user @me to a new user @peerID */
    /** @stream is sent  in this call */
    ws.on("user-joined", ({ peerId }) => {
      const call = me.call(peerId, stream);
      call.on("stream", (stream) => {
        console.log(stream);
        /**@dispatch accepts the action that will be used for the reducer function */
        /** contains the action type and the action payload */
        dispatch(addPeerAction(peerId, stream));
      });
    });

    /** @me listens to incoming call emits from other users */
    /** if call is received @me answers using @stream */
    me.on("call", (call) => {
      call.answer(stream);
      call.on("stream", (stream) => {
        dispatch(addPeerAction(call.peer, stream));
      });
    });
  }, [me, stream]);
  console.log({ peers });

  return (
    <RoomSocketContext.Provider value={{ ws, me, stream, peers }}>
      {children}
    </RoomSocketContext.Provider>
  );
};

export default RoomProvider;
