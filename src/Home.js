import React from "react";
import { Link } from "react-router-dom";

import "./Home.css"; // Import your custom styles for the Home component

const Home = () => {
  return (
    <div className="background-image"> {/* Updated class name */}
      
      <div className="content">
        <h1>Welcome to [Hotel Name]!</h1>
        <p>We are a luxury hotel located in the heart of [City Name]. We offer a variety of amenities and services to make your stay as comfortable and enjoyable as possible.</p>
        <p>Whether you are here for business or pleasure, we have something to offer everyone. Our spacious rooms and suites are equipped with all the latest amenities, and our staff is always happy to go the extra mile to make sure you have a memorable stay.</p>
        <Link to="/Reservation">Book your room today!</Link>
      </div>
    </div>
  );
};

export default Home;