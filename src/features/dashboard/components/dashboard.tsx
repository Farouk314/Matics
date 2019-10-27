import React from "react";
import { RouteComponentProps } from "@reach/router";
import "../styles/dashboard.scss";
import { Polynomial } from "features/polynomial/components/polynomial";
import { generateEasyQuadratic, TPolynomial } from "helpers/myMaths";

type Props = RouteComponentProps;

const Dashboard: React.FC<Props> = () => {
  const [quadratic, setQuadratic] = React.useState<TPolynomial>({
    answers: [],
    coefficients: []
  });
  const [generate, setGenerate] = React.useState<boolean>(false);

  React.useEffect(() => {
    setGenerate(false);
    setQuadratic(generateEasyQuadratic());
  }, [generate]);

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
          <button className="Btn Grey" onClick={() => setGenerate(true)}>
            Generate New Equation
          </button>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
