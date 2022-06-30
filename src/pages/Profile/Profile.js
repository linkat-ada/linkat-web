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
import { useNavigate } from "react-router-dom";
import { getUserLinksAction } from "../../redux/actions/links";

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
  const user = useSelector((state) => state?.auth?.data?.user);
  const links = useSelector((state) => state?.links?.links)
  const navigate = useNavigate();

  useEffect(() => {
    const getUserInfo = async () => {
      await dispatch(getUserInfoAction())
        .then(() => console.log("getUserInfoAction", "sucess"))
        .catch((err) => console.error(err));
    };
    const getUserLinks = async () => {
      await dispatch(getUserLinksAction())
        .then(() => console.log("getUserLinksAction", "sucess"))
        .catch((err) => console.error(err));
    };
    getUserInfo();
    getUserLinks();
    console.log("userInfo", user);
  }, []);

  return (
    <div className="padding">
      <div className="col">
        {user ? (
          <div className="card">
            <img
              className="card-img-top"
              src={user?.usersprofile?.bgPic}
              alt="Card image cap"
            />
            <div className="card-body little-profile text-center">
              <div className="pro-img">
                <img src={user?.usersprofile?.profilePic} alt="user" />
              </div>
              <h3 className="m-b-0">{user?.username}</h3>
              <p>{user?.usersprofile?.bio}</p>
              <Button
                sx={{ textTransform: "capitalize" }}
                color="inherit"
                variant="contained"
                endIcon={<EditIcon />}
                onClick={() => navigate("/editprofile")}
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
                  {links?.map((link, index) => (
                    <Item key={index}>{link?.url}</Item>
                  ))}
                </Stack>
              </Box>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
