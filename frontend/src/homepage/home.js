import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
//import logo from '.././logo.svg';

// This will be the homepage eventually

function HomePage() {
  return (
    <div className="homepage">
      <p>Home page here</p>

      <Link to="/register">
        <button>Register</button>
      </Link>

      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default HomePage;