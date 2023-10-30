import React from "react";
import { Link } from "react-router-dom";

import "./Home.css"; // Import your custom styles for the Home component

const Home = () => {
  return (
    <div className="background-image">
      
      <div className="content">
        <h1>Welcome to ConforTech !</h1>
        <p>We are a luxury hotel located in the heart of Houston. We offer a variety of amenities and services to make your stay as comfortable and enjoyable as possible.</p>
        <p>Whether you are here for business or pleasure, we have something to offer everyone. Our spacious rooms and suites are equipped with all the latest amenities, and our staff is always happy to go the extra mile to make sure you have a memorable stay.

        </p>
       

        <Link to="/Reservation">Book your room today!</Link>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>Our Staff</h2>
        <p> Innocent Junior Opara</p>
        <p> Gbenro Charles Opeke</p>
        <p> Ozoemena Anyaegbu</p>
        <p> Toochukwu Juliet Mgbole</p>
        <p> Muhammad Ghazi</p>
        <p> Moses Chism III</p>
      </div>
    </div>
  );
};

export default Home;