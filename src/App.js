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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/userRegister"
          element={
            localStorage.getItem("token") ==undefined ? (
              <RegisterForm />
            ) : localStorage.getItem("role") === "USER" ? (
              <UserDashboard />
            ) : (
              <BankDashboard />
            )
          }
        />
        <Route
          path="/bankRegister"
          element={
            localStorage.getItem("token") == undefined ? (
              <BankRegister />
            ) : localStorage.getItem("role") === "USER" ? (
              <UserDashboard />
            ) : (
              <BankDashboard />
            )
          }
        />
        <Route
          path="/bankLogin"
          element={
            localStorage.getItem("token") == undefined ? (
              <BankLogin />
            ) : localStorage.getItem("role") === "USER" ? (
              <UserDashboard />
            ) : (
              <BankDashboard />
            )
          }
        />
        <Route
          path="/userlogin"
          element={
            localStorage.getItem("token") == undefined ? (
              <Login />
            ) : localStorage.getItem("role") === "USER" ? (
              <UserDashboard />
            ) : (
              <BankDashboard />
            )
          }
        />
        <Route
          path="/otp"
          element={
            localStorage.getItem("token") !== undefined &&
            localStorage.getItem("role") === "USER" ? (
              <MobileOTP />
            ) : (
              <Landing></Landing>
            )
          }
        ></Route>
        <Route
          path="/aggForm"
          element={
            localStorage.getItem("otp") !== undefined ? (
              <AggForm />
            ) : (
              <Landing></Landing>
            )
          }
        ></Route>
        <Route
          path="/"
          element={
            localStorage.getItem("token") == undefined ? (
              <Landing />
            ) : localStorage.getItem("role") === "USER" &&
              localStorage.getItem("role") !== undefined ? (
              <UserDashboard />
            ) : (
              <BankDashboard />
            )
          }
        />
        <Route
          path="/userDashboard"
          element={
            localStorage.getItem("token") !== undefined &&
            localStorage.getItem("role") === "USER" ? (
              <UserDashboard />
            ) : (
              <Landing></Landing>
            )
          }
        ></Route>
        <Route
          path="/bankDashboard"
          element={
            localStorage.getItem("token") !== undefined &&
            localStorage.getItem("role") === "BANK" ? (
              <BankDashboard />
            ) : (
              <Landing></Landing>
            )
          }
        ></Route>

        <Route
          path="/details"
          element={
            localStorage.getItem("token") !== undefined &&
            localStorage.getItem("role") === "BANK" ? (
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
