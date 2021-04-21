import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Appnav = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Appnav;
