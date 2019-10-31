import React from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import "../styles/login.scss";
import sha256 from "sha256";
import { users } from "helpers/auth";
import { setLocalStorage } from "helpers/auth";

// Icons
import { User } from "react-feather";
import { Lock } from "react-feather";
import { State, Action } from "App";

type LoginProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type Props = LoginProps & RouteComponentProps;

type LoginDetails = {
  username: string;
  password: string;
};

const Login: React.FC<Props> = ({ state, dispatch }) => {
  const [loginDetails, setLoginDetails] = React.useState<LoginDetails>({
    username: "",
    password: ""
  });

  const [emptyFieldsList, setEmptyFieldsList] = React.useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formValid()) {
      const user = { ...loginDetails, password: sha256(loginDetails.password) };
      let userFound = false;
      for (const u of users) {
        if (JSON.stringify(u) === JSON.stringify(user)) {
          userFound = true;
        }
      }
      if (userFound) {
        const userName = user.username;
        const userId = sha256(user.password);
        setLocalStorage("userId", userId);
        setLocalStorage("userName", userName);
        dispatch({ type: "SET_USER_DETAILS", user: { userId, userName } });
        navigate("dashboard");
      }
    }
  };

  const formValid = () => {
    let emptyFields = [];
    if (!loginDetails.username) {
      emptyFields.push("username");
    }

    if (!loginDetails.password) {
      emptyFields.push("password");
    }

    setEmptyFieldsList(emptyFields);

    if (emptyFields.length > 0) {
      return false;
    }

    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetId = e.currentTarget.id;
    const targetValue = e.currentTarget.value;
    if (targetId) {
      setLoginDetails(prevState => ({
        ...prevState,
        [targetId]: targetValue
      }));
    }
  };

  return (
    <div className="Login WidthContent">
      <form className="LoginForm" onSubmit={handleSubmit}>
        <span className="Title">Log In</span>
        <span className="WarningMessage">
          {emptyFieldsList.length > 0 && "Hey! Fill in the details..."}
        </span>
        <div className="FormField WithIcon">
          <User className="Icon" color="#2c3539" size={20} />
          <input
            id="username"
            type="text"
            className={emptyFieldsList.includes("username") ? "EditBox Warning" : "EditBox"}
            placeholder="Username"
            value={loginDetails.username}
            onChange={handleChange}
          />
        </div>
        <div className="FormField WithIcon">
          <Lock className="Icon" color="#2c3539" size={20} />
          <input
            id="password"
            type="password"
            className={emptyFieldsList.includes("password") ? "EditBox Warning" : "EditBox"}
            placeholder="Password"
            value={loginDetails.password}
            onChange={handleChange}
          />
        </div>
        <div className="ButtonContainer">
          <button type="submit" className="Btn Primary">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export { Login };
