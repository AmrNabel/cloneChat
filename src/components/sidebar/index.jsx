import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { data } from "../../utils/data";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3000");

const Sidebar = ({ chatMessages, onSendMessage, onSendPersonsData }) => {
  const [lastMessages, setLastMessages] = useState({});
  const [top, setTop] = useState({});
  const [persons, setPersons] = useState(data);
  const isArange = useMediaQuery("(max-width:600px)");

  
  const handleClick = (phone) => {
    const FilteredMessages = chatMessages.filter((message) => message.phone === phone);
    onSendMessage(FilteredMessages);

    const FilteredPersonsData = persons.filter((person) => person.phone === phone);
    onSendPersonsData(FilteredPersonsData);
  };

  useEffect(() => {
    const lastMessagesMap = {};
    const top = {};
    data.forEach((person) => {
      const lastMessage = chatMessages
        ?.filter((message) => message.phone === person.phone)
        ?.slice(-1)[0];
      lastMessagesMap[person.phone] = lastMessage.message;
      top[person.phone] = lastMessage;
    });
    setLastMessages(lastMessagesMap);
    setTop(top);
  }, [chatMessages]);

  const addPersonOnTop = (newPerson) => {
    const existingPersonIndex = persons.findIndex(
      (person) => person.phone === newPerson.phone
    );

    const delayedAddition = () => {
      if (existingPersonIndex !== -1) {
        setPersons((prevPersons) => [
          newPerson,
          ...prevPersons.slice(0, existingPersonIndex),
          ...prevPersons.slice(existingPersonIndex + 1),
        ]);
      } else {
        setPersons([newPerson, ...persons]);
      }
    };

    setTimeout(delayedAddition, 100);
  };

  socket.on("outboundMessage", (data) => {
    const newPerson = {
      id: data.id,
      name: data.name,
      phone: data.phone,
      parentID: data.parentID,
      platform: data.platform,
      message: data.message,
      type: data.type,
      queue: data.queue,
      media: data.media,
      mediaCaption: data.mediaCaption,
      date: data.date,
    };

    addPersonOnTop(newPerson);
  });

  return (
    <Box
      sx={{
        width: "30%",
        bgcolor: "#2B2B2B",
        maxHeight: "100%",
        borderTop: "2px solid #E1AD01",
        borderRight: "2px solid #E1AD01",
      }}
    >
      <Box
        sx={{
          overflow: "auto",
          height: "100%",
          maxHeight: "92vh",
          width: "100%",
        }}
      >
        {persons
          .slice()
          .sort((a, b) => {
            const aLastMessageDate =
              new Date(top[a.phone]?.date || "").getTime() / 1000;
            const bLastMessageDate =
              new Date(top[b.phone]?.date || "").getTime() / 1000;

            return aLastMessageDate - bLastMessageDate;
          })
          .reverse()
          .map((person) => (
            <Box
              key={person.phone}
              sx={{
                display: "flex",
                cursor: "pointer",
                borderTop: "1px solid #484848",
                alignItems: "center",
                "&:hover": {
                  backgroundColor: "#3D3D3D",
                },
              }}
              onClick={() => handleClick(person.phone)}
            >
              <img
                src={person.img}
                alt="person"
                width="50px"
                height="50px"
                style={{ borderRadius: "50px", margin: "10px" }}
              />
              {!isArange && (
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                      fontSize: "18px",
                    }}
                  >
                    {person.name}
                  </Typography>
                  <Typography sx={{ color: "#B1AEAB" }}>
                    {lastMessages[person.phone]}
                  </Typography>
                </Box>
              )}
            </Box>
          ))}
        <Button
          endIcon={<SendIcon sx={{ color: "#E1AD01", fontSize: "30px" }} />}
          onClick={addPersonOnTop}
          sx={{
            color: "white",
            backgroundColor: "#2B2B2B",
            "&:hover": {
              backgroundColor: "#3D3D3D",
            },
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
