import logo from './logo.svg';
import './App.css';
import RegisterForm from './Pages/RegisterForm'
import BankRegister from './Pages/BankRegister'
import Login from './Pages/Login'
import BankLogin from './Pages/BankLogin'
import MobileOTP from './Pages/MobileOTP'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/userRegister" element={<RegisterForm/>}/>
      <Route path="/bankRegister" element={<BankRegister/>}/>
      <Route path="/bankLogin" element={<BankLogin/>}/>
      <Route path="/userlogin" element={<Login/>}/>
      <Route path="/otp" element={<MobileOTP/>}></Route>
      <Route path="/aggForm" element={<>Form</>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
