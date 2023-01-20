import React from "react";
import "./RegisterForm.css";
import { useState,useContext} from "react";
import { useCookies } from 'react-cookie';
import { UserContext } from './../UserContext';
import Cookies from 'js-cookie'
const RegisterForm = () => {
  const [user,setUser] = useContext(UserContext);
  const [IFSC, setIFSC] = useState("");
  const [password, setPassword] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();

    fetchRegister();
  };

  const fetchRegister = (e) => {
    fetch(`https://flip-flops-calf.cyclic.app//auth/login`, {
      method: "POST",

      body: JSON.stringify({
        IFSCcode: IFSC,
        password: password,
        role: "BANK",
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((response) => {
        if(response.message){alert('invalid credentials')}
        else{
        
        Cookies.set('token',JSON.stringify([response.token,response.user]),{ expires: 7 })
        Cookies.set('user',JSON.stringify([response.user]))
        Cookies.set('role',"BANK")
        window.location.href = "/bankDashboard";}
      });
  };

  return (
    <div>
      <a href="/" style={{ margin: "0.75rem",color:"black" }} class="btn btn-light">
        Home 🏠
      </a>
      <div className="tag"></div>
      <div className="container mt-5">
      <h1 className='Header-1 text-3xl font-bold mb-2 mt-5 text-white'>BANK LOGIN</h1>

        <div className="main-divv">
          <div className="col-sm-6 sec-div">
            <div className="card card-div">
              <div className="card-body">
                <form action="submit" onSubmit={formSubmit}>
                  <div className="form-group">
                    <label htmlFor="email"  className="font-medium">IFSC No</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="IFSC No"
                      onChange={(e) => {
                        setIFSC(e.target.value);
                      }}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="font-medium">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="name"
                      placeholder="Password"
                      minLength="6"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary sub-btn">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
