import React from "react";
import "./App.scss";
import { Header } from "./features/header/components/header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
