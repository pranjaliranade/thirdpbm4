import React, { useRef } from "react";
import "./App.css";

import video from "./assets/cut.mp4";
import useVideoPlayer from "./Hooks/useVideoPlayer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const videoElement = useRef(null);
  const [currentFrame, setCurrentFrame] = useState(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);

  return (
    <div className="container">
      <div className="container1">
      <div className="video-wrapper">
        <video
          src={video}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
          autoPlay="loop" 
          onPause={setCurrentFrame}
        />
        <div className="controls">
          <div className="actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <FontAwesomeIcon icon={faPlay} />
              ) : (
                <FontAwesomeIcon icon={faPause} />
              )}
            </button>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          <select
            className="velocity"
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </select>
          <button className="mute-btn" onClick={toggleMute}>
            {!playerState.isMuted ? (
              //<i className="bx bxs-volume-full"></i>
              //<i className="far-solid fa-volume-high"></i>
              <FontAwesomeIcon icon={faVolumeHigh} />
            ) : (
              //<i className="bx bxs-volume-mute"></i>
              //<i className="far-solid fa-volume-off"></i>
              <FontAwesomeIcon icon={faVolumeMute} />
            )}
          </button>
        </div>
      </div>
      </div>
      <div className="container2"></div>
      {/*currentFrame && <FrameAnalysisBox frame={currentFrame} />*/}
      <div className="img-wrapper">

      </div>
    </div>
  );
};

export default App;