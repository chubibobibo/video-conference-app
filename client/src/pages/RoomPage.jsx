/** obtain the params in the URL */
import { useParams, useLoaderData, redirect } from "react-router-dom";
import { useEffect, useContext } from "react";
import { RoomSocketContext } from "../context/RoomSocketContext";
import VideoPlayer from "../components/VideoPlayer";
import { toast } from "react-toastify";

import axios from "axios";

import Wrapper from "../assets/wrappers/RoomPage";

/**loader function to retrieve room name */
/** searches the database using the roomId to find a specific room */
/** @roomName passed together with the emitted message "Join-room" to access the roomName in roomHandler */
export const loader = async ({ params }) => {
  try {
    const roomData = await axios.get(`/api/room/findRoom/${params.id}`);
    const loggedUserData = await axios.get("/api/auth/loggedUser");
    // console.log(roomData);
    return { roomData, loggedUserData };
  } catch (err) {
    console.log(err);
    toast.error(err?.response?.data?.message);
    return redirect("/login");
  }
};

function RoomPage() {
  /** obtain the id from params */
  const { id } = useParams();

  /** @data will be passed in the emit for accessing the room data in roomHandler */
  const data = useLoaderData();
  // console.log(data);

  const { ws, me, stream, peers } = useContext(RoomSocketContext);
  // console.log(stream?.id);

  /** useEffect to emit a message to join a room on every change in id or me(peerId) */
  /** emit will also pass the roomId having the value of id from params */
  /** this will be listened in server.js roomHandler*/
  /** include peerId when emitting join-room */
  useEffect(() => {
    ws.emit("join-room", {
      roomId: id,
      peerId: me?._id,
      roomName: data?.roomData?.data?.foundRoom?.roomName,
    });
  }, [id, me, ws]);

  return (
    <Wrapper>
      <div className='header'>
        <h1>Room Id: {id}</h1>
        <h1>Room name: {data?.roomData?.data?.foundRoom?.roomName}</h1>
      </div>
      <div className='content'>
        <div className='content-header'>
          <p>{`User: ${data?.loggedUserData?.data?.loggedUser?.username}`}</p>
          <p>{`Stream Id: ${stream?.id}`}</p>
          <VideoPlayer stream={stream} />
        </div>
        {Object.values(peers).map((newPeers, idx) => {
          console.log(newPeers);
          return (
            <div key={idx}>
              <div className='content-contents'>
                <p>{`Peer Stream Id: ${newPeers?.stream?.id}`}</p>
              </div>
              <VideoPlayer stream={newPeers?.stream} />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
export default RoomPage;
