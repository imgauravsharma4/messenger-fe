import { createContext, useContext, useMemo } from "react";
import { io } from "socket.io-client";
import { API_URL } from "utils/variables";
const SocketContext = createContext(null);

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const socket = useMemo(() => io(API_URL), []);
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
