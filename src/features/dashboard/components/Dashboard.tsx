import React from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import { Polynomial } from "features/polynomial/components/polynomial";
import { generateEasyQuadratic, TPolynomial } from "helpers/myMaths";
import { users, userValid } from "helpers/auth";
import sha256 from "sha256";
import { localStorage } from "helpers/auth";
import { State } from "App";

type DashboardProps = {
  state: State;
};

type Props = DashboardProps & RouteComponentProps;

const Dashboard: React.FC<Props> = ({ state }) => {
  const [quadratic, setQuadratic] = React.useState<TPolynomial>({
    answers: [],
    coefficients: []
  });

  React.useEffect(() => {
    setQuadratic(generateEasyQuadratic());
  }, []);

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
  };

  return (
    <div className="Dashboard WidthContent">
      <span className="Title">
        <h1>Dashboard</h1>
      </span>
      <div className="EqnGenerator">
        <div className="Eqn">
          {quadratic.coefficients.length > 0 && (
            <Polynomial order={2} coefficients={quadratic.coefficients} answer={0} />
          )}
        </div>
        <div className="BtnContainer">
          <button className="Btn Grey" onClick={() => setQuadratic(generateEasyQuadratic())}>
            Generate New Equation
          </button>
        </div>
      </div>
      <div className="UserDash">{GetUserDash(localStorage("userId"))}</div>
    </div>
  );
};

export { Dashboard };
