import VideoJS from "@/components/player/Player";
import IndexLayout from "@/layout/indexLayout";
import { Button } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import videojs from "video.js";

export default function Home({ videos }) {

  const playerRef = useRef(null);
 const [videoJsOptions, setVideoJsOptions] = useState({
  autoplay:true,
  loop:true,
  fluid:true,
  // controls:true,
  responsive:true,
  sources: [
    {
      src: "https://stream.mux.com/GJjLF93MGEmq4VfidIdZ4oMMAJRhEjSQ.m3u8",
      type: "application/x-mpegURL"
    }
  ],
  aspectRatio: '4:3',
},
)
  useEffect(() => {
    if (playerRef.current) {
      setVideoJsOptions({
        autoplay:true,
        loop:true,
        fluid:true,
        controls:true,
        sources: [
          {
            src: "https://stream.mux.com/GJjLF93MGEmq4VfidIdZ4oMMAJRhEjSQ.m3u8",
            type: "application/x-mpegURL"
          }
        ],
        aspectRatio: '16:9',
        height: '100%'
      })
       
    }
  },[]);

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  
  return (
    <div className="flex flex-col gap-10 videos h-full w-full">
     <div className="h-full w-full">
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
     </div>
    </div>
  );
}

Home.layout = IndexLayout;
