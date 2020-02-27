import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [btnToggled, setBtnToggled] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__phone">
        <button>
          <i className="fas fa-phone-alt"></i> 555 55 555
        </button>
      </div>
      <div className="navbar__nav">
        <Link to="/" className="navbar__nav__logo">
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
                  }}
                >
                  Labs
                </Link>
              </li>
            </ul>
          </li>
          <li className="navbar__nav__list__item">
            <Link
              to="/galery"
              onClick={() => {
                setBtnToggled(false);
              }}
            >
              Galery
            </Link>
          </li>
          <li className="navbar__nav__list__item">
            <Link
              to="/contact"
              onClick={() => {
                setBtnToggled(false);
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
