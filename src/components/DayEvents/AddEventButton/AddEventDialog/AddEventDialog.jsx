import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import classes from "./AddEventDialogStyles";
import { useContext, useState } from "react";
import { addEvent } from "../../../../utils/eventsUtils";
import { CalendarContext } from "../../../../contexts/calendar/CalendarContext";

const AddEventDialog = ({ open, setIsOpen }) => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const { pickedDate } = useContext(CalendarContext);

  const handleClose = () => {
    setIsOpen(false);
    setTime("");
    setName("");
  };

  const handleCancel = () => {
    handleClose();
  };

  const handleAdd = () => {
    addEvent(pickedDate, {
      name,
      time: time * 60,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    });
    handleClose();
  };

  return (
    <Dialog onClose={() => {}} open={open}>
      <DialogTitle>Add an event</DialogTitle>
      <DialogContent sx={classes.dialogContent}>
        <TextField
          value={name}
          label="Event name"
          fullWidth
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          value={time}
          label="Time (in minutes)"
          fullWidth
          onChange={(event) => setTime(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleAdd}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEventDialog;
