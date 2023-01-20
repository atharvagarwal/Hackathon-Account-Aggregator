import React from 'react'
import './RegisterForm.css'
import {useState,useEffect} from 'react'
const BankRegister = () => {
  const [Ifsc,setIfsc] = useState('')
  const [mobile,setMobile] = useState('')
  const [bankName,setBankName] = useState('')
  const [password,setPassword] = useState('')
  const [branchName,setBranchName] = useState('')
  const [image,setBankImage]=useState('')
  const formSubmit=(e)=>{
      
    e.preventDefault();
    
   
    fetchRegister();}

    const fetchRegister=(e)=>{
      
      fetch(`https://flip-flops-calf.cyclic.app//auth/register`, {
      method: 'POST',
     
      body: JSON.stringify({mobileNo:mobile, bankName:bankName,password:password,IFSCcode:Ifsc,branchName:branchName,role:"BANK",logo:image}),
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin":"*"

      },
    })
    .then((rawResponse)=> {return rawResponse.json()}).then((response)=>{if(response.success){alert(response.success)}else{alert("Invalid Registration")}})
  }
  let myWidget = window.cloudinary.createUploadWidget({
    cloudName: 'projectcloudat7', 
    uploadPreset: 'at7_upload_preset'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        
        setBankImage(result.info.url)
        
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
<h1 className='Header-1 text-3xl font-bold mb-2 mt-5 text-white'>Register</h1>


<div className='main-divv'>
  <div className="col-sm-6 sec-div">
    <div className="card card-div">
      <div className="card-body">
        <form action="submit" onSubmit={formSubmit}>
        <div className="form-group">
        <label htmlFor="email"   className='font-medium'>Mobile Number</label>
        <input type="text" className="form-control" name="name" placeholder="Mobile No"  onChange={(e)=>{setMobile(e.target.value)}}required/>
          </div>
          <div className="form-group">
          <label htmlFor="text"   className='font-medium'>IFSC No</label>
        <input type="text" className="form-control" name="Aadhar-no" placeholder="IFSC-NO"  onChange={(e)=>{setIfsc(e.target.value)}}/>
          </div>
          <div className="form-group" >
          <label htmlFor="text"  className='font-medium'>Bank Name</label>
        <input type="text" className="form-control" name="BankName" placeholder="Bank Name" onChange={(e)=>{setBankName(e.target.value)}}/>
          </div>
          <div className="form-group" >
          <label htmlFor="text" className='font-medium'>Branch Name</label>
        <input type="text" className="form-control" name="BranchName" placeholder="Branch Name" onChange={(e)=>{setBranchName(e.target.value)}}/>
          </div>
          <div className="form-group" >
          <label htmlFor="password" className='font-medium'>Password</label>
        <input type="password" className="form-control" name="password" placeholder="Password" minLength="6" onChange={(e)=>{setPassword(e.target.value)}} required/>
          </div>
         
          
         <button type="submit" className="btn btn-primary sub-btn">Register</button>
         
    </form>
    <button className="btn btn-primary sub-btn" style={{"marginBottom":"0.25rem",color:"white"}} onClick={()=>{myWidget.open()}} required>Upload Bank Logo</button>
    
      
         </div>
    </div>
  </div>

  </div>
</div>
</div>
  )
}

export default BankRegister