import { Box } from "@mui/material";
import React from "react";
import Navbar from "./components/navbar";

import ChatApp from "./components/ChatApp/ChatApp";

const App = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          p: "0",
          m: "0",
          // height: "100%",
          // position: "relative",
          width: "100%",
          bgColor: "#333230",
        }}
      >
        <ChatApp />
      </Box>
    </>
  );
};

export default App;
