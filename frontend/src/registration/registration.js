import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './registration.css';

// Member registration page

function RegistrationPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [newEmail, setEmail] = useState('');
    const [newPassword, setPassword] = useState('');

    const first = (event) => {
        setFirstName(event.target.value);
    };

    const last = (event) => {
        setLastName(event.target.value);
    };
    const get_address = (event) => {
        setAddress(event.target.value);
    };

    const get_phone = (event) => {
        setPhone(event.target.value);
    };

    const new_email = (event) => {
        setEmail(event.target.value);
    };

    const new_password = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div className="registrationPage">
            <Link to="/">
                <button className="back">Back to Home</button>
            </Link>
            <div className="center">
                <div className="regTitle"><h1>REGISTRATION</h1></div>
                <div className="regBoxes">
                    <div className="textbox">
                        <input 
                            type="text"
                            id="first"
                            value={firstName}
                            onChange={first}
                            placeholder="First Name"
                        />
                    </div> 
                    <div className="textbox">
                        <input 
                            type="text"
                            id="last"
                            value={lastName}
                            onChange={last}
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="textbox">
                        <input 
                            type="text"
                            id="address"
                            value={address}
                            onChange={get_address}
                            placeholder="Address"
                        />
                    </div>
                    <div className="textbox">
                        <input 
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={get_phone}
                            placeholder="Phone Number"
                        />
                    </div>
                    <div className="textbox">
                        <input 
                            type="text"
                            id="email"
                            value={newEmail}
                            onChange={new_email}
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="textbox">
                        <input 
                            type="text"
                            id="password"
                            value={newPassword}
                            onChange={new_password}
                            placeholder="Password"
                        />
                    </div>
                </div>
                <Link to="/home">
                    <button className="registerButton"><b>Register</b></button>
                </Link>
                <Link to="/">
                    <button className="cancelButton"><b>Cancel</b></button>
                </Link>
            </div>
        </div>
    );
}

export default RegistrationPage;