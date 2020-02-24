import React from "react";

const Header = ({ title }) => {
  return (
    <div
      className="header"
      style={{
        background: "url(./img/header-bg.jpg) no-repeat center center/cover"
      }}
    >
      {title}
    </div>
  );
};

export default Header;
