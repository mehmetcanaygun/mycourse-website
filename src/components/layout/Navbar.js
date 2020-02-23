import React, { useState } from "react";
import { Link } from "react-router-dom";

const body = document.getElementsByTagName("body");

const Navbar = () => {
  const [btnToggled, setBtnToggled] = useState(false);

  // if (btnToggled) {
  //   body[0].style.overflowY = "hidden";
  // } else {
  //   body[0].style.overflowY = "visible";
  // }

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
            <Link to="/">Home</Link>
          </li>
          <li className="navbar__nav__list__item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="navbar__nav__list__item">
            <Link to="/lectures">Lectures</Link>
            <ul className="sublist">
              <li>
                <Link to="/maths">Maths</Link>
              </li>
              <li>
                <Link to="/physics">Physics</Link>
              </li>
              <li>
                <Link to="/chemistry">Chemistry</Link>
              </li>
              <li>
                <Link to="/biology">Biology</Link>
              </li>
              <li>
                <Link to="/literature">Literature</Link>
              </li>
              <li>
                <Link to="/geography">Geography</Link>
              </li>
            </ul>
          </li>
          <li className="navbar__nav__list__item">
            <Link to="/tutors">Tutors</Link>
          </li>
          <li className="navbar__nav__list__item">
            <Link to="/classrooms">Classrooms</Link>
            <ul className="sublist">
              <li>
                <Link to="/standard-classrooms">Standard Classrooms</Link>
              </li>
              <li>
                <Link to="/conferance-rooms">Conferance Rooms</Link>
              </li>
              <li>
                <Link to="/labs">Labs</Link>
              </li>
            </ul>
          </li>
          <li className="navbar__nav__list__item">
            <Link to="/galery">Galery</Link>
          </li>
          <li className="navbar__nav__list__item">
            <Link to="/contact">Contact</Link>
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
