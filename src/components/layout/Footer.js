import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <footer className="footer container">
      <div className="footer__logo">
        <div className="footer__logo__content">
          <p className="footer__logo__title">
            <span>My</span>Course
          </p>
          <img src="./img/logo.png" alt="mycourse" width="80" />
          <div className="footer__logo__sm">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter-square"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram-square"></i>
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube-square"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__links">
        <div className="footer__links__content">
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => {
                  scrollTop();
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => {
                  scrollTop();
                }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/lectures"
                onClick={() => {
                  scrollTop();
                }}
              >
                Lectures
              </Link>
            </li>
            <li>
              <Link
                to="/tutors"
                onClick={() => {
                  scrollTop();
                }}
              >
                Tutors
              </Link>
            </li>
            <li>
              <Link
                to="/classrooms"
                onClick={() => {
                  scrollTop();
                }}
              >
                Classrooms
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                onClick={() => {
                  scrollTop();
                }}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => {
                  scrollTop();
                }}
              >
                Contact
              </Link>
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
          <a
            href="https://github.com/mehmetcanaygun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./img/author-logo.png" alt="site-author" height="30" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
