import React from "react";
import "../styles/header.scss";
import { Link, navigate } from "@reach/router";
import { userLoggedIn } from "helpers/auth";
import { User } from "react-feather";
import { Action, State } from "App";

type HeaderProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type Props = HeaderProps;

const Header: React.FC<Props> = ({ state, dispatch }) => {
  const handleClick = () => {
    if (userLoggedIn) {
      dispatch({ type: "SET_USER_LOGGED_OUT" });
      navigate("/Matics/login");
    } else {
      navigate("/Matics/login");
    }
  };
  return (
    <header className="AppHeader">
      <div className="HeaderContent WidthContent">
        <Link to="/Matics">
          <span style={{ cursor: "pointer" }}>Matics</span>
        </Link>
        <div className="UserPanel">
          {state.user.userId && (
            <button className="Btn Transparent Primary WithIcon LightGrey">
              <User size={25} className="Icon" color="#000" />
              {state.user.userName}
            </button>
          )}
          <button className="Btn Transparent Primary" onClick={handleClick}>
            {state.user.userId ? "Log Out" : "Log In"}
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };
