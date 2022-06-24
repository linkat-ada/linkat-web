import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box>
      <Link to="/">
        <Box sx={{
          width: 250,
          height: 100,
        }} component="img" src="/asserts/icons/linkat-14.svg" alt="logo" />
      </Link>
    </Box>
  );
};

export default Logo;
