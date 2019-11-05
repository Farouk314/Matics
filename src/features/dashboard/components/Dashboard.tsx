import React from "react";
import { RouteComponentProps, navigate, Link } from "@reach/router";
import { users, userValid } from "helpers/auth";
import sha256 from "sha256";
import { localStorage } from "helpers/auth";
import { State } from "App";
import { useSpring, animated } from "react-spring";
import { Cpu, Activity } from "react-feather";

type DashboardProps = {
  state: State;
};

type Props = DashboardProps & RouteComponentProps;

const calc = (x: any, y: any) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x: any, y: any, s: any) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Dashboard: React.FC<Props> = ({ state }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  const [hovered1, setHovered1] = React.useState(false);
  const [hovered2, setHovered2] = React.useState(false);
  const contentProps1 = useSpring({
    // opacity: hovered ? 1 : 0,
    // marginTop: hovered ? 0 : -500
    height: hovered1 ? "100%" : "80%",
    width: hovered1 ? "100%" : "80%"
  });

  const contentProps2 = useSpring({
    // opacity: hovered ? 1 : 0,
    // marginTop: hovered ? 0 : -500
    height: hovered2 ? "100%" : "80%",
    width: hovered2 ? "100%" : "80%"
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
      <animated.div
        className="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        // use below to ignore interpolate type - it is wrong
        // https://stackoverflow.com/questions/56530295/react-spring-interpolate-function-not-work-with-typescript
        // @ts-ignore
        style={{ transform: props.xys.interpolate(trans) }}
      />
      <span className="Title">
        <h1>Dashboard</h1>
      </span>
      <div className="CardList">
        <ul>
          <Link to="/Matics/equation-generator">
            <li onMouseEnter={() => setHovered1(true)} onMouseLeave={() => setHovered1(false)}>
              <animated.div className="Inner" style={contentProps1}>
                <div className="Top">
                  <Cpu size={30} color="#fff" />
                  <Activity size={30} color="#fff" />
                </div>
                <div className="Bottom">Equation Generator</div>
              </animated.div>
            </li>
          </Link>
          <Link to="/Matics/equation-generator">
            <li onMouseEnter={() => setHovered2(true)} onMouseLeave={() => setHovered2(false)}>
              <animated.div className="Inner" style={contentProps2}>
                <Cpu size={20} color="#fff" />
                <span>Equation Generator</span>
              </animated.div>
            </li>
          </Link>
          <Link to="/Matics/equation-generator">
            <li></li>
          </Link>
        </ul>
      </div>
      <div className="UserDash">{GetUserDash(localStorage("userId"))}</div>
    </div>
  );
};

export { Dashboard };
