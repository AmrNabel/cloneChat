import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import logo from "../../assets/logo2.jpg";
import { useEffect, useState, useRef } from "react";
import { FilledInput } from "@mui/material";
import { data } from "../../utils/data";


const Chat = ({ onSendData, filteredMessages , chatMessages }) => {
  const [list, setList] = useState([]);
  const [infoList, setInfoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  // const [close, setClose] = useState(false);
  // const [isChatClosed, setIsChatClosed] = useState(false);
  const messagesEndRef = useRef(null);
  const isArange = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const record = chatMessages.filter((message) => message.phone === filteredMessages[0]?.phone);
    setList(record);
    
  }, [chatMessages, filteredMessages]);
  
  useEffect(() => {
   
    const personData = data.filter((message) => message.phone === filteredMessages[0]?.phone);
    setInfoList(...personData);
    
  }, [filteredMessages]);

  useEffect(() => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [list]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addData = (phone) => {
    if (inputValue.trim() !== "") {
      const newMessage = {
        id: (chatMessages.length + 1).toString(),
        speaker: "Agent",
        message: inputValue,
        phone: phone,
        date: new Date()
      };
      onSendData([...chatMessages, newMessage]);
      setInputValue("");
      // setClose({ isClose: false });
      // setIsChatClosed(false);
      messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKeyPress = (e, id) => {
    if (e.key === "Enter") {
      addData(id);
      e.value = "";
      e.preventDefault();
    }
  };

  const onCloseChat = (phone) => {
    const endMessage = {
      id: (chatMessages.length + 1).toString(),
      speaker: "Agent",
      message: "Chat ended, Thank you",
      phone: phone,
      date: new Date()?.toDateString(),
    };
    onSendData([...chatMessages, endMessage]);
    // setClose({ id: phone, isClose: true });
    // setIsChatClosed({ id: phone, isCloseChat: true });
  };

  const buttonStyles = {
    color: "white",
    height: "5vh",
  };
  return (
    <Box
      sx={{
        bgcolor: "#333230",
        color: "black",
        minWidth: !isArange ? "70%" : "100%",
      }}
    >
      <Box
        sx={{
          height: "7.5vh",
          width: "100%",
          bgcolor: "#333230",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderBottom: "2px solid #F9AE00",
          borderTop: "2px solid #F9AE00",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", fontSize: { xs: "14px", md: "16px" } }}
        >
          <Typography
            component="span"
            sx={{ fontWeight: "bold", color: "white" }}
          >
            {infoList?.name}
          </Typography>
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", fontSize: { xs: "14px", md: "16px" } }}
        >
          <Typography
            component="span"
            sx={{ fontWeight: "bold", color: "white" }}
          >
            {infoList?.phone}
          </Typography>
        </Typography>

        <Typography
          sx={{ fontWeight: "bold", fontSize: { xs: "14px", md: "16px" } }}
        >
          <Typography
            component="span"
            sx={{ fontWeight: "bold", color: "white" }}
          >
            {infoList?.qew}
          </Typography>
        </Typography>
      </Box>
      <Box
        sx={{
          height: "78.3vh",
          width: "100%",
          bgcolor: "#413D3A",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        {list.length === 0 && (
          <Typography
            sx={{
              color: "#A38540",
              bgcolor: "#413D3A",
              fontWeight: "bold",
              fontSize: { xs: "14px", md: "30px" },
              m:'auto'
            }}
          >
            No Chats Found
          </Typography>
        )}
        {list.map((msg, index) => {
          const isLastMessage = index === list.length - 1;

          return (
            <Box
              key={msg.id}
              ref={isLastMessage ? messagesEndRef : null}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent:
                  msg.speaker === "Agent"
                    ? msg.message === "Chat ended, Thank you"
                      ? "center"
                      : "flex-end"
                    : "flex-start",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  bgcolor: msg.speaker !== "Agent" ? "#A38540" : "#333230",
                  width: "fit-content",
                  maxWidth: "60%",
                  borderRadius: "50px",
                  pr: "8px",
                  m: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "10",
                    p: "10px",
                    pl: "25px",
                    wordBreak: "break-all",
                  }}
                >
                  {msg.message}
                  {msg.message === "Chat ended, Thank you" && (
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#E1AD01",
                        marginLeft: "10px",
                      }}
                    >
                      {msg.date}
                    </span>
                  )}
                </Typography>

                {msg.speaker === "Agent" &&
                  msg.message !== "Chat ended, Thank you" && (
                    <img
                      src={logo}
                      alt="logo"
                      width="50px"
                      style={{ borderRadius: "50px", margin: "5px" }}
                    />
                  )}
              </Box>
            </Box>
          );
        })}
        <div ref={messagesEndRef} />
      </Box>
      <Box
        sx={{
          bgcolor: "#333230",
          height: "7.7vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Button
          sx={buttonStyles}
          endIcon={<CloseIcon sx={{ color: "#F9AE00", fontSize: "30px" }} />}
          onClick={() => onCloseChat(list[0].phone)}
          // disabled={isChatClosed.isCloseChat && isChatClosed.id === id}
        >
          close
        </Button>
        <FilledInput
          required
          autoComplete="off"
          multiline
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={(e) => handleKeyPress(e, list[0].phone)}
          // disabled={!close.isClosed && close.id === id}
          maxRows={2}
          variant="outlined"
          placeholder="Say Something"
          sx={{
            width: "40%",
            borderRadius: "25px",
            height: "45px",
            border: "1px solid #F9AE00",
            textDecoration: "none",
            p: "15px",
            color: "#FAEBD7",
          }}
          disableUnderline
        />
        <Button
          sx={buttonStyles}
          endIcon={<SendIcon sx={{ color: "#F9AE00", fontSize: "30px" }} />}
          onClick={() => addData(filteredMessages[0].phone)}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chat;
