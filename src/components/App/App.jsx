import { Box } from "@mui/material";
import Calendar from "../Calendar/Calendar";
import { CalendarProvider } from "../../contexts/calendar/CalendarContext";
import classes from "./AppStyles";
import DayEvents from "../DayEvents/DayEvents";

const App = () => {
  return (
    <CalendarProvider>
      <Box sx={classes.root}>
        <Calendar />
        <DayEvents />
      </Box>
    </CalendarProvider>
  );
};

export default App;
