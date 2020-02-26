import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";

const Contact = () => {
  return (
    <div className="contact-page">
      <Header title={"Contact"} />
      <div className="navigation">
        <Link to="/">Home</Link>&nbsp;&middot;&nbsp;
        <Link to="/contact">Contact</Link>
      </div>
      <div className="page-wrapper">
        <h1 className="page-title">Lorem, ipsum.</h1>
        <p className="page-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          doloribus, et fuga id distinctio tenetur aliquid nihil quod ipsa
          beatae quas quidem placeat natus ea fugiat modi pariatur cumque ab
          aperiam rem quis reiciendis quos! Tempora consectetur eius autem?
          Labore neque recusandae totam laudantium, quasi voluptate nostrum rem?
          Eaque, labore?
        </p>
        <ul className="contact-page__list">
          <li>
            <strong>Address</strong>: 123 XYZ St, Courseland, MC 01234
          </li>
          <li>
            <strong>Phone</strong>: 555 55 555
          </li>
          <li>
            <strong>Fax</strong>: 444 44 444
          </li>
          <li>
            <strong>Email</strong>: info@mycourse.com
          </li>
        </ul>
        <div className="contact-page__form-map">
          <div className="form">
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="input-style" />
            </div>
            <div className="input-group">
              <label htmlFor="surname">Surname</label>
              <input type="text" className="input-style" />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <input type="number" className="input-style" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="input-style" />
            </div>
            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea rows="10" className="input-style"></textarea>
            </div>
            <div className="input-group">
              <input type="button" className="input-style" value="Send" />
            </div>
          </div>
          <div className="map">
            <img src="./img/map.jpg" alt="map" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
