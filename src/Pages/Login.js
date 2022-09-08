import React from 'react'
import './RegisterForm.css'
import {useState,useEffect} from 'react'
const RegisterForm = () => {

  const [mobile,setMobile] = useState('')
  const [password,setPassword] = useState('')
  
  const formSubmit=(e)=>{
      
    e.preventDefault();
    
   
    fetchRegister();}

    const fetchRegister=(e)=>{
      
      fetch(`https://hackathonapp-vit.herokuapp.com/auth/login`, {
      method: 'POST',
     
      body: JSON.stringify({mobileNo:mobile,password:password,role:"USER"}),
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,

      },
    })
    .then((rawResponse)=> {return rawResponse.json()}).then((response)=>{console.log(response);localStorage.setItem('token', response.token);localStorage.setItem('user',JSON.stringify(response.user));localStorage.setItem('role','USER')
    if(localStorage.getItem('token', response.token)!==undefined){
      
      window.location.href="/userDashboard"}
      else{
        alert("wrong crendentials")
      }
  })

  }

 

  return (
    <div>
       <a href="/" style={{"padding":"0.75rem"}}>Home</a>
<div className="tag">
   </div>
<div className="container mt-5">
<h1 className='Header-1'>User Login</h1>


<div className='main-divv'>
  <div className="col-sm-6 sec-div">
    <div className="card card-div">
      <div className="card-body">
        <form action="submit" onSubmit={formSubmit}>
        <div className="form-group">
        <label htmlFor="email">Mobile Number</label>
        <input type="text" className="form-control" name="name" placeholder="Mobile No"  onChange={(e)=>{setMobile(e.target.value)}}required/>
          </div>
        
          <div className="form-group">
          <label htmlFor="password">Password</label>
        <input type="password" className="form-control" name="name" placeholder="Password" minLength="6" onChange={(e)=>{setPassword(e.target.value)}} required/>
          </div>
         
          
         <button type="submit" className="btn btn-dark sub-btn">Login</button>
         
    </form>
  
      
         </div>
    </div>
  </div>

  </div>
</div>
</div>
  )
}

export default RegisterForm