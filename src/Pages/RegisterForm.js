import React from 'react'
import './RegisterForm.css'
import {useState,useEffect} from 'react'
const RegisterForm = () => {
  const [aadhar,setAadhar] = useState('')
  const [mobile,setMobile] = useState('')
  const [pan,setPan] = useState('')
  const [password,setPassword] = useState('')
  const [aadharUrl,setAadharUrl] = useState('')
  const[email,setEmail] = useState('')
  const formSubmit=(e)=>{
      
    e.preventDefault();
    
   
    fetchRegister();}

    const fetchRegister=(e)=>{
      console.log({mobileNo:mobile, panNo:pan,password:password,aadharNo:aadhar,aadharUrl:aadharUrl,role:"USER"})
      fetch(`http://localhost:3001/auth/register`, {
      method: 'POST',
     
      body: JSON.stringify({mobileNo:mobile, panNo:pan,password:password,aadharNo:aadhar,aadharUrl:aadharUrl,role:"USER",email:email}),
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,

      },
    })
    .then((rawResponse)=> {return rawResponse.json()}).then((response)=>{if(response.success) {alert(response.success)}else{alert("Invalid Registration")}})
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
      <a href="/" style={{ margin: "0.75rem",color:"black" }} class="btn btn-light">
        Home 🏠
      </a>
      <div className="tag">
   </div>
<div className="container mt-5">
<h1 className='Header-1 text-3xl font-bold mb-2 mt-5 text-white '>USER REGISTER</h1>



<div className='main-divv'>
  <div className="col-sm-6 sec-div">
    <div className="card card-div">
      <div className="card-body">
        <form action="submit" onSubmit={formSubmit}>
        <div className="form-group">
        <label htmlFor="email"  className="font-medium">Mobile Number</label>
        <input type="text" className="form-control" name="name" placeholder="Mobile No"  onChange={(e)=>{setMobile(e.target.value)}}required/>
          </div>
          <div className="form-group">
        <label htmlFor="email"  className="font-medium">Email</label>
        <input type="text" className="form-control" name="name" placeholder="Mobile No"  onChange={(e)=>{setEmail(e.target.value)}}required/>
          </div>
          <div className="form-group">
          <label htmlFor="text" minLength="12" maxLength="12" className="font-medium">Aadhar No</label>
        <input type="text" className="form-control" name="Aadhar-no" placeholder="Aadhar-no" onChange={(e)=>{setAadhar(e.target.value)}}/>
          </div>
          <div className="form-group">
          <label htmlFor="text" minLength="10" maxLength="10" className="font-medium">Pan Card No</label>
        <input type="text" className="form-control" name="Pan-no" placeholder="Pan-no" onChange={(e)=>{setPan(e.target.value)}}/>
          </div>
          <div className="form-group">
          <label htmlFor="password" className="font-medium">Password</label>
        <input type="password" className="form-control" name="name" placeholder="Password" minLength="6" onChange={(e)=>{setPassword(e.target.value)}} required/>
          </div>
         
          
         <button type="submit" className="btn btn-dark sub-btn">Register</button>
         
    </form>
    <button className="btn btn-primary sub-btn" style={{"marginBottom":"0.25rem",color:"white"}} onClick={()=>{myWidget.open()}} required>Upload Aadhar Image</button>
      
         </div>
    </div>
  </div>

  </div>
</div>
</div>
  )
}

export default RegisterForm