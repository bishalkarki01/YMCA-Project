import React from 'react';
import { Link } from 'react-router-dom';
import './visitor.css';

/* Kaaviyas Page to edit */

function VisitorPage() {
    return (
      <div className="visitorpage">
        <p>Visitor page here</p>
  
        <Link to="/register">
          <button>Register</button>
        </Link>
  
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    );
  }
  
  export default VisitorPage;