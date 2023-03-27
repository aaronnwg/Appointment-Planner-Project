import React from "react";
import {ContactPicker} from "./../contactPicker/ContactPicker.js";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    setDate(value);
  };

  const handleTimeChange = (e) => {
    const value = e.target.value;
    setTime(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter Title" value={title} onChange={handleTitleChange} />
      <ContactPicker contacts={contacts} setContact={setContact} />
      <input type="date" placeholder="Enter date"  value={date} min={getTodayString} onChange={handleDateChange}   />
      <input type="time" placeholder="Enter time"  value={time} onChange={handleTimeChange} />
      <input type="submit" value="Submit" />
    </form>
  );
};
