import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

function useSocket(url: string): Socket | null {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketIo = io(url);

    setSocket(socketIo);

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return socket;
}

export default useSocket;
