import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";


const ChangeEmail = ({ user }) => {
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
          label="Email"
          variant="standard"
          type={"email"}
          helperText={`Enter the email here`}
          defaultValue={user.email}
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type={"password"}
          helperText={`Enter password for authorization to change email`}
        />
        <Button
          sx={{
            width: "fit-content",
            ml: "2em",
          }}
          variant="contained"
          size="small"
        >
          changEmail
        </Button>
      </Container>
    )
}



export default ChangeEmail;