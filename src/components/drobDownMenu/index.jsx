import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useParams, useNavigate } from "react-router-dom";
import { data, masseges } from "../../utils/data";

const DrobDownMenu = () => {
  const { id } = useParams();
  const [lastMessages, setLastMessages] = useState({});
  const [persons, setPersons] = useState(data);
  const isArange = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (id) => {
    navigate(`/${id}`);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const lastMessagesMap = {};
    data.forEach((person) => {
      const lastMessage = masseges
        ?.filter((message) => message.roomId === person.id)
        ?.slice(-1)[0]?.message;
      lastMessagesMap[person.id] = lastMessage;
    });
    setLastMessages(lastMessagesMap);
  }, []);

  const addPerson = () => {
    const newPerson = {
      id: (persons.length + 1).toString(),
      name: "Kamal",
      phone: "01119153863",
      qew: "Marketing",
      overflow: "auto",
    };
    setPersons([...persons, newPerson]);
    navigate(`/${newPerson.id}`);
  };

  return (
    <Box
      sx={{
        width: "5%",
        bgcolor: "#2B2B2B",
        position: "absolute",
        right: "60px",
        top: "-41px",
        border:'1px solid #F9AE00',
        p:'0px'
      }}
    >
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        endIcon={<MenuIcon sx={{pr:'12px',color:'#F9AE00',width:'35px'}} />}
        sx={{
          color: "white",
          backgroundColor: "#2B2B2B",
          "&:hover": { backgroundColor: "#3D3D3D" },
        }}
      ></Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        {persons.map((person) => (
          <MenuItem
            key={person.id}
            onClick={() => handleMenuItemClick(person.id)}
          >
            <img
              src={person.img}
              alt="person"
              width="50px"
              height="50px"
              style={{ borderRadius: "50px", margin: "10px" }}
            />
            {!isArange && (
              <>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#E1AD01",
                    fontSize: "18px",
                  }}
                >
                  {person.name}
                </Typography>
                <Typography sx={{ color: "white" }}>
                  {lastMessages[person.id]}
                </Typography>
              </>
            )}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default DrobDownMenu;
