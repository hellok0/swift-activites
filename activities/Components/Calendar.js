import React from "react";
import { DatePicker } from "@mui/lab";
import { TextField } from "@mui/material";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h2>Calendar</h2>
      <DatePicker
        label="Select Date"
        value={selectedDate}
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </div>
  );
};

export default Calendar;
