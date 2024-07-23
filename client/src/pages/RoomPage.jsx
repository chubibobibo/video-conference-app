/** obtain the params in the URL */
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { RoomSocketContext } from "../context/RoomSocketContext";
import VideoPlayer from "../components/VideoPlayer";

import Wrapper from "../assets/wrappers/RoomPage";

function RoomPage() {
  /** obtain the id from params */
  const { id } = useParams();

  const { ws, me, stream, peers } = useContext(RoomSocketContext);
  console.log(stream);

  // let newPeers = [];
  // if (peers) {
  //   const allPeers = Object.values(peers);
  //   newPeers.push(allPeers);
  // }
  // console.log(newPeers);

  // console.log(allPeers);
  // const peerVideos = Object.values.allPeers;
  // console.log(peerVideos);
  /** useEffect to emit a message to join a room on every change in id or me(peerId) */
  /** emit will also pass the roomId having the value of id from params */
  /** this will be listened in server.js */
  /** include peerId when emitting join-room */
  useEffect(() => {
    ws.emit("join-room", { roomId: id, peerId: me?._id });
  }, [id, me, ws]);

  return (
    <>
      Room {id}
      <Wrapper>
        <VideoPlayer stream={stream} />
        {Object.values(peers).map((newPeers) => {
          return (
            <div key={newPeers.id}>
              <VideoPlayer stream={newPeers.stream} />
            </div>
          );
        })}
      </Wrapper>
    </>
  );
}
export default RoomPage;
