import { useEffect, useRef } from "react";

function VideoPlayer({ stream }) {
  /** @HTMLVideoElement interface that provides properties and methods for manipulating videos */
  /** @videoRef uses useRef to store persistent value which will not cause a re-render */
  const videoRef = useRef(<HTMLVideoElement />);

  /** @videoRef access the current value and set it to @stream state */
  /** current state of videoRef needs to be checked if it exist before assigning a value */
  useEffect(() => {
    if (videoRef.current) videoRef.current.srcObject = stream;
  }, [stream]);
  return (
    <div>
      <video ref={videoRef} autoPlay />
    </div>
  );
}
export default VideoPlayer;
