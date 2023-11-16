import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Cn = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);

  const handleCheckIn = (e) => {
    e.preventDefault();
    console.log('Check-in Date:', checkInDate);
    console.log('Check-in Time:', checkInTime);
    // Perform check-in logic here
  };

  const handleCheckOut = (e) => {
    e.preventDefault();
    console.log('Check-out Date:', checkOutDate);
    console.log('Check-out Time:', checkOutTime);
    // Perform check-out logic here
  };

  return (
    <div>
      <header>
        <h1>Check In</h1>
        <p>Welcome, Please Check In</p>
      </header>

      <Form className="CI" onSubmit={handleCheckIn}>
        <Row className="Cname">
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formDays">
            <Form.Label>How many days are you staying?</Form.Label>
            <Form.Control type="number" placeholder="Enter Number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formCheckInDate">
            <Form.Label>Check-in Date</Form.Label>
            <DatePicker selected={checkInDate} onChange={(date) => setCheckInDate(date)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formCheckInTime">
            <Form.Label>Check-in Time</Form.Label>
            <Form.Control type="time" onChange={(e) => setCheckInTime(e.target.value)} />
          </Form.Group>
        </Row>
            <br></br>
        <Button variant="primary" type="submit">
          Check In
        </Button>
      </Form>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
      <header>
        <h1>Check Out</h1>
        <p>Ready To Check Out!!</p>
      </header>

      <Form className="CI" onSubmit={handleCheckOut}>
        <Row className="Cname">
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formCheckOutDate">
            <Form.Label>Check-out Date</Form.Label>
            <DatePicker selected={checkOutDate} onChange={(date) => setCheckOutDate(date)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formCheckOutTime">
            <Form.Label>Check-out Time</Form.Label>
            <Form.Control type="time" onChange={(e) => setCheckOutTime(e.target.value)} />
          </Form.Group>
        </Row>
        <br></br>
        <Button variant="primary" type="submit">
          Check Out
        </Button>
      </Form>

      
    </div>
  );
};

export default Cn;
