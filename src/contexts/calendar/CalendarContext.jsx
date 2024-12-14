import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1); // Months are 0-indexed
  const [pickedDate, setPickedDate] = useState(new Date());

  return (
    <CalendarContext.Provider
      value={{ year, setYear, month, setMonth, pickedDate, setPickedDate }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
