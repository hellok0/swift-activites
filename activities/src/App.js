import React from "react";
import "./App.css";
import logo from "./SWIFT_2021_logo.png";
import avatar from "./avatar.png";

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span>SwiftActivities</span>
        </div>
        <div className="avatar">
          <img src={avatar} alt="Avatar" />
        </div>
      </header>
      <div className="container">
        <div className="panel panel-left">Left Panel</div>
        <div className="panel panel-middle">Middle Panel</div>
        <div className="panel panel-right">Right Panel</div>
      </div>
    </div>
  );
};

export default App;
