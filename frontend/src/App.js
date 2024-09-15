import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import RegistrationPage from './registration/registration';
import HomePage from './homepage/home';
import LoginPage from './login/login';

// Where all the webpages go for the router-dom

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router> 
  );
}

export default App;