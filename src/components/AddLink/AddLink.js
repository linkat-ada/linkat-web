import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Typography } from "@mui/material";
import AddModalDialog from "../ModalDialog/AddModalDialog";
import { useDispatch, useSelector } from "react-redux";
import { getLinkTypesAction } from "../../redux/actions/links";

const AddLink = ({}) => {
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const dispatch = useDispatch();
  const getLinkTypes = async () => {
    await dispatch(getLinkTypesAction()).then(()=>{
      console.log("getLinkType", "success")
    }).catch((err)=> {
      console.error("getLinkType", err)
    })
  }
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        cursor: "pointer",
      }}
      display="flex"
      flexDirection="row"
      textAlign={"center"}
      p="1em 2em"
      justifyContent="center"
    >
      <AddIcon />
      <Typography
        sx={{
          textAlignLast: "center",
          textTransform: "capitalize",
          p: "0 2em",
        }}
        color="text.primary"
        onClick={()=> {
          getLinkTypes();
          setOpenAddDialog(true)
        }}
      >
        {"Add Link and Contact info"}
      </Typography>
      <AddModalDialog
        open={openAddDialog}
        handleOnClose={setOpenAddDialog}
      />
    </Box>
  );
};

export default AddLink;
