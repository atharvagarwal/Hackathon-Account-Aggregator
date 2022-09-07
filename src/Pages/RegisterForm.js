import React from 'react'
import './RegisterForm.css'
import {useState,useEffect} from 'react'
const RegisterForm = () => {
  const [aadhar,setAadhar] = useState('')
  const [mobile,setMobile] = useState('')
  const [pan,setPan] = useState('')
  const [password,setPassword] = useState('')
  const [aadharUrl,setAadharUrl] = useState('')
  const formSubmit=(e)=>{
      
    e.preventDefault();
    
   
    fetchRegister();}

    const fetchRegister=(e)=>{
      console.log({mobileNo:mobile, panNo:pan,password:password,aadharNo:aadhar,aadharUrl:aadharUrl,role:"USER"})
      fetch(`https://hackathonapp-vit.herokuapp.com/auth/register`, {
      method: 'POST',
     
      body: JSON.stringify({mobileNo:mobile, panNo:pan,password:password,aadharNo:aadhar,aadharUrl:aadharUrl,role:"USER"}),
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,

      },
    })
    .then((rawResponse)=> {return rawResponse.json()}).then((response)=>{console.log(response)})
  }

  let myWidget = window.cloudinary.createUploadWidget({
    cloudName: 'projectcloudat7', 
    uploadPreset: 'at7_upload_preset'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        
        setAadharUrl(result.info.url)
        
      }
    }
  )

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
          <label htmlFor="text" minLength="12" maxLength="12">Aadhar No</label>
        <input type="text" className="form-control" name="Aadhar-no" placeholder="Aadhar-no" onChange={(e)=>{setAadhar(e.target.value)}}/>
          </div>
          <div className="form-group">
          <label htmlFor="text" minLength="10" maxLength="10">Pan Card No</label>
        <input type="text" className="form-control" name="Pan-no" placeholder="Pan-no" onChange={(e)=>{setPan(e.target.value)}}/>
          </div>
          <div className="form-group">
          <label htmlFor="password">Password</label>
        <input type="password" className="form-control" name="name" placeholder="Password" minLength="6" onChange={(e)=>{setPassword(e.target.value)}} required/>
          </div>
         
          
         <button type="submit" className="btn btn-dark sub-btn">Register</button>
         
    </form>
    <button className="btn btn-dark sub-btn" style={{"marginBottom":"0.25rem",color:"white"}} onClick={()=>{myWidget.open()}} required>Upload Aadhar Image</button>
      
         </div>
    </div>
  </div>

  </div>
</div>
</div>
  )
}

export default RegisterForm