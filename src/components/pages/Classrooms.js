import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";

const Classrooms = () => {
  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="classrooms-page">
      <Header title={"Classrooms"} />
      <div className="navigation">
        <Link
          to="/"
          onClick={() => {
            scrollTop();
          }}
        >
          Home
        </Link>
        &nbsp;&middot;&nbsp;
        <Link
          to="/classrooms"
          onClick={() => {
            scrollTop();
          }}
        >
          Classrooms
        </Link>
      </div>
      <div className="page-wrapper">
        <h2 className="page-title">Lorem, ipsum.</h2>
        <p className="page-paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum porro,
          neque et cupiditate aut reprehenderit odit quidem at alias tempore.
        </p>
        <div className="classrooms-page__classrooms">
          <Link
            to="/standard-classrooms"
            className="classroom"
            style={{
              background:
                "url(./img/classroom-bg.jpg) no-repeat center center/cover"
            }}
            onClick={() => {
              scrollTop();
            }}
          >
            <h2>Standard Classrooms</h2>
          </Link>

          <Link
            to="/conferance-rooms"
            className="classroom"
            style={{
              background:
                "url(./img/conferance-room-bg.jpg) no-repeat center center/cover"
            }}
            onClick={() => {
              scrollTop();
            }}
          >
            <h2>Conferance Rooms</h2>
          </Link>

          <Link
            to="/labs"
            className="classroom"
            style={{
              background: "url(./img/labs-bg.jpg) no-repeat center center/cover"
            }}
            onClick={() => {
              scrollTop();
            }}
          >
            <h2>Laboratories</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Classrooms;
