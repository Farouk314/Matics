import React from "react";
import "./App.scss";
import { Header } from "./features/header/components/header";
import { Router } from "@reach/router";
import { Home } from "./features/home/components/home";
import { Login } from "./features/login/components/login";
import { Dashboard } from "./features/dashboard/components/Dashboard";
import { Assignments } from "features/dashboard/components/Assignments";
import { setLocalStorage } from "helpers/auth";

const blankUserDetails: User = {
  userId: "",
  userName: ""
};

type User = {
  userId: string;
  userName: string;
};

export type State = {
  user: User;
};

export type Action =
  | {
      type: "SET_USER_DETAILS";
      user: User;
    }
  | {
      type: "SET_USER_LOGGED_OUT";
    };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_USER_DETAILS":
      return {
        ...state,
        user: action.user
      };
    case "SET_USER_LOGGED_OUT":
      setLocalStorage("userName", "");
      setLocalStorage("userId", "");
      return {
        ...state,
        user: blankUserDetails
      };
  }
};

const initialState = {
  user: blankUserDetails
};

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const userId =
      localStorage.getItem("userId") !== "undefined" ? localStorage.getItem("userId") : null;
    const userName =
      localStorage.getItem("userName") !== "undefined" ? localStorage.getItem("userName") : null;
    if (userId && userName) {
      dispatch({ type: "SET_USER_DETAILS", user: { userId, userName } });
    } else {
      dispatch({ type: "SET_USER_LOGGED_OUT" });
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Header state={state} dispatch={dispatch} />
      <Router basepath="/Matics">
        <Home path="/" />
        <Login path="login" state={state} dispatch={dispatch} />
        <Dashboard path="dashboard" />
        <Assignments path="assignments" />
      </Router>
    </div>
  );
};

export default App;
