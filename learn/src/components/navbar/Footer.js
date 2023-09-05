import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">Logo</div>
      <div className="footer-nav">
        <div className="nav-block">
          <h4>Product</h4>
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="nav-block">
          <h4>Resource</h4>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">User guides</a>
            </li>
            <li>
              <a href="#">Webinars</a>
            </li>
          </ul>
        </div>
        <div className="nav-block">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-subscribe">
        <h4>Subscribe</h4>
      </div>
      <div className="footer-privacy">
        <h4>Privacy</h4>
      </div>
      <div className="footer-social">
        <h4>Follow Us</h4>
      </div>
    </footer>
  );
};

export default Footer;
