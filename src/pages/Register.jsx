// RegisterForm.js
import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from "react-router-dom";
function Register() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAgency, setIsAgency] = useState(false);
  const navigate=useNavigate()

      


  const handleRegister = (e) => {
    e.preventDefault();
  

    // Handle registration logic here, e.g., send data to server
    console.log({ fullName, phoneNumber, email, password, companyName, isAgency });
    navigate('/profile')
  };

  return (
    <div className="register-form-container">
      <h2>Create Your <br /> PopX Account</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </div>
        <div className="form-group">
          <p>Are you an agency?</p>
          <label htmlFor="yes">
            <input type="radio" id="yes" name="agency" value="yes" checked={isAgency} onChange={() => setIsAgency(true)} />
            Yes
          </label>
          <label htmlFor="no">
            <input type="radio" id="no" name="agency" value="no" checked={!isAgency} onChange={() => setIsAgency(false)} />
            No
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
