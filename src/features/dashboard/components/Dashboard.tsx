import React from "react";
import { RouteComponentProps, navigate, Link } from "@reach/router";
import { users, userValid } from "helpers/auth";
import sha256 from "sha256";
import { localStorage } from "helpers/auth";
import { State } from "App";

type DashboardProps = {
  state: State;
};

type Props = DashboardProps & RouteComponentProps;

const Dashboard: React.FC<Props> = ({ state }) => {
  React.useEffect(() => {
    if (!userValid()) {
      navigate("/Matics/login");
    }
  }, [state.user]);

  const GetUserDash = (userId: string | null) => {
    const user = users.find(user => sha256(user.password) === userId);

    if (user) {
      switch (user.username) {
        case "Naz":
          return <span>Naz</span>;
        case "Safiye":
          return <span>Safiye</span>;
        default:
          return <span>NO USER FOUND</span>;
      }
    }

    return null;
  };

  return (
    <div className="Dashboard WidthContent">
      <span className="Title">
        <h1>Dashboard</h1>
      </span>
      <div className="CardList">
        <ul>
          <Link to="/Matics/equation-generator">
            <li>
              <span>Equation Generator</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="UserDash">{GetUserDash(localStorage("userId"))}</div>
    </div>
  );
};

export { Dashboard };
