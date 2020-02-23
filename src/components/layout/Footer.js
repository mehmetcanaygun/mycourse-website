import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__logo">
        <div className="footer__logo__content">
          <p className="footer__logo__title">
            <span>My</span>Course
          </p>
          <img src="./img/logo.png" alt="mycourse" width="80" />
          <div className="footer__logo__sm">
            <a href="https://www.facebook.com/" target="_blank">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="fab fa-instagram-square"></i>
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <i className="fab fa-youtube-square"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__links">
        <div className="footer__links__content">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/lectures">Lectures</Link>
            </li>
            <li>
              <Link to="/tutors">Tutors</Link>
            </li>
            <li>
              <Link to="/classrooms">Classrooms</Link>
            </li>
            <li>
              <Link to="/galery">Galery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__contact">
        <div className="footer__contact__content">
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i> 123 XYZ St, Courseland,
              MC 01234
            </li>
            <li>
              <i className="fas fa-phone-alt"></i> 555 55 555
            </li>
            <li>
              <i className="fas fa-envelope"></i> info@mycourse.com
            </li>
          </ul>
          <img src="./img/author-logo.png" alt="site-author" height="30" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
