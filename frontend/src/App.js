/** @format */

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import HomePage from "./homepage/home";
import LoginPage from "./login/login";
import RegistrationPage from "./registration/registration";
import VisitorPage from "./visitorpage/visitor";

// Where all the webpages go for the router-dom

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VisitorPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
