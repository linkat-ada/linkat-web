import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";


const ChangeUsername = ({}) => {
  const user = useSelector((state) => state?.auth?.data?.user)
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        ml: "4em",
      }}
    >
      <TextField
        id="standard-basic"
        label="Username"
        variant="standard"
        helperText={`To change the current username.`}
        defaultValue={user?.username}
      />
      <TextField
        id="standard-basic"
        label="Re-Enter password"
        variant="standard"
        helperText={`Enter password for authorization to change username`}
      />
      <Button
        sx={{
          width: "fit-content",
          ml: "2em",
        }}
        variant="contained"
        size="small"
      >
        submit
      </Button>
    </Container>
  );
};

export default ChangeUsername;
