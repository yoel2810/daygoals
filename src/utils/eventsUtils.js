import { formatDate } from "./dateUtils";

export const getEventsOfTheDay = (pickedDate) => {
  const storedEvents = localStorage.getItem("events");
  const formattedDate = formatDate(pickedDate);
  if (storedEvents) {
    const parsedEvents = JSON.parse(storedEvents);
    return parsedEvents[formattedDate] || [];
  }
  return [];
};

const triggerEventUpdate = () => {
  const event = new Event("localStorageUpdate");
  window.dispatchEvent(event);
};

export const addEvent = (pickedDate, event) => {
  const pickedDateString = formatDate(pickedDate);
  const storedEvents = localStorage.getItem("events");
  let parsedEvents = {};
  if (storedEvents) {
    parsedEvents = JSON.parse(storedEvents);
  }
  if (!parsedEvents[pickedDateString]) {
    parsedEvents[pickedDateString] = [];
  }
  parsedEvents[pickedDateString].push(event);
  localStorage.setItem("events", JSON.stringify(parsedEvents));
  triggerEventUpdate();
};

export const updateEventTime = (pickedDate, eventName, newTime) => {
  const pickedDateString = formatDate(pickedDate);
  const storedEvents = localStorage.getItem("events");
  let parsedEvents = {};
  if (storedEvents) {
    parsedEvents = JSON.parse(storedEvents);
  }
  parsedEvents[pickedDateString] = parsedEvents[pickedDateString].map((event) =>
    event.name === eventName ? { ...event, time: newTime } : event
  );
  localStorage.setItem("events", JSON.stringify(parsedEvents));
  triggerEventUpdate();
};

export const deleteEvent = (pickedDate, eventName) => {
  const pickedDateString = formatDate(pickedDate);
  const storedEvents = localStorage.getItem("events");
  let parsedEvents = {};
  if (storedEvents) {
    parsedEvents = JSON.parse(storedEvents);
  }
  parsedEvents[pickedDateString] = parsedEvents[pickedDateString].filter(
    (event) => event.name !== eventName
  );
  localStorage.setItem("events", JSON.stringify(parsedEvents));
  triggerEventUpdate();
};
