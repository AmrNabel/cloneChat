import { Box } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "#393837",
        width: "100%",
        color: "#EFA803",
        height: "6vh",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{ marginLeft: "20px", marginRight: "20px" }}
      />
    </Box>
  );
};

export default Navbar;
