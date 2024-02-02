import { useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { ChildModalVideoBG, ChildModalVideo } from './ChildModalStyles';

function VideoModal() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const socket = io('http://i10c103.p.ssafy.io:9000');

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Socket Connected');
    });

    // socket.on('videoStream', videoData => {
    //   if (videoRef.current) {
    //     videoRef.current.src = URL.createObjectURL(
    //       new Blob([videoData], { type: 'video/mp4' }),
    //     );
    //   }
    // });

    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <ChildModalVideoBG>
        <ChildModalVideo
          ref={videoRef}
          src="/assets/Samsung_social_contribution.mp4"
          autoPlay
          controls
        />

        {/* <ChildModalVideo ref={videoRef} autoPlay controls /> */}
      </ChildModalVideoBG>
    </div>
  );
}
export default VideoModal;
