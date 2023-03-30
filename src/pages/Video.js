import React, { useRef, useState } from "react";
import "./video.css";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handleStart() {
    if (!play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }
  return (
    <div className="video">
      <video
        className="video__player"
        controls
        ref={videoRef}
        onClick={handleStart}
        loop
        src="https://youtu.be/44B1WWDci3Q"
      ></video>
    </div>
  );
}

export default Video;
