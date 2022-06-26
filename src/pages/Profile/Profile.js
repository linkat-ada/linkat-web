import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Image from "react-bootstrap/Image";
import "./profile.css";
import { getUserInfoAction } from "../../redux/actions/users";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  p: "2em",
  color: theme.palette.text.secondary,
}));
const Profile = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth);

  useEffect(() => {
    const getUserInfo =  async () => {
        await dispatch(getUserInfoAction())
    .then(() => console.log("getUserInfoAction", "sucess"))
    .catch((err) => console.error(err));
    }
    getUserInfo();
    console.log("userInfo", userInfo)
  }, []);

  return (
    <div className="padding">
      <div className="col">
        <div className="card">
          <img
            className="card-img-top"
            src="https://i.imgur.com/K7A78We.jpg"
            alt="Card image cap"
          />
          <div className="card-body little-profile text-center">
            <div className="pro-img">
              <img src="https://i.imgur.com/8RKXAIV.jpg" alt="user" />
            </div>
            <h3 className="m-b-0">Brad Macullam</h3>
            <p>{"bio"}</p>
            <Button
              sx={{ textTransform: "capitalize" }}
              color="inherit"
              variant="contained"
              endIcon={<EditIcon />}
            >
              edit profile
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                p: "2em",
                margin: "auto",
              }}
            >
              <Stack direction={"column"} spacing={2}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Stack>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
