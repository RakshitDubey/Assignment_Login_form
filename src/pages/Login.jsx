// LoginForm.js
import React from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate=useNavigate()
    const handleclick=()=>{
        navigate('/profile')
    }
  return (
    <div className="login-container">
      <h1>
      Signin to your <br /> PopX account
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit,</p>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button type="submit" className="login-button" onClick={handleclick} style={{background:" #6C25FF4B 0% 0% no-repeat padding-box"}}>Login</button>
      </form>
    </div>
  );
}

export default Login;
