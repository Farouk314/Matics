import React from "react";
import { Link } from "@reach/router";
import { Action, State } from "App";
import { UserMenu } from "./userMenu";

type HeaderProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type Props = HeaderProps;

const Header: React.FC<Props> = ({ state, dispatch }) => {
  return (
    <header className="AppHeader">
      <div className="HeaderContent WidthContent">
        <Link to="/Matics">
          <span style={{ cursor: "pointer" }}>Matics</span>
        </Link>
        <div className="UserPanel">
          {state.user.userId ? (
            <UserMenu state={state} dispatch={dispatch} />
          ) : (
            <Link to="/Matics/login">
              <button className="Btn Primary">Log In</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export { Header };
