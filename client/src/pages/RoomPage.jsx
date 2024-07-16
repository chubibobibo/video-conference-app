/** obtain the params in the URL */
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { RoomSocketContext } from "../context/RoomSocketContext";

function RoomPage() {
  /** obtain the id from params */
  const { id } = useParams();

  const { ws } = useContext(RoomSocketContext);
  // console.log(ws);

  /** useEffect to emit a message to join a room on every change in id */
  /** emit will also pass the roomId having the value of id from params */
  /** this will be listened in server.js */
  useEffect(() => {
    ws.emit("join-room", { roomId: id });
  }, [id]);
  return <div>Room {id}</div>;
}
export default RoomPage;
