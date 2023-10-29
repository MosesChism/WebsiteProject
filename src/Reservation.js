import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Reservation = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleReservation = () => {
    if (selectedDate) {
      // Perform reservation logic here, for example, send a request to the server
      console.log('Reservation made for:', selectedDate);
      // Reset selected date after reservation
      setSelectedDate(null);
    } else {
      alert('Please select a date to make a reservation.');
    }
  };

  return (
    <div className="reservation-container">
      <h2>Make a Reservation</h2>
      <DatePicker selected={selectedDate} onChange={handleDateChange} />
      <button onClick={handleReservation}>Make Reservation</button>
    </div>
  );
};

export default Reservation;
