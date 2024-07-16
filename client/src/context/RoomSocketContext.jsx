/** library that allows bi-directional event based communication between client and server */
import socketIO from "socket.io-client";
import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/** Web socket server will be used to connect client to server upon mounting */
const WS = "http://localhost:3001";

/** Creating the context to avoid prop drilling*/
/** values can be accessed anywhere from the app when we wrap it around the app component */
export const RoomSocketContext = createContext(null);

/** save the web socket connection to a var
 * that we will be passing as value in the context
 */
/** @ws initializes the connection of the web socket server to the specified server url (WS)*/
const ws = socketIO(WS);

/** RoomProvider component accepts children as argument then wraps around it's children components with Provider */
/** this will be used to wrap components */
const RoomProvider = ({ children }) => {
  return (
    <RoomSocketContext.Provider value={{ ws }}>
      {children}
    </RoomSocketContext.Provider>
  );
};

export default RoomProvider;
