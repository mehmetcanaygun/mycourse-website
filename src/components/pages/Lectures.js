import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";

const Lectures = () => {
  return (
    <div className="lectures-page">
      <Header title={"Lectures"} />
      <div className="navigation">
        <Link to="/">Home</Link>&nbsp;&middot;&nbsp;
        <Link to="/about">Lectures</Link>
      </div>
      <div className="page-wrapper">
        <h1 className="page-title">Lorem, ipsum.</h1>
        <p className="page-paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum porro,
          neque et cupiditate aut reprehenderit odit quidem at alias tempore.
        </p>
        <div className="lectures-page__lectures">
          <Link
            to="/maths"
            style={{
              background:
                "url(./img/maths-link-bg.jpg) no-repeat center center/cover"
            }}
          >
            Maths
          </Link>
          <Link
            to="/physics"
            style={{
              background:
                "url(./img/physics-link-bg.jpg) no-repeat center center/cover"
            }}
          >
            Physics
          </Link>
          <Link
            to="/chemistry"
            style={{
              background:
                "url(./img/chemistry-link-bg.jpg) no-repeat center center/cover"
            }}
          >
            Chemistry
          </Link>
          <Link
            to="/biology"
            style={{
              background:
                "url(./img/biology-link-bg.jpg) no-repeat center center/cover"
            }}
          >
            Biology
          </Link>
          <Link
            to="/literature"
            style={{
              background:
                "url(./img/literature-link-bg.jpg) no-repeat center center/cover"
            }}
          >
            Literature
          </Link>
          <Link
            to="/geography"
            style={{
              background:
                "url(./img/geography-link-bg.jpg) no-repeat center center/cover"
            }}
          >
            Geography
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lectures;
