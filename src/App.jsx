import { Box } from "@mui/material";
import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatApp from "./components/ChatApp/ChatApp";
import ActiveCallsComponent from "./components/Api";
import ActiveCalls from "./components/ActiveCalls";

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
        <Router>
          <Routes>
            <Route path="/" element={<ChatApp />} />
            <Route path="/:id" element={<ChatApp />} />
            <Route path="/api" element={<ActiveCallsComponent />} />
            <Route path="/ActiveCalls" element={<ActiveCalls />} />
          </Routes>
        </Router>
      </Box>
    </>
  );
};

export default App;
