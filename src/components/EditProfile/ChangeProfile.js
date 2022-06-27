import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";


const ChangeProfile = ({ user }) => {

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
              label="Nickname"
              variant="standard"
              helperText={`Enter your nickname here`}
              defaultValue={user.usersprofile.nickname}
            />
            <TextField
              multiline
              id="standard-basic"
              label="Bio"
              variant="standard"
              helperText={`Enter your bio here`}
              defaultValue={user.usersprofile.bio}
            />
            <Button
              sx={{
                width: "fit-content",
                ml: "2em",
              }}
              variant="contained"
              size="small"
            >
              update
            </Button>
          </Container>
    )
}

export default ChangeProfile;