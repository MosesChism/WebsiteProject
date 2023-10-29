import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './App.css';





function Cn() {
  return (
    <div className="App">
     

      <header>
        <h1>Check In</h1>
        <p>Welcome, Please Check In </p>
      </header>

      <Form className="CI">
        <Row className="Cname">
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Name </Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formDays">
            <Form.Label> How many days are you staying? </Form.Label>
            <Form.Control type="number" placeholder="Enter Number" />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <header>
        <h1>Check Out</h1>
        <p>Ready To Check Out!!</p>
      </header>

      <Form className="CI">
        <Row className="Cname">
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Name </Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
    
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  
    </div>
    
  );
}


export default Cn;