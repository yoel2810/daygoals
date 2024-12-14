import { Box, IconButton, Stack, Typography } from "@mui/material";
import classes from "./EventCardStyles";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DeleteIcon from "@mui/icons-material/Delete";
import PauseIcon from "@mui/icons-material/Pause";
import { useContext, useEffect, useRef, useState } from "react";
import { formatTime } from "../../../utils/timeUtils";
import { deleteEvent, updateEventTime } from "../../../utils/eventsUtils";
import { CalendarContext } from "../../../contexts/calendar/CalendarContext";
import alarmSound from "/alarm.mp3";

const EventCard = ({ event: { name, time, color } }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [remainingTime, setRemainingTime] = useState(parseInt(time));
  const { pickedDate } = useContext(CalendarContext);
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
    if (isPlaying) {
      clearInterval(intervalRef.current);
      updateEventTime(pickedDate, name, remainingTime);
    } else {
      intervalRef.current = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalRef.current);
            setIsPlaying(false);
            // updateEventTime(pickedDate, name, 0); bug need fixing
            playAlarm();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  const playAlarm = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to start
      audioRef.current.volume = 1.0; // Ensure volume is set
      audioRef.current.muted = false; // Ensure not muted
      audioRef.current.play();
    }
  };

  const handleDelete = () => {
    deleteEvent(pickedDate, name);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  return (
    <Stack sx={classes.root}>
      <Box sx={classes.coloredBox(color)} />
      <Stack marginLeft={"1.25rem"}>
        <Typography sx={classes.nameText} variant="body1">
          {name}
        </Typography>
        <Box sx={classes.timeText} variant="body1">
          <AccessAlarmsIcon fontSize="small" />
          {formatTime(remainingTime)}
        </Box>
      </Stack>
      <Stack sx={classes.iconsContainer}>
        <IconButton disabled={time === 0} onClick={handlePlayPause}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </Stack>
      <audio ref={audioRef} src={alarmSound} />
    </Stack>
  );
};

export default EventCard;
