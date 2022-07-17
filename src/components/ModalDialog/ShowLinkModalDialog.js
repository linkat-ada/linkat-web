import React, { useState } from "react";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Avatar,
  Stack,
  Typography,
  Button
} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useSelector, useDispatch } from "react-redux";
import { toggleNotf } from "../../redux/actions/notifications";

const ShowLinkModalDialog = ({
  open,
  handleClose,
  handleCloseMenu,
  linkId,
}) => {
  const link = useSelector((state) =>
    state?.links?.links?.find((item) => item?.id == linkId)
  );
  const dispatch = useDispatch();
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Link</DialogTitle>
      <DialogContent>
        <DialogContentText>
        <Stack sx={{
            display: "flex",
            flexDirection: "cloumn",
            textAlign: "center",
            justifyContent: "center",
            margin: "0 auto"
        }}  spacing={3}>
            <Avatar sx={{
                m:"auto",
                width:"5em",
                height:"5em",
            }} alt={link?.linktype?.type} src={link?.linktype?.icon} />
            <Typography
            sx={{
                textAlignLast: "center",
                textTransform: "capitalize",
            }}
            color="text.primary"
            >
            {link?.linktype?.type}
        </Typography>
            <Typography
            sx={{
                textAlignLast: "center",
                background:"#BDBDBD",
                p:"1em",
                border:"none",
                borderRadius: "10px",
                overflowX:"hidden"
            }}
            color="text.primary"
            >
            {link?.url}
            <ContentCopyIcon sx={{
                ml: "1em",
                cursor: "pointer"
            }} 
            onClick={() => { navigator.clipboard.writeText(link?.url) 
                dispatch(toggleNotf({success: true, messages:"successfully copy link"}))
            }}
            />
        </Typography>
        </Stack>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleClose();
            handleCloseMenu();
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ShowLinkModalDialog;
