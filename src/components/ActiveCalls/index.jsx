import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Container, Typography, Paper, Box } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import ComputerIcon from "@mui/icons-material/Computer";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "channel", headerName: "Channel", width: 250 },
  { field: "context", headerName: "Context", width: 220 },
  { field: "state", headerName: "State", width: 120 },
  { field: "elapsedTime", headerName: "Elapsed Time", width: 150 },
];

const ActiveCalls = () => {
  const [activeCalls, setActiveCalls] = useState([]);
  const [upCalls, setUpCalls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.22.26:3001/api/active-calls"
        );
        const upChannels = response.data.activeCalls.filter(
          (item) => item.state === "Up"
        );
        setUpCalls(upChannels);
        const mappedData = response.data.activeCalls.map((call) => ({
          id: call.uniqueid,
          channel: call.channel,
          context: call.context,
          state: call.state,
          elapsedTime: getElapsedTimeFromStorage(call.channel) || "0 seconds",
        }));
        setActiveCalls(mappedData);
        console.log(activeCalls);
        // setActiveCalls(
        //   response.data.activeCalls.map((call) => ({
        //     ...call,
        //     elapsedTime: getElapsedTimeFromStorage(call.channel) || 0,
        //   }))
        // );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const getElapsedTimeFromStorage = (channel) => {
      const storedTime = localStorage.getItem(`elapsedTime_${channel}`);
      return storedTime ? parseInt(storedTime, 1000) : 0;
    };

    const setElapsedTimeToStorage = (channel, elapsedTime) => {
      localStorage.setItem(`elapsedTime_${channel}`, elapsedTime);
    };

    fetchData();

    const timer = setInterval(() => {
      setActiveCalls((prevCalls) =>
        prevCalls.map((call) => {
          const elapsedTime = call.elapsedTime + 1;
          setElapsedTimeToStorage(call.channel, elapsedTime);
          return { ...call, elapsedTime };
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [activeCalls]);

  return (
    <Box sx={{ width: "100hw", Height: "100hv", backgroundColor: "#F7F9FE" }}>
      <Container
        sx={{
          padding: "20px",
          backgroundColor: "#F7F9FE",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            marginBottom: "20px",
            color: "text.primary",
          }}
        >
          Hello Dear 👋,
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: "0px 20px 20px",
          }}
        >
          <Card sx={{ width: "20vw" }}>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "3rem",
                  pr: "10px",
                  //   color: "#00AC4F",
                }}
                color="textSecondary"
                gutterBottom
              >
                {React.cloneElement(<PeopleIcon />, {
                  style: { fontSize: "inherit" },
                })}
              </Typography>
              <Box>
                <Typography gutterBottom>Total Customers</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    sx={{ pr: "10px", fontWeight: "bold", fontSize: "34px" }}
                    variant="h5"
                  >
                    5,423
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ width: "20vw" }}>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "3rem",
                  pr: "10px",
                  //   color: "#00AC4F",
                }}
                color="textSecondary"
                gutterBottom
              >
                {React.cloneElement(<PersonIcon />, {
                  style: { fontSize: "inherit" },
                })}
              </Typography>
              <Box>
                <Typography gutterBottom>All Calls</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    sx={{ pr: "10px", fontWeight: "bold", fontSize: "34px" }}
                    variant="h5"
                  >
                    {activeCalls.length}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ width: "20vw" }}>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "3rem",
                  pr: "10px",
                  //   color: "#00AC4F",
                }}
                color="textSecondary"
                gutterBottom
              >
                {React.cloneElement(<ComputerIcon />, {
                  style: { fontSize: "inherit" },
                })}
              </Typography>
              <Box>
                <Typography
                  sx={{
                    color: "green",
                    fontWeight: "bold",
                  }}
                  gutterBottom
                >
                  Active Now
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    sx={{ pr: "10px", fontWeight: "bold", fontSize: "34px" }}
                    variant="h5"
                  >
                    {upCalls.length}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>

        <Paper sx={{ overflowX: "auto" }}>
          <DataGrid
            rows={activeCalls}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 20]}
            checkboxSelection
          />
        </Paper>
      </Container>
    </Box>
  );
};

export default ActiveCalls;
