import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditModalDialog from "../ModalDialog/EditModalDialog";
import DeleteModalDialog from "../ModalDialog/DeleteModalDialog";


const LinkMenu = ({ anchorEl, open, handleClose, linkId }) => {
  const [editDialog, setEditDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  
  const handleOnOpenEditDialog = () => {
    setEditDialog(true)
  };

  const handleOnCloseEditDialog = () => {
    setEditDialog(false)
  };

  const handleOnOpenDeleteDialog = () => {
    setDeleteDialog(true)
  }
  const handleOnCloseDeleteDialog = () => {
    setDeleteDialog(false)
  }
  
  return (
      <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleOnOpenEditDialog}>
        <EditIcon 
        sx={{
          pr:".2em"
        }}
        />Edit</MenuItem>
        <MenuItem onClick={handleOnOpenDeleteDialog}>
        <DeleteForeverIcon sx={{
          pr:".2em"
        }}/>Delete</MenuItem>

      <EditModalDialog open={editDialog} handleClose={handleOnCloseEditDialog} linkId={linkId}/>
      <DeleteModalDialog open={deleteDialog} handleClose={handleOnCloseDeleteDialog} linkId={linkId}/>
    </Menu>
  );
};

export default LinkMenu;
