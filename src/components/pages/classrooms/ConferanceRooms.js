import React from "react";
import { Link } from "react-router-dom";
import Header from "../../layout/Header";

const ConferanceRooms = () => {
  return (
    <div className="conferance-rooms-page">
      <Header
        title={"Conferance Rooms"}
        imgPath={
          "url(./img/conferance-room-header-bg.jpg) no-repeat center center/cover"
        }
      />
      <div className="navigation">
        <Link to="/">Home</Link>&nbsp;&middot;&nbsp;
        <Link to="/classrooms">Classrooms</Link>&nbsp;&middot;&nbsp;
        <Link to="/conferance-rooms">Conferance Rooms</Link>
      </div>
      <div className="page-wrapper">
        <div className="page-image">
          <img src="./img/conferance-room-header-bg.jpg" alt="page-img" />
        </div>
        <hr />
        <h1 className="page-title">Lorem ipsum dolor sit.</h1>
        <div className="page-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          quidem voluptates dolorem aut, expedita adipisci? Aspernatur, quaerat,
          aut excepturi ipsa beatae odit earum magnam reprehenderit ipsam iste
          repellendus dignissimos at omnis error quibusdam in animi nobis
          officia corrupti perferendis ex nam accusantium soluta deleniti! Aut
          omnis possimus cum inventore illo eius exercitationem, vel nisi autem
          esse, sunt nam accusantium quos repellat porro ad dicta iste quia
          soluta vitae commodi saepe!
        </div>
        <hr />
        <ul className="page-list">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ul>
      </div>
    </div>
  );
};

export default ConferanceRooms;
