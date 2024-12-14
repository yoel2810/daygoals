import { Box, Typography } from "@mui/material";
import classes from "./DayTabStyles";
import { CalendarContext } from "../../../../contexts/calendar/CalendarContext";
import { useContext } from "react";

const DayTab = ({ dayNumber }) => {
  const { pickedDate, setPickedDate, month, year } =
    useContext(CalendarContext);

  const handleDayClick = () => {
    setPickedDate(new Date(year, month - 1, dayNumber));
  };

  const isTodayPicked =
    pickedDate.getDate() === dayNumber &&
    pickedDate.getMonth() === month - 1 &&
    pickedDate.getFullYear() === year;

  return (
    <Box sx={classes.root(dayNumber, isTodayPicked)} onClick={handleDayClick}>
      <Typography sx={classes.text}>{dayNumber}</Typography>
    </Box>
  );
};

export default DayTab;
