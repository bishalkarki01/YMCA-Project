/** @format */

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import HomePage from "./homepage/home";
import LoginPage from "./login/login";
import RegistrationPage from "./registration/registration";

// Where all the webpages go for the router-dom

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
