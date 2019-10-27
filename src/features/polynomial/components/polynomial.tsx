import React from "react";
import "../styles/polynomial.scss";

type PolynomialProps = {
  order: number;
  coefficients: number[];
  answer: number;
};

type Props = PolynomialProps;

const Polynomial: React.FC<Props> = ({ order, coefficients, answer }) => {
  if (coefficients.length !== order + 1) {
    throw new Error(
      `Wrong number of coefficients: ${coefficients.length} for polynomial of order: ${order}`
    );
  }

  const renderPolynomial = () => {
    let polynomial: React.ReactNode[] = [];
    let index = 0;
    for (let power = order; power >= 0; power--) {
      if (coefficients[index] !== 0) {
        if (coefficients[index] < 0) {
          polynomial.push(<div className="Operator">-</div>);
        } else {
          if (power !== order) {
            polynomial.push(<div className="Operator">+</div>);
          }
        }
        polynomial.push(
          <div className={power > 1 ? "Term WithPower" : "Term"}>
            <span className={power > 0 ? "Coefficient" : "Constant"}>
              {coefficients[index] !== 1 && Math.abs(coefficients[index])}
            </span>
            {power > 0 && <span className="Variable">x</span>}
            {power > 1 && <span className="Power">{power}</span>}
          </div>
        );
      }
      index = index + 1;
    }
    polynomial.push(
      <>
        <div className="Operator">=</div>
        <div className="Constant">{answer}</div>
      </>
    );

    return polynomial;
  };
  return (
    <div className="EquationField">
      <div className="Inner">{renderPolynomial()}</div>
    </div>
  );
};

export { Polynomial };
