import React from "react";
import "../styles/header.scss";

const Header = () => {
  return (
    <header className="AppHeader">
      <div className="HeaderContent WidthContent">
        <span>Blabamatics</span>
        <button className="Btn Transparent Primary">Log In</button>
      </div>
    </header>
  );
};

export { Header };
