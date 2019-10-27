export type TPolynomial = {
  answers: number[];
  coefficients: number[];
};

const customRand = (lowest: number, highest: number) => {
  if (highest < 0) {
    throw new Error(`Cannot have negative highest number: ${highest}`);
  }
  return Math.round(Math.random() * (Math.abs(lowest) + highest) - Math.abs(lowest));
};

const generateEasyQuadratic = (): TPolynomial => {
  let polynomial: TPolynomial = {
    answers: [],
    coefficients: []
  };

  polynomial.answers = [customRand(-9, 9), customRand(-9, 9)];
  //   polynomial.answers = [Math.round(Math.random() * 18 - 9), Math.round(Math.random() * 18 - 9)];

  const [a, b] = polynomial.answers;

  polynomial.coefficients = [1, a + b, a * b];

  console.log("Returning polynomial:");
  console.log(polynomial.answers);
  console.log(polynomial.coefficients);
  return polynomial;
};

export { generateEasyQuadratic };
