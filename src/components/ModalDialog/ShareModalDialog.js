import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useDispatch } from "react-redux";


const ShareModalDialog = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Share profile</DialogTitle>
      <DialogContent>
        <img src={""}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {
          handleClose(false)
        }}>
          Cancel
        </Button>
        <Button>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ShareModalDialog;
