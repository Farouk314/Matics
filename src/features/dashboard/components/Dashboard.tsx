import React from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import "../styles/dashboard.scss";
import { Polynomial } from "features/polynomial/components/polynomial";
import { generateEasyQuadratic, TPolynomial } from "helpers/myMaths";
import { users, userValid } from "helpers/auth";
import sha256 from "sha256";
import { localStorage } from "helpers/auth";

type DashboardProps = {};

type Props = DashboardProps & RouteComponentProps;

const Dashboard: React.FC<Props> = () => {
  const [quadratic, setQuadratic] = React.useState<TPolynomial>({
    answers: [],
    coefficients: []
  });

  React.useEffect(() => {
    if (!userValid()) {
      navigate("/Matics/login");
    }
    setQuadratic(generateEasyQuadratic());
  }, []);

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
