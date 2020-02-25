import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";

const Classrooms = () => {
  return (
    <div className="classrooms-page">
      <Header title={"Classrooms"} />
      <div className="navigation">
        <Link to="/">Home</Link>&nbsp;&middot;&nbsp;
        <Link to="/classrooms">Classrooms</Link>
      </div>
      <div className="page-wrapper">asd</div>
    </div>
  );
};

export default Classrooms;
