import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import ChangeProfile from "../../components/EditProfile/ChangeProfile";
import ChangeEmail from "../../components/EditProfile/ChangeEmail";
import ChangePassword from "../../components/EditProfile/ChangePassword";
import ChangeUsername from "../../components/EditProfile/ChangeUsername";
import ChangeProfilePic from "../../components/EditProfile/ChangeProfilePic";
import ChangeBgPic from "../../components/EditProfile/ChangeBgPic";
import DrawerList from "../../components/DrawerList/DrawerList";
import Drawer from '@mui/material/Drawer';



const EditProfile = () => {
    const container = window !== undefined ? () => window.document.body : undefined;
  const user = useSelector((state) => state?.auth?.data?.user);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: "2em",
      }}
    >
        <Drawer container={container}  ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box' },
          }} variant="temporary">
            <DrawerList options={["username", "bio&nackname", "email", "password"]}/>
        </Drawer>
      {user && user.usersprofile ? (
        <div>
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Avatar src="" />
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="caption"
                sx={{ size: "1em", fontSize: "1.2em" }}
                gutterBottom
              >
                {user.username}
              </Typography>
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <ChangeProfilePic user={user}/>
                <ChangeBgPic user={user}/>
              </Container>
            </Container>
          </Container>
          <ChangeUsername user={user}/>
          <ChangeProfile user={user}/>
          <ChangeEmail user={user}/>
          <ChangePassword/>
        </div>
      ) : (
        <p>Please login first</p>
      )}
    </Box>
  );
};

export default EditProfile;
