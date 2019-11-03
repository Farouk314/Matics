import React from "react";
import { Polynomial } from "features/polynomial/components/polynomial";
import { TPolynomial, generateEasyQuadratic } from "helpers/myMaths";
import { RouteComponentProps } from "@reach/router";

type EquationGeneratorProps = {};

type Props = EquationGeneratorProps & RouteComponentProps;

const EquationGenerator: React.FC<Props> = () => {
  const [quadratic, setQuadratic] = React.useState<TPolynomial>({
    answers: [],
    coefficients: []
  });

  React.useEffect(() => {
    setQuadratic(generateEasyQuadratic());
  }, []);

  return (
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
  );
};

export { EquationGenerator };
