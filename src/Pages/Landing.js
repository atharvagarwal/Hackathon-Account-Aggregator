import React from 'react'
import Navbar from './Navbar'


import { useState,useEffect}  from "react";

const Landing = () => {

  

  return (
    <>
    
    <Navbar></Navbar>
    <div className="flex justify-around flex-wrap " id="home">
    <div className="flex flex-col justify-center">
    <h1 className="font-medium leading-tight text-xl p-2 text-center md:text-8xl lg:text-left mt-0 mb-2 text-white">Account Aggregator
    </h1>

    <p className="font-small leading-tight text-center text-24 mt-0 mb-2 text-white p-2 md:text-left md:text-3xl">This web app helps in<br></br> 
compiling financial information from multiple sources into one place.</p>
    </div>
    <img src="loan1.svg" className='lg:w-1/3 mb-10 md:w-1/3 mt-20 w-1/2'></img>    
    </div>
    </>
  )
}

export default Landing