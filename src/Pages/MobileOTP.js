import './MobileOTP.css'
import { getAuth } from "firebase/auth";


import React, { useState } from 'react';
import { firebase, auth } from './Firebase';

const MobileOTP = () => {
	// Inputs
	const [mynumber, setnumber] = useState("");
	const [otp, setotp] = useState('');
	const [show, setshow] = useState(false);
	const [final, setfinal] = useState('');

	// Sent OTP
	const signin = () => {

		if (mynumber === "" || mynumber.length <= 10) return;

		let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
		auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
			setfinal(result);
			alert("code sent")
			setshow(true);
		})
			.catch((err) => {
				alert(err);
				window.location.reload()
			});
	}

	// Validate OTP
	const ValidateOtp = () => {
		if (otp === null || final === null)
			return;
		final.confirm(otp).then((result) => {
			localStorage.setItem('otp','verified')
            window.location.href="/aggForm"
            alert("success")
		}).catch((err) => {
			alert("Wrong code");
		})
	}

	return (<>
	    <h1 className='Header-1 text-3xl font-bold mt-6 mb-3  text-white'>USER VERIFICATION</h1>
		<center><p style={{"padding":"1rem","fontWeight":"300","fontSize":"1.25rem","color":"white","width":"100%"}}>Note-Enter mobile no along with country code</p></center>
        <div className='otpDiv'>
		<div className="otpDiv2">
		<center><h1 style={{"padding":"1rem","fontWeight":"700","fontSize":"1.25rem","color":"white"}}>Please Give Your Consent To Submit and Share Your Financial Statement</h1></center>

			<center>
				<div style={{ display: !show ? "block" : "none" }}>
					<input style={{"border":"1px solid black","padding":"0.25rem","borderRadius":"0.25rem","width":"100%"}} value={mynumber} onChange={(e) => {
					setnumber(e.target.value) }}
						placeholder="contact" />
					<br /><br />
					<div id="recaptcha-container"></div>
					<button className="btn btn-dark" onClick={signin}>Send OTP</button>
				</div>
				<div style={{ display: show ? "block" : "none" }}>
					<input type="text" placeholder={"Enter your OTP"}  style={{"border":"1px solid black","padding":"0.25rem","borderRadius":"0.25rem"}}
						onChange={(e) => { setotp(e.target.value) }}></input>
					<br /><br />
					<button className="btn btn-dark" onClick={ValidateOtp}>Verify</button>
				</div>
                
			</center>
		</div>
		<img src="OTP.svg"></img>
        </div>
		</>
	);
}

export default MobileOTP;
