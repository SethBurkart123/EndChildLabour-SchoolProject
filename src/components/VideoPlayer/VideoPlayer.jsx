import { useEffect, useRef } from "react";
import videojs from "video.js";
import "videojs-youtube";
import "video.js/dist/video-js.css";
import "./VideoPlayer.scss";
import { FaChevronLeft } from "react-icons/fa";

const videoJsOptions = {
  controls: true,
  fluid: true,
  controlBar: {
    children: ['playToggle', 'skipBackward', 'skipForward', 'volumePanel', 'currentTimeDisplay', 'timeDivider', 'durationDisplay', 'progressControl', 'liveDisplay', 'seekToLive', 'remainingTimeDisplay', 'customControlSpacer', 'playbackRateMenuButton', 'chaptersButton', 'descriptionsButton', 'subsCapsButton', 'audioTrackButton', 'ShareButton', 'pictureInPictureToggle', 'fullscreenToggle'],
  },
  fill: true,
  preload: 'auto',
  html5: {
    hls: {
      enableLowInitialPlaylist: true,
      smoothQualityChange: true,
      overrideNative: true,
    },
  },
  sources: [
    {
      /*type: "video/youtube", //important*/
      src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
    }
  ],
};

export default function VideoPlayer() {
  const videoNode = useRef(null);
  const player = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (videoNode.current && !initialized.current) {
      initialized.current = true; //prevent duplicate initialization
      player.current = videojs(videoNode.current, {
        ...videoJsOptions
      }).ready(function () {
        console.log("Player Ready");
        player.play();
        console.log("Playing video!");
      });
    }
    //clear up player on dismount
    return () => {
      if (player.current) {
        player.current.dispose();
      }
    };
  }, []);

  return (
    <div className="App">
      <div className="leave-arrow">
        <FaChevronLeft size={20} onClick={() => window.location.href = "/browse"} />
      </div>
      <video ref={videoNode} className="video-js vjs-16-9 vjs-default-skin" />
    </div>
  );
}
