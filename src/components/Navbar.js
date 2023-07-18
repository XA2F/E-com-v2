import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsHouseDoorFill,
  BsInfoCircleFill,
  BsChatDotsFill,
} from 'react-icons/bs';
// import logo from '../public/man-in-brown.webp';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <img src={logo} alt="Fancy Pants Logo" /> */}
        <span>Fancy Pants</span>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">
            <BsHouseDoorFill />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <BsInfoCircleFill />
            About
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <BsChatDotsFill />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
