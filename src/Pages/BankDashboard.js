import React from 'react'
import './cardFetch.css'
const BankDashboard = () => {

    const logout=()=>{
        localStorage.removeItem('user');
        localStorage.removeItem('otp');
        localStorage.removeItem('role');
        localStorage.removeItem('token');
        window.location.href="/";
      }

  return (
    <div>
        <button className="btn btn-dark" onClick={()=>{logout()}}>Logout</button><br></br>
        BankDashboard</div>
  )
}

export default BankDashboard