import React from "react";

const Header = () => {
  return (
    <header className="align-items-center">
      <div className="align-items-center">
        <img src="./assets/images/logo.png" alt="" className="app-logo" />
        <span id="app-title">
          <div className="text--main-title-top">Currency</div>
          <div className="text--light-blue text--main-title-bottom">Converter</div>
        </span>
      </div>
    </header>
  );
};

export default Header;
