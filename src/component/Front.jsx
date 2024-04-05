import React from 'react'
import './Front.css'
import { useNavigate } from "react-router-dom";
function Front() {
    const navigate=useNavigate()
    const handleclick=()=>{
        navigate('/register')
    }
    const handlelogin=()=>{
        navigate('/login')
    }
  return (
    <div className="container" style={{marginTop:"200px"}}>
    <h1>Welcome to PopX</h1>
    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>
    <div className="buttons"style={{display:'flex' ,alignItems:"center",justifyContent:"center"}}>
      <button className="create-account-btn" style={{background:'#6C25FF 0% 0% no-repeat padding-box',color:"white",borderRadius:'6px',opacity:'1',outline:"#6C25FF",cursor:"pointer"}} onClick={handleclick}>Create Account</button>
      <button className="login-btn" style={{color:'#1D2226',opacity:'1',background:'#6C25FF4B 0% 0% no-repeat padding-box',borderRadius:"6px",outline:"gray"}} onClick={handlelogin}>Already Registered? Login</button>
    </div>
  </div>
  )
}

export default Front