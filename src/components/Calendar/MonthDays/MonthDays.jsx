import { getDaysInMonth, getFirstDayOfMonth } from "../../../utils/dateUtils";
import DayTab from "./DayTab/DayTab";
import { Grid2 as Grid } from "@mui/material";
import classes from "./MonthDaysStyles";
import { useContext } from "react";
import { CalendarContext } from "../../../contexts/calendar/CalendarContext";

const MonthDays = () => {
  const { year, month } = useContext(CalendarContext);
  const initialValue = -getFirstDayOfMonth(year, month);
  const daysCount = getDaysInMonth(year, month);

  return Array.from(
    { length: daysCount - initialValue },
    (_, i) => initialValue + i
  ).map((dayNumber) => (
    <Grid sx={classes.gridItem} key={dayNumber} size={12 / 7}>
      <DayTab dayNumber={dayNumber + 1} />
    </Grid>
  ));
};

export default MonthDays;
