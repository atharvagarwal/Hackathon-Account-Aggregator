import React from 'react'
import Navbar from './Navbar'
import './Landing.css'

import { useState,useEffect}  from "react";

const Landing = () => {

  

  return (
    <>
    
    <Navbar></Navbar>
    <div className="main-div">
    <h1 className="head-1">Need Loans or Check Finances </h1>
    <h3 className="head-3">Do Not Worry As We Will Help You Get It Done!</h3>
    <div>
     
     
      </div>
      <img className="main-img" src="moneyBulb.png" alt="Image of people giving lost items"></img>
      <p className="normal-p" style={{margin:"20px"}}>Note-The platform intends to helps financial companies,banks,users in financial aspects.
      </p>

    
      


     
    </div>
    </>
  )
}

export default Landing