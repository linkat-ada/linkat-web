import React from "react";
import Toolbar from "@mui/material/Toolbar";
import MuiDrawer from "@mui/material/Drawer";
import {
  Box,
  CssBaseline,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Link,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LockIcon from "@mui/icons-material/Lock";
import MailIcon from "@mui/icons-material/Mail";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import BadgeIcon from "@mui/icons-material/Badge";
import ContactPageIcon from "@mui/icons-material/ContactPage";

const DrawerList = ({ open }) => {
  return (
    <List>
      <Link href="/editprofile/changeprofilepic">
        <ListItem
          key={"ChangeProfilePic"}
          sx={{ display: "block" }}
          disablePadding
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText
              primary={"profile image"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link href="/editprofile/changebgpic">
        <ListItem key={"ChangeBgPic"} sx={{ display: "block" }} disablePadding>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <WallpaperIcon />
            </ListItemIcon>
            <ListItemText
              primary={"background image"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link href="/editprofile/changemail">
        <ListItem key={"ChangeEmail"} sx={{ display: "block" }} disablePadding>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <MailIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Change Email"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link href="/editprofile/changepassword">
        <ListItem
          key={"ChangePassword"}
          sx={{ display: "block" }}
          disablePadding
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <LockIcon />
            </ListItemIcon>

            <ListItemText
              primary={"ChangePassword"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link href="/editprofile/changeprofile">
        <ListItem
          key={"ChangeProfile"}
          sx={{ display: "block" }}
          disablePadding
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <CoPresentIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Bio and Nickname"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link href="/editprofile/changeusername">
        <ListItem
          key={"ChangeUsername"}
          sx={{ display: "block" }}
          disablePadding
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <BadgeIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Change Username"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </Link>
    </List>
  );
};

export default DrawerList;
