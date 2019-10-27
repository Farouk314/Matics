import React from "react";
import "../styles/header.scss";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <header className="AppHeader">
      <div className="HeaderContent WidthContent">
        <Link to="/Matics">
          <span style={{ cursor: "pointer" }}>Matics</span>
        </Link>
        <Link to="/Matics/login">
          <button className="Btn Transparent Primary">Log In</button>
        </Link>
      </div>
    </header>
  );
};

export { Header };
