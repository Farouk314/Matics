import React from "react";
import "./App.scss";
import { Header } from "./features/header/components/header";
import { Router } from "@reach/router";
import { Home } from "./features/home/components/home";
import { Login } from "./features/login/components/login";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/" />
        <Login path="/login" />
      </Router>
    </div>
  );
};

export default App;
