import React from "react";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <>
      <div className="welcome-screen-header">Factorial Calculator</div>
      <div className="welcome-screen-container">
        <div className="welcome-screen-content-container">
          <p className="welcome-screen-text">
            Welcome to factorial calculator, app which allows users to input a
            number and calculates its factorial.
            <br />
            The app is built with React and Redux.
          </p>
          <div className="welcome-page-buttons-wrapper">
            <div className="task-button-container">
              <Link to="/factorial-calculator">Factorial Calculator</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeScreen;
