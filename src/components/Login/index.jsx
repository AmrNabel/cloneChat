import React from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Paper,
} from "@mui/material";
import logo from "../../assets/logo5_new_color.png";

const LoginPage = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#F8F8F8" }}>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 4,
          backgroundColor: "#F8F8F8",
        }}
      >
        <Paper
          sx={{
            p: 3,
            width: "100%",
            maxWidth: "400px",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "16px",
            boxShadow: "none",
          }}
          elevation={0}
        >
          <Typography
            variant="h4"
            sx={{ mb: 2, fontWeight: "bold", textAlign: "center",color:'#808080' }}
          >
            Welcome back!
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2, textAlign: "center" }}>
            Enter your Credentials to access your account{" "}
          </Typography>
          <Box component="form" sx={{ "& .MuiTextField-root": { mb: 2 } }}>
            <TextField fullWidth label="Email" variant="outlined" />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                mb: 2,
                backgroundColor: "#ea454c",
                borderRadius: "10px",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#ba3f43",
                },
              }}
            >
              Sign in
            </Button>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 2,
                textAlign: "center",
                fontSize: "21px",
                // fontWeight: "bold",
                color: "#808080",
              }}
            >
              We Made Call Center Simple{" "}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 2,
                textAlign: "center",
                color: "#f76a6f",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Trio Developed By Atheel{" "}
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Box
        sx={{
          width: "50%",
          mt: "",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F2F1EB",
        }}
      >
        <Box
          sx={{
            height: "50%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={logo} alt="logo" style={{ height: "70%", width: "70%" }} />
        </Box>
        <Typography
          sx={{
            mb: 2,
            textAlign: "center",
            fontSize: "21px",
            color: "#808080",
          }}
        >
          We’re a highly collaborative and supportive team, coming together on
          every project to ensure our clients get the very best result.
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
