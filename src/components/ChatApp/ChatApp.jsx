import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import Chat from "../chat";
import Sidebar from "../sidebar";
import DrobDownMenu from "../drobDownMenu";
import {useState } from "react";
import { masseges } from "../../utils/data";


const ChatApp = () => {
  const isArange = useMediaQuery("(max-width:600px)");
  const [chatMessages, setChatMessages] = useState(masseges);


  const handleChatData = (messages) => {
    setChatMessages(messages);
  };
  return (
    <Box
      sx={{
        minHeight: "94vh",
        bgcolor:'#333230',
        display: !isArange && "flex",
        width: "100%",
        position: "relative",
      }}
    >
      {isArange ? <DrobDownMenu /> : <Sidebar chatMessages={chatMessages} />}
      <Chat own={true} onSendData={handleChatData} />
    </Box>
  );
};

export default ChatApp;
