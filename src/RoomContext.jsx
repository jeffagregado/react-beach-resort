import React from "react";
import { RoomProvider } from "./context";

export default function RoomContext(children) {
    
  return <RoomProvider value="hello">{children}</RoomProvider>;
  
}