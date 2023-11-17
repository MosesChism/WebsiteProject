import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Reservation from './Reservation';
import Guess from './Guess';
import Cn from './Cn';
import AboutUs from './AboutUs';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavItem from 'react-bootstrap/esm/NavItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Home.css';


function App() {
  return (
    
    <BrowserRouter>
     <div className="App">
      <Navbar  expand="lg">
        <Container  >
          <Navbar.Brand href="/">Hotel Management</Navbar.Brand>

          
<Navbar.Toggle
 
aria-controls="basic-navbar-nav" />

          
<Navbar.Collapse
 
id="basic-navbar-nav">

            
<Nav
 
className="me-auto">

              
<NavItem>


              </NavItem>
              <NavItem>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                 <Link to="/Cn"> CheckIn/CheckOut</Link>
                 <br/>
                  <Link to="/Reservation">Reservations</Link>
                  <br/>
                  <Link to="/Guess">Guest Services</Link>
                  <NavDropdown.Divider />
                  <NavDropdown.Item to="/AboutUs">About Us</NavDropdown.Item>
                </NavDropdown>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container  >
<Link to="/Login">Login</Link>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Cn" element={<Cn/>}/>
        <Route path="/Guess"element={<Guess/>}/>
        <Route path="/Reservation"element={<Reservation/>}/>
        <Route path="/AboutUs"element={<AboutUs/>}/>
      </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;