import React,{ useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
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
import SwitchComponents from "../../components/SwitchComponents/SwitchComponents";
import DrawerList from "../../components/DrawerList/DrawerList";
import { useParams } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const EditProfile = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { option } = useParams();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer sx={{ zIndex: "-999" }} variant="permanent" open={open}>
        <DrawerHeader />
        <DrawerHeader />
        <DrawerHeader />
        <DrawerHeader>
          <IconButton
            onClick={() => {;
              setOpen(!open);
            }}
          >
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <DrawerList open={open}/>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <SwitchComponents option={ option } />
      </Box>
    </Box>
  );
};

export default EditProfile;
