import React from 'react'

const Navbar = () => {


  

  return (
    <nav className="navbar navbar-expand-lg  navbar-primary bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
      Account Aggregator
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar-nav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <a className="navbar" href="/userRegister">
      User Regiser
      </a></li>
      <li className="nav-item">
      <a className="navbar" href="/bankRegister">
      Bank Regiser
      </a></li>
      <li className="nav-item">
      <a className="navbar" href="/userLogin">
       User Login
      </a></li>
      <li className="nav-item">
      <a className="navbar" href="/bankLogin" >
       Bank Login
      </a></li>
      
          
         
          
        </ul>
        
      </div>
    </div>
  </nav>
  )
}

export default Navbar