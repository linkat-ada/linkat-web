import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const ChangePassword = () => {
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
              label="Current password"
              variant="standard"
              type={"password"}
              helperText={`Enter password for authorization to change password`}
            />
            <TextField
              id="standard-basic"
              label="New password"
              variant="standard"
              type={"password"}
              helperText={`Enter the new password here`}
            />
            <TextField
              id="standard-basic"
              label="Password confirmation"
              variant="standard"
              type={"password"}
              helperText={`Enter the password confirmation here`}
            />
            <Button
              sx={{
                width: "fit-content",
                ml: "2em",
              }}
              variant="contained"
              size="small"
            >
              change password
            </Button>
          </Container>
)
}

export default ChangePassword;