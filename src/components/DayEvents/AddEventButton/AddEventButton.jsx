import { ButtonBase } from "@mui/material";
import classes from "./AddEventButtonStyles";
import { useState } from "react";
import AddEventDialog from "./AddEventDialog/AddEventDialog";

const AddEventButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <ButtonBase sx={classes.root} onClick={handleClick}>
        Add event
      </ButtonBase>
      <AddEventDialog open={isDialogOpen} setIsOpen={setIsDialogOpen} />
    </>
  );
};

export default AddEventButton;
