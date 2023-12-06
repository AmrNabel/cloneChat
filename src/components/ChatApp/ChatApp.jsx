import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import Chat from "../chat";
import Sidebar from "../sidebar";
import DrobDownMenu from "../drobDownMenu";
import { useState } from "react";
import { masseges } from "../../utils/data";

const ChatApp = () => {
  const isArange = useMediaQuery("(max-width:600px)");
  const [chatMessages, setChatMessages] = useState(masseges);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [FilteredPersonsData, setFilteredPersonsData] = useState([]);

  const handleChatData = (messages) => {
    setChatMessages(messages);
  };
  const handleFilteredMessages = (filteredMessages) => {
    setFilteredMessages(filteredMessages);
  };
  const handlePersonsData = (filteredMessages) => {
    setFilteredPersonsData(filteredMessages);
  };
  return (
    <Box
      sx={{
        minHeight: "94vh",
        bgcolor: "#333230",
        display: !isArange && "flex",
        width: "100%",
        position: "relative",
      }}
    >
      {isArange ? (
        <DrobDownMenu />
      ) : (
        <Sidebar
          chatMessages={chatMessages}
          onSendMessage={handleFilteredMessages}
          onSendPersonsData={handlePersonsData}
        />
      )}
      <Chat
        own={true}
        onSendData={handleChatData}
        filteredMessages={filteredMessages}
        chatMessages={chatMessages}
        FilteredPersonsData={FilteredPersonsData}
      />
    </Box>
  );
};

export default ChatApp;
