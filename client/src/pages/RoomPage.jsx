/** obtain the params in the URL */
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { RoomSocketContext } from "../context/RoomSocketContext";
import VideoPlayer from "../components/VideoPlayer";

function RoomPage() {
  /** obtain the id from params */
  const { id } = useParams();

  const { ws, me, stream } = useContext(RoomSocketContext);
  // console.log({ me });

  /** useEffect to emit a message to join a room on every change in id or me(peerId) */
  /** emit will also pass the roomId having the value of id from params */
  /** this will be listened in server.js */
  /** include peerId when emitting join-room */
  useEffect(() => {
    ws.emit("join-room", { roomId: id, peerId: me?._id });
  }, [id, me]);

  return (
    <>
      Room {id}
      <VideoPlayer stream={stream} />
    </>
  );
}
export default RoomPage;
