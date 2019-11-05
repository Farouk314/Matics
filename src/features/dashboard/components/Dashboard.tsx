import React from "react";
import { RouteComponentProps, navigate, Link } from "@reach/router";
import { users, userValid } from "helpers/auth";
import sha256 from "sha256";
import { localStorage } from "helpers/auth";
import { State } from "App";
import { useSpring, animated } from "react-spring";

type DashboardProps = {
  state: State;
};

type Props = DashboardProps & RouteComponentProps;

const Dashboard: React.FC<Props> = ({ state }) => {
  const [hovered1, setHovered1] = React.useState(false);
  const [hovered2, setHovered2] = React.useState(false);
  const contentProps1 = useSpring({
    // opacity: hovered ? 1 : 0,
    // marginTop: hovered ? 0 : -500
    height: hovered1 ? "100%" : "80%",
    width: hovered1 ? "100%" : "80%",
    fontSize: hovered1 ? "1.6rem" : "1.3rem"
  });

  const contentProps2 = useSpring({
    // opacity: hovered ? 1 : 0,
    // marginTop: hovered ? 0 : -500
    height: hovered2 ? "100%" : "80%",
    width: hovered2 ? "100%" : "80%",
    fontSize: hovered2 ? "1.6rem" : "1.3rem"
  });

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
            <li onMouseEnter={() => setHovered1(true)} onMouseLeave={() => setHovered1(false)}>
              <animated.div className="Inner" style={contentProps1}>
                <span>Equation Generator</span>
              </animated.div>
            </li>
          </Link>
          <Link to="/Matics/equation-generator">
            <li onMouseEnter={() => setHovered2(true)} onMouseLeave={() => setHovered2(false)}>
              <animated.div className="Inner" style={contentProps2}>
                <span>Equation Generator</span>
              </animated.div>
            </li>
          </Link>
        </ul>
      </div>
      <div className="UserDash">{GetUserDash(localStorage("userId"))}</div>
    </div>
  );
};

export { Dashboard };
