import React from "react";
import "./App.scss";
import { Header } from "./features/header/components/header";
import { Router } from "@reach/router";
import { Home } from "./features/home/components/home";
import { Login } from "./features/login/components/login";
import { Dashboard } from "./features/dashboard/components/dashboard";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Router basepath="/Matics">
        <Home path="/" />
        <Login path="login" />
        <Dashboard path="dashboard" />
      </Router>
    </div>
  );
};

export default App;
