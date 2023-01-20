import "./App.css";
import RegisterForm from "./Pages/RegisterForm";
import BankRegister from "./Pages/BankRegister";
import Login from "./Pages/Login";
import BankLogin from "./Pages/BankLogin";
import MobileOTP from "./Pages/MobileOTP";
import Landing from "./Pages/Landing";
import UserDashboard from "./Pages/UserDashboard";
import BankDashboard from "./Pages/BankDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AggForm from "./Pages/AggForm";
import UserDetails from "./Pages/UserDetails";
import { UserContext } from "./UserContext";
import {UserProvider } from "./UserContext"
import Cookies from 'js-cookie';

import { useContext, useEffect } from "react";
function App() {
  const [user,setUser]=useContext(UserContext)
  const tokenCookie=Cookies.get('token')
  const userCookie=Cookies.get('user')
  const roleCookie=Cookies.get('role')
  console.log(userCookie)
  let parsedCookie;
  useEffect(()=>{
    setUser(userCookie); 
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/userRegister"
          element={
            !tokenCookie ? (
              <RegisterForm />
            ) : roleCookie==="USER" ? (
              <UserDashboard />
            ) : (
              <BankDashboard />
            )
          }
        />
        <Route
          path="/bankRegister"
          element={
            !tokenCookie ? (
              <BankRegister />
            ) : roleCookie==="USER" ? (
              <UserDashboard />
            ) : (
              <BankDashboard />
            )
          }
        />
        <Route
          path="/bankLogin"
          element={
            !tokenCookie ? (
              <BankLogin />
            ) : roleCookie==="USER" ? (
              <UserDashboard />
            ) : (
              <BankDashboard />
            )
          }
        />
        <Route
          path="/userlogin"
          element={
            !tokenCookie ? (
              <Login />
            ) : roleCookie==="USER" ? (
              <UserDashboard />
            ) : (
              <BankDashboard />
            )
          }
        />
        <Route
          path="/otp"
          element={
            tokenCookie &&
            roleCookie==="USER" ? (
              <MobileOTP />
            ) : (
              <Landing></Landing>
            )
          }
        ></Route>
        <Route
          path="/aggForm"
          element={
            localStorage.getItem("otp") !== null && tokenCookie? (
              <AggForm />
            ) : (
              <Landing></Landing>
            )
          }
        ></Route>
        <Route
          path="/"
          element={
            !tokenCookie? (
              <Landing />
            ) : roleCookie==="USER" &&
              roleCookie !== null ? (
              <UserDashboard />
            ) : (
              <BankDashboard />
            )
          }
        />
        <Route
          path="/userDashboard"
          element={
            userCookie &&
            roleCookie==="USER" ? (
              <UserDashboard />
            ) : (
              <Landing></Landing>
            )
          }
        ></Route>
        <Route
          path="/bankDashboard"
          element={
            userCookie &&
            roleCookie==="BANK" ? (
              <BankDashboard />
            ) : (
              <Landing></Landing>
            )
          }
        ></Route>

        <Route
          path="/details"
          element={
            tokenCookie &&
            roleCookie==="BANK" ? (
              <UserDetails />
            ) : (
              <Landing></Landing>
            )
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
