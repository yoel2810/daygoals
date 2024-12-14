import { Divider, Stack, Typography } from "@mui/material";
import classes from "./DayEventsStyles";
import { useContext, useEffect, useState } from "react";
import { CalendarContext } from "../../contexts/calendar/CalendarContext";
import { prettifyDate } from "../../utils/dateUtils";
import AddEventButton from "./AddEventButton/AddEventButton";
import { getEventsOfTheDay } from "../../utils/eventsUtils";
import EventCard from "./EventCard/EventCard";

const DayEvents = () => {
  const { pickedDate } = useContext(CalendarContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const updateEvents = () => {
      setEvents(getEventsOfTheDay(pickedDate));
    };

    updateEvents();

    const handleStorageChange = (event) => {
      if (event.key === "events" || event.type === "localStorageUpdate") {
        updateEvents();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("localStorageUpdate", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("localStorageUpdate", handleStorageChange);
    };
  }, [pickedDate]);

  return (
    <Stack sx={classes.root}>
      <Typography sx={classes.dateTitle} variant="h5">
        {prettifyDate(pickedDate)}
      </Typography>
      <Divider sx={classes.divider} />

      {events.length > 0 ? (
        <Stack sx={classes.contentContainer}>
          {events.map((event) => (
            <EventCard key={JSON.stringify(event)} event={event} />
          ))}
          <AddEventButton />
        </Stack>
      ) : (
        <Stack sx={classes.noEventsContainer}>
          <img
            style={classes.calendarImage}
            src={`${import.meta.env.BASE_URL}images/calendar.svg`}
            alt="calendar"
          />
          <Typography sx={classes.noEventsText} variant="body1">
            Nothing is planned for today!
          </Typography>
          <AddEventButton />
        </Stack>
      )}
    </Stack>
  );
};

export default DayEvents;
