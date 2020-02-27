import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [btnToggled, setBtnToggled] = useState(false);
  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <nav className="navbar">
      <div className="navbar__phone">
        <button>
          <i className="fas fa-phone-alt"></i> 555 55 555
        </button>
      </div>
      <div className="navbar__nav">
        <Link
          to="/"
          className="navbar__nav__logo"
          onClick={() => {
            scrollTop();
          }}
        >
          <img src="./img/logo.png" alt="mycourse" width="60" />
        </Link>
        <ul
          className={
            btnToggled ? "navbar__nav__list toggled" : "navbar__nav__list"
          }
        >
          <li className="navbar__nav__list__item">
            <Link
              to="/"
              onClick={() => {
                setBtnToggled(false);
                scrollTop();
              }}
            >
              Home
            </Link>
          </li>
          <li className="navbar__nav__list__item">
            <Link
              to="/about"
              onClick={() => {
                setBtnToggled(false);
                scrollTop();
              }}
            >
              About Us
            </Link>
          </li>
          <li className="navbar__nav__list__item">
            <Link
              to="/lectures"
              onClick={() => {
                setBtnToggled(false);
                scrollTop();
              }}
            >
              Lectures
            </Link>
            <ul className="sublist">
              <li>
                <Link
                  to="/maths"
                  onClick={() => {
                    setBtnToggled(false);
                    scrollTop();
                  }}
                >
                  Maths
                </Link>
              </li>
              <li>
                <Link
                  to="/physics"
                  onClick={() => {
                    setBtnToggled(false);
                    scrollTop();
                  }}
                >
                  Physics
                </Link>
              </li>
              <li>
                <Link
                  to="/chemistry"
                  onClick={() => {
                    setBtnToggled(false);
                    scrollTop();
                  }}
                >
                  Chemistry
                </Link>
              </li>
              <li>
                <Link
                  to="/biology"
                  onClick={() => {
                    setBtnToggled(false);
                    scrollTop();
                  }}
                >
                  Biology
                </Link>
              </li>
              <li>
                <Link
                  to="/literature"
                  onClick={() => {
                    setBtnToggled(false);
                    scrollTop();
                  }}
                >
                  Literature
                </Link>
              </li>
              <li>
                <Link
                  to="/geography"
                  onClick={() => {
                    setBtnToggled(false);
                    scrollTop();
                  }}
                >
                  Geography
                </Link>
              </li>
            </ul>
          </li>
          <li className="navbar__nav__list__item">
            <Link
              to="/tutors"
              onClick={() => {
                setBtnToggled(false);
                scrollTop();
              }}
            >
              Tutors
            </Link>
          </li>
          <li className="navbar__nav__list__item">
            <Link
              to="/classrooms"
              onClick={() => {
                setBtnToggled(false);
                scrollTop();
              }}
            >
              Classrooms
            </Link>
            <ul className="sublist">
              <li>
                <Link
                  to="/standard-classrooms"
                  onClick={() => {
                    setBtnToggled(false);
                    scrollTop();
                  }}
                >
                  Standard Classrooms
                </Link>
              </li>
              <li>
                <Link
                  to="/conferance-rooms"
                  onClick={() => {
                    setBtnToggled(false);
                    scrollTop();
                  }}
                >
                  Conferance Rooms
                </Link>
              </li>
              <li>
                <Link
                  to="/labs"
                  onClick={() => {
                    setBtnToggled(false);
                    scrollTop();
                  }}
                >
                  Labs
                </Link>
              </li>
            </ul>
          </li>
          <li className="navbar__nav__list__item">
            <Link
              to="/gallery"
              onClick={() => {
                setBtnToggled(false);
                scrollTop();
              }}
            >
              Gallery
            </Link>
          </li>
          <li className="navbar__nav__list__item">
            <Link
              to="/contact"
              onClick={() => {
                setBtnToggled(false);
                scrollTop();
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          className={
            btnToggled
              ? "navbar__nav__hamburger-btn toggled"
              : "navbar__nav__hamburger-btn"
          }
          onClick={() => {
            setBtnToggled(!btnToggled);
          }}
        >
          <div className="top"></div>
          <div className="middle"></div>
          <div className="bottom"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
