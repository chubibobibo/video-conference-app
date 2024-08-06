/** obtain the params in the URL */
import {
  useParams,
  useLoaderData,
  redirect,
  useNavigate,
} from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { RoomSocketContext } from "../context/RoomSocketContext";
import VideoPlayer from "../components/VideoPlayer";
import { toast } from "react-toastify";

/**react icons */
import { FcEndCall } from "react-icons/fc";
import { ImVolumeMute2 } from "react-icons/im";
import { IoVideocamOff } from "react-icons/io5";

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

  const navigate = useNavigate();

  /** @data will be passed in the emit for accessing the room data in roomHandler */
  const data = useLoaderData();
  // console.log(data);

  const { ws, me, stream, peers } = useContext(RoomSocketContext);

  // const [addedPeer, setAddedPeer] = useState();
  // console.log(me._id);

  /** useEffect to emit a message to join a room on every change in id or me(peerId) */
  /** emit will also pass the roomId having the value of id from params */
  /** this will be listened in server.js roomHandler*/
  /** include peerId when emitting join-room */
  useEffect(() => {
    if (me) {
      ws.emit("join-room", {
        roomId: id,
        peerId: me._id,
        roomName: data?.roomData?.data?.foundRoom?.roomName,
      });
    }
  }, [id, me, ws]);
  // console.log(addedPeer);

  /** function to stop media stream */
  const stopMediaStreams = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  const handleClick = () => {
    stopMediaStreams();
    ws.emit("endCall");
    ws.disconnect();
    navigate("/dashboard/upcomingMeetings");
  };

  return (
    <Wrapper>
      <div className='header'>
        <h1>Room Id: {id}</h1>
        <h1>Room name: {data?.roomData?.data?.foundRoom?.roomName}</h1>
      </div>
      <div className='content'>
        <div className='content-header'>
          {/* <p>{`Host stream: ${addedPeer}`}</p> */}
          <p>{`Host stream: ${data?.loggedUserData?.data?.loggedUser?.username}`}</p>
          <p>{`Stream Id: ${stream?.id}`}</p>
          <VideoPlayer stream={stream} />
        </div>
        {Object.values(peers).map((newPeers, idx) => {
          // console.log(newPeers);
          return (
            <div key={idx}>
              <div className='content-contents'>
                <p>{`Peer Stream : ${data?.loggedUserData?.data?.loggedUser?.username}`}</p>
                {/* <p>{`Peer Stream : ${addedPeer}`}</p> */}
                <p>{`Peer Stream Id: ${newPeers?.stream?.id}`}</p>
              </div>
              <VideoPlayer stream={newPeers?.stream} />
            </div>
          );
        })}
      </div>
      <div className='btn-container'>
        <button className='call-btn' onClick={handleClick}>
          <FcEndCall size={"2rem"} />
          End call
        </button>
        <button className='call-btn'>
          <IoVideocamOff size={"2rem"} />
          Stop video
        </button>
        <button className='call-btn'>
          <ImVolumeMute2 size={"2rem"} />
          Mute mic
        </button>
      </div>
    </Wrapper>
  );
}
export default RoomPage;
