import React from "react";

const Header = () => {
  return (
    <header className="align-items-center">
      <div className="align-items-center">
        <img src="./assets/images/logo.png" alt="" className="app-logo" />
        <span id="app-title">Currency Converter</span>
      </div>
    </header>
  );
};

export default Header;
