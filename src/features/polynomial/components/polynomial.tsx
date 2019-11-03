import React from "react";

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
        polynomial.push(
          <React.Fragment key={index}>
            {coefficients[index] < 0 ? (
              <div className="Operator">-</div>
            ) : (
              power !== order && <div className="Operator">+</div>
            )}
            <div className={power > 1 ? "Term WithPower" : "Term"}>
              <span className={power > 0 ? "Coefficient" : "Constant"}>
                {power > 0
                  ? coefficients[index] !== 1 && Math.abs(coefficients[index])
                  : Math.abs(coefficients[index])}
              </span>
              {power > 0 && <span className="Variable">x</span>}
              {power > 1 && <span className="Power">{power}</span>}
            </div>
          </React.Fragment>
        );
      }
      index = index + 1;
    }
    polynomial.push(
      <React.Fragment key={order + 1}>
        <div className="Operator">=</div>
        <div className="Constant">{answer}</div>
      </React.Fragment>
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
