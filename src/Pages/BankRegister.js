import React from 'react'
import './RegisterForm.css'
import {useState,useEffect} from 'react'
const BankRegister = () => {
  const [Ifsc,setIfsc] = useState('')
  const [mobile,setMobile] = useState('')
  const [bankName,setBankName] = useState('')
  const [password,setPassword] = useState('')
  const [branchName,setBranchName] = useState('')
  const formSubmit=(e)=>{
      
    e.preventDefault();
    
   
    fetchRegister();}

    const fetchRegister=(e)=>{
      
      fetch(`https://hackathonapp-vit.herokuapp.com/auth/register`, {
      method: 'POST',
     
      body: JSON.stringify({mobileNo:mobile, bankName:bankName,password:password,IFSCcode:Ifsc,branchName:branchName,role:"BANK"}),
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin":"*"

      },
    })
    .then((rawResponse)=> {return rawResponse.json()}).then((response)=>{console.log(response)})
  }


  return (
    <div>
       <a href="/" style={{"padding":"0.75rem"}}>Home</a>

    <div className="tag">
   </div>
<div className="container mt-5">
<h1 className='Header-1'>Register</h1>


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
          <label htmlFor="text" >IFSC No</label>
        <input type="text" className="form-control" name="Aadhar-no" placeholder="IFSC-NO"  onChange={(e)=>{setIfsc(e.target.value)}}/>
          </div>
          <div className="form-group">
          <label htmlFor="text" >Bank Name</label>
        <input type="text" className="form-control" name="BankName" placeholder="Bank-no" onChange={(e)=>{setBankName(e.target.value)}}/>
          </div>
          <div className="form-group">
          <label htmlFor="text">Branch Name</label>
        <input type="text" className="form-control" name="BranchName" placeholder="Branch-no" onChange={(e)=>{setBranchName(e.target.value)}}/>
          </div>
          <div className="form-group">
          <label htmlFor="password">Password</label>
        <input type="password" className="form-control" name="password" placeholder="Password" minLength="6" onChange={(e)=>{setPassword(e.target.value)}} required/>
          </div>
         
          
         <button type="submit" className="btn btn-dark sub-btn">Register</button>
         
    </form>
   
      
         </div>
    </div>
  </div>

  </div>
</div>
</div>
  )
}

export default BankRegister