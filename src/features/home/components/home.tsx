import React from "react";
import { RouteComponentProps } from "@reach/router";

type Props = RouteComponentProps;

const Home: React.FC<Props> = () => {
  return <div className="WidthContent">Home</div>;
};

export { Home };
