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
import { editLinkAction } from "../../redux/actions/links";

const EditModalDialog = ({ open, handleClose, linkId, handleCloseMenu }) => {
  const dispatch = useDispatch();
  const [linkData, setLinkData] = useState({
    url: "",
    linkTypeId: "",
  });
  const handleInputChange = (e) => {
    linkData[e.target.name] = e.target.value;
  };
  const handleOnEditLink = async (data) => {
    await dispatch(editLinkAction(data))
      .then((res) => {
        console.log("editLinkAction", "success");
        handleClose();
        handleCloseMenu();
      })
      .catch((err) => {
        console.error("editLinkAction", err);
        handleClose();
        handleCloseMenu();
      });
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Link</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To Edit this Link, please enter your link address here. it will update
          automatically.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="link type"
          type="text"
          fullWidth
          variant="standard"
          name="linkTypeId"
          onChange={handleInputChange}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="your Link"
          type="text"
          fullWidth
          variant="standard"
          name="url"
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {
          handleClose()
          handleCloseMenu()
        }}>
          Cancel
        </Button>
        <Button onClick={() => handleOnEditLink({ ...linkData, id: linkId })}>
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModalDialog;
