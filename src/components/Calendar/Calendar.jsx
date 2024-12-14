import { Box, Grid2 as Grid } from "@mui/material";
import DaysRow from "./DaysRow/DaysRow";
import MonthDays from "./MonthDays/MonthDays";
import classes from "./CalendarStyles";
import CalendarHeader from "./CalendarHeader/CalendarHeader";

const Calendar = () => {
  return (
    <Box sx={classes.root}>
      <CalendarHeader />
      <Grid container>
        <DaysRow />
        <MonthDays />
      </Grid>
    </Box>
  );
};

export default Calendar;
