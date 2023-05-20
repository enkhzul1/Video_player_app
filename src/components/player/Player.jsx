import { ActionIcon } from '@mantine/core';
import { IconArrowDown, IconArrowUp, IconChevronDown, IconChevronUp, IconHeart } from '@tabler/icons-react';
import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const {options, onReady} = props;
  var Button = videojs.getComponent('Button');
  
  const button = React.useRef(null)


  React.useEffect(() => {

    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode. 
      const videoElement = document.createElement("video-js");

      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      });

    // You could update an existing player in the `else` block here
    // on prop change, for example:

    button.current= new Button(playerRef.current, {
      clickHandler: function(event) {
        videojs.log('Clicked');
      }
    });

    playerRef.current.addChild(button.current, {
      // controlText: 'OK',
      // text:'XDD',
      clickHandler: function(event) {
        videojs.log('Clicked');
      },
    });
    button.current.controlText("SEX")
    button.current.addClass('vjs-visible-text');


  console.log(button.current.el());
  

    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player className='w-full relative'>
      <div ref={videoRef} />
      <div className='absolute right-0 top-0 h-full bg-slate-800	 px-3'>
        <div className='flex h-full flex-col gap-4 align-center justify-center z-10'>
          <ActionIcon variant='transparent' onClick={getPreviousVideo()}>
            <IconChevronUp/>
          </ActionIcon>
          <ActionIcon variant='transparent' onClick={getNextVideo()}>
            <IconChevronDown/>
          </ActionIcon>
          <ActionIcon variant='transparent'>
            <IconHeart/>
          </ActionIcon>
        </div>
      </div>
    </div>
  );
}

export default VideoJS;