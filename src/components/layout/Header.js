import React from "react";

const Header = ({
  title,
  imgPath = "url(./img/header-bg.jpg) no-repeat center center/cover"
}) => {
  return (
    <div className="header" style={{ background: imgPath }}>
      {title}
    </div>
  );
};

export default Header;
