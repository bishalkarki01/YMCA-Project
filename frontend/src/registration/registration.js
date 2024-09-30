/** @format */

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./registration.css";

function RegistrationPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [newEmail, setEmail] = useState("");
  const [newPassword, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    const userData = {
      firstName,
      lastName,
      address,
      phone,
      email: newEmail,
      password: newPassword,
      userType: "participant",
    };
    console.log(userData);

    try {
      const response = await axios.post(
        "http://localhost:5001/register",
        userData
      );
      console.log(response.data);

      // Redirect after successful registration
      navigate("/login");
    } catch (error) {
      // If there is an error, check if it's the "user exists" error
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage("Please fill the form completely");
      }
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <div className="register-card">
          <h2>REGISTRATION</h2>
          {errorMessage && <div className="error">{errorMessage}</div>}{" "}
          {/* Display error message */}
          <div className="row">
            <input
              type="text"
              className="form-control"
              id="first"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <input
              type="text"
              className="form-control"
              id="last"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </div>
          <div className="row">
            <input
              type="address"
              className="form-control full-width"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
            />
          </div>
          <div className="row">
            <input
              type="phone"
              className="form-control"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
            />
            <input
              type="email"
              className="form-control"
              id="email"
              value={newEmail}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          </div>
          <div className="row">
            <input
              type="password"
              className="form-control full-width"
              id="password"
              value={newPassword}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="row">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            <Link to="/login">
              <button type="button" className="btn btn-cancel">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegistrationPage;
