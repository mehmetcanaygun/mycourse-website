import React from "react";
import { Link } from "react-router-dom";
import Header from "../../layout/Header";

const Literature = () => {
  return (
    <div className="literature-page">
      <Header
        title={"Literature"}
        imgPath={
          "url(./img/literature-header-bg.jpg) no-repeat center center/cover"
        }
      />
      <div className="navigation">
        <Link to="/">Home</Link>&nbsp;&middot;&nbsp;
        <Link to="/lectures">Lectures</Link>&nbsp;&middot;&nbsp;
        <Link to="/literature">Literature</Link>
      </div>
      <div className="page-wrapper">
        <h1 className="page-title">Lorem ipsum dolor sit.</h1>
        <p className="page-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          error voluptas dolorum quod. Deserunt, error. Ipsa sed architecto,
          iure totam expedita doloremque laboriosam similique omnis pariatur
          iste numquam, voluptas quasi quia, eligendi impedit nemo sint
          asperiores! Illo debitis vitae cupiditate iure pariatur esse quibusdam
          dolores, dolor numquam dignissimos! Totam repudiandae iure eos eaque
          quasi dolor quibusdam vel molestiae distinctio in.
        </p>
        <hr />
        <div className="page-cards-wrapper">
          <div className="page-card" style={{ backgroundColor: "pink" }}>
            <div className="page-card-img">
              <i className="fas fa-chalkboard"></i>
            </div>
            <h3 className="page-card-title">Lorem, ipsum.</h3>
            <p className="page-card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="page-card" style={{ backgroundColor: "skyblue" }}>
            <div className="page-card-img">
              <i className="fas fa-book-open"></i>
            </div>
            <h3 className="page-card-title">Lorem, ipsum.</h3>
            <p className="page-card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="page-card" style={{ backgroundColor: "olive" }}>
            <div className="page-card-img">
              <i className="fas fa-school"></i>
            </div>
            <h3 className="page-card-title">Lorem, ipsum.</h3>
            <p className="page-card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="page-card" style={{ backgroundColor: "yellow" }}>
            <div className="page-card-img">
              <i className="fas fa-microscope"></i>
            </div>
            <h3 className="page-card-title">Lorem, ipsum.</h3>
            <p className="page-card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <hr />
        <h1 className="page-title">Lorem, ipsum.</h1>
        <ul className="page-list">
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, ea!
          </li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed atque
            veniam saepe.
          </li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, ea!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, ea!
          </li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed atque
            veniam saepe.
          </li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, ea!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Literature;
