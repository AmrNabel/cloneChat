import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
// import Navbar from "./components/navbar";
import ChatApp from "./components/ChatApp/ChatApp";
import LoginPage from "./components/Login";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Box
        sx={{
          p: "0",
          m: "0",
          width: "100%",
          bgcolor: "#F0F0F0", 
        }}
      >
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/chat" element={<ChatApp />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
