import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";

const About = () => {
  return (
    <div className="about-page">
      <Header title={"About Us"} />
      <div className="navigation">
        <Link to="/">Home</Link>&nbsp;&middot;&nbsp;
        <Link to="/about">About Us</Link>
      </div>
      <div className="page-wrapper">
        <h1 className="page-title">Lorem, ipsum dolor.</h1>
        <p className="page-paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab fugit
          laboriosam sequi pariatur. Perferendis adipisci repellendus tenetur
          excepturi itaque porro reprehenderit esse blanditiis incidunt voluptas
          recusandae atque officia laudantium ullam nam commodi, animi odit ut
          odio perspiciatis. Temporibus ex praesentium assumenda reprehenderit.
          Saepe, debitis ipsa aut quo dignissimos molestiae fugiat?
        </p>

        <h1 className="page-title">Lorem, ipsum dolor.</h1>
        <p className="page-paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab fugit
          laboriosam sequi pariatur. Perferendis adipisci repellendus tenetur
          excepturi itaque porro reprehenderit esse blanditiis incidunt voluptas
          recusandae atque officia laudantium ullam nam commodi, animi odit ut
          odio perspiciatis. Temporibus ex praesentium assumenda reprehenderit.
          Saepe, debitis ipsa aut quo dignissimos molestiae fugiat?
        </p>

        <h1 className="page-title">Lorem, ipsum dolor.</h1>
        <p className="page-paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab fugit
          laboriosam sequi pariatur. Perferendis adipisci repellendus tenetur
          excepturi itaque porro reprehenderit esse blanditiis incidunt voluptas
          recusandae atque officia laudantium ullam nam commodi, animi odit ut
          odio perspiciatis. Temporibus ex praesentium assumenda reprehenderit.
          Saepe, debitis ipsa aut quo dignissimos molestiae fugiat?
        </p>
      </div>
    </div>
  );
};

export default About;
