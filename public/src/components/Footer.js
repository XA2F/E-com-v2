import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h4>Our services</h4>
          <ul>
            <li>
              <a href="#">Clothing</a>
            </li>
            <li>
              <a href="#">Warehouse Pickup</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact us</h4>
          <div className="social-media">
            <a href="https://www.facebook.com/">
              <BsFacebook />
            </a>
            <a href="https://www.instagram.com/">
              <BsInstagram />
            </a>
            <a href="https://twitter.com/?lang=en">
              <BsTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
