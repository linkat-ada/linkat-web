import React from "react";
import { Switch } from "@mui/material"
import LinkIcon from "@mui/icons-material/Link";

const Link = ({ id, icon, name }) => {
  return (
    <div key={id}>
      <LinkIcon />
      {link?.url}
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        name={"" + link?.id}
      />
    </div>
  );
};

export default Link;
