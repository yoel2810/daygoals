import { Grid2 as Grid, Typography } from "@mui/material";
import { days } from "./constants/days";
import classes from "./DaysRowStyles";

const DaysRow = () => {
  return (
    <Grid sx={classes.root} container size={12}>
      {days.map((day) => (
        <Grid sx={classes.textContainer} key={day} size={12 / 7}>
          <Typography sx={classes.dayText} align="center">
            {day}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default DaysRow;
