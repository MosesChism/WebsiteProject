import React, { useState } from 'react'; 
import DatePicker from 'react-datepicker';
import'react-datepicker/dist/react-datepicker.css';



const Reservation = () => {
  const [guestId, setGuestId] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleDateChange = (date) => {
    if (date.name === 'checkInDate') {
      setCheckInDate(date);
    } else if (date.name === 'checkOutDate') {
      setCheckOutDate(date);
    }
  };

  const handleReservation = () => {
    if (guestId && roomNumber && checkInDate && checkOutDate) {
      // Perform reservation logic here, for example, send a request to the server
      console.log('Reservation made for:', {
        guestId,
        roomNumber,
        checkInDate,
        checkOutDate,
        totalPrice,
      });
      // Reset state after reservation
      setGuestId('');
      setRoomNumber('');
      setCheckInDate(null);
      setCheckOutDate(null);
      setTotalPrice(0);
    } else {
      alert('Please complete all required fields to make a reservation.');
    }
  };

  return (
    <div className="reservation-container">
      <h2>Make a Reservation</h2>
      <label>Guest ID:</label>
      <input type="text" value={guestId} onChange={(event) => setGuestId(event.target.value)} />
      <label>Room Number:</label>
      <input type="number" value={roomNumber} onChange={(event) => setRoomNumber(event.target.value)} />

      <label>Check-In Date:</label>
      <DatePicker
        selected={checkInDate}
        onChange={(date) => handleDateChange({ name: 'checkInDate', date })}
      />

      <label>Check-Out Date:</label>
      <DatePicker
        selected={checkOutDate}
        onChange={(date) => handleDateChange({ name: 'checkOutDate', date })}
      />

      <label>Total Price:</label>
      <input
        type="number"
        value={totalPrice}
        onChange={(event) => setTotalPrice(event.target.value)}
      />

      <button onClick={handleReservation}>Make Reservation</button>
    </div>
  );
};

export default Reservation;