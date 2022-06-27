import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";


const ChangeProfilePic = () => {
  return (
    <Typography
      variant="caption"
      sx={{
        mt: "-10px",
        ml: "-1.5em",
        size: ".2em",
        fontSize: ".7em",
        cursor: "pointer",
        "&:hover": {
          color: "blue",
        },
        width: "fit-content",
      }}
      gutterBottom
    >
      {" "}
      Change profile image
    </Typography>
  );
};

export default ChangeProfilePic;
