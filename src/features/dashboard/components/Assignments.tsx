import React from "react";
import { RouteComponentProps } from "@reach/router";

type AssignmentsProps = {};

type Props = AssignmentsProps & RouteComponentProps;

const Assignments: React.FC<Props> = () => {
  return (
    <div className="Assignments">
      <span className="Title">Assignments</span>
      <div className="Body">Body</div>
    </div>
  );
};

export { Assignments };
