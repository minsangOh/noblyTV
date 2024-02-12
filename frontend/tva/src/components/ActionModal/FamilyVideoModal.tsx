import { useEffect, useRef, useState } from 'react';
import { Socket } from 'socket.io-client';
import {
  BASE_URL,
  FILE_SEVER_PORT,
  SOCKET_PORT,
} from '../../constants/constants';
import useSocket from '../../hooks/useSocket';
import ExpandModal from '../ChildModal/ExpandModal';

function FamilyVideoModal() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [videoPath, setVideoPath] = useState<string>('');
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const modalRef = useRef<HTMLDivElement>(null);
  const socket: Socket | null = useSocket(`${BASE_URL}:${SOCKET_PORT}`);

  useEffect(() => {
    if (socket) {
      socket.on('message', (data: string) => {
        if (data === 'stop') {
          setMessage('');
        } else if (/^(\/[\w\s-]+)+\.(mp4)$/.test(data)) {
          console.log(data);
          setVideoPath(data);
          setIsFullScreen(true);
          setIsActive(true); // 모달을 활성화 상태로 유지
          setMessage(''); // 비디오 재생 시 메시지 초기화
        } else if (data === '나중에 또 봐요!') {
          setIsFullScreen(false);
          setTimeout(() => {
            setIsActive(false);
          }, 7000);
        } else {
          console.log(data);
          setMessage(data);
          setIsActive(true); // 메시지 수신 시 모달 활성화
        }
      });
    }
    return () => {
      if (socket) {
        socket.off('message');
      }
    };
  }, [isFullScreen, socket]);

  // useEffect(() => {
  //   // 비디오 재생이 끝났을 때 호출
  //   function handleVideoEnd() {
  //     socket?.emit('message', 'stop');
  //     setIsActive(true); // ExpandModal 활성화
  //   }

  //   const modalElement = modalRef.current;
  //   // modalElement가 존재하고, 현재 전체 화면 모드인 경우에만 실행
  //   if (modalElement && isFullScreen) {
  //     // 모달 내의 비디오 엘리먼트를 선택.
  //     const videoElement = modalElement.querySelector('video');
  //     // 비디오 재생이 끝났을 때 handleVideoEnd 함수를 호출
  //     videoElement?.addEventListener('ended', handleVideoEnd);
  //   }

  //   return () => {
  //     modalElement
  //       ?.querySelector('video')
  //       ?.removeEventListener('ended', handleVideoEnd);
  //   };
  // }, [isFullScreen, socket]);

  const handleAnimationEnd = () => {
    const modalElement = modalRef.current;
    if (modalElement && isFullScreen) {
      const videoElement = modalElement.querySelector('video');
      if (videoElement) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        videoElement.play(); // 여기서 비디오 재생을 시작합니다.
      }
    }
  };

  return (
    <ExpandModal
      ref={modalRef}
      content={`${BASE_URL}:${FILE_SEVER_PORT}${videoPath}`}
      // content={`${videoPath}`}
      isActive={isActive}
      isFullScreen={isFullScreen}
      message={message}
      onAnimationEnd={handleAnimationEnd} // 애니메이션 완료 콜백 함수 전달
    />
  );
}

export default FamilyVideoModal;
