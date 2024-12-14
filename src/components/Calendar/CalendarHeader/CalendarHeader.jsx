import { Box, Typography } from "@mui/material";
import { getMonthName } from "../../../utils/dateUtils";
import classes from "./CalendarHeaderStyles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useContext } from "react";
import { CalendarContext } from "../../../contexts/calendar/CalendarContext";

const CalendarHeader = () => {
  const { year, month, setMonth, setYear } = useContext(CalendarContext);

  const handleNextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear((prevYear) => prevYear + 1);
    } else {
      setMonth((prevMonth) => prevMonth + 1);
    }
  };

  const handlePreviousMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear((prevYear) => prevYear - 1);
    } else {
      setMonth((prevMonth) => prevMonth - 1);
    }
  };

  return (
    <Box sx={classes.root}>
      <ArrowCircleLeftIcon
        sx={classes.arrowIcon}
        onClick={handlePreviousMonth}
      />
      <Typography sx={classes.text} variant="h4">
        {getMonthName(month)} {year}
      </Typography>
      <ArrowCircleRightIcon sx={classes.arrowIcon} onClick={handleNextMonth} />
    </Box>
  );
};

export default CalendarHeader;
