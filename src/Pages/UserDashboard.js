import React, { useEffect, useState , useContext } from "react";
import Cookies from 'js-cookie'
import { UserContext } from './../UserContext';
const UserDashboard = () => {
  const [bankData, setBankData] = useState([]);
  const [copyBankData, setcopyBankData] = useState([]);

  const [user,setUser] = useContext(UserContext)
  console.log("user "+user)
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://flip-flops-calf.cyclic.app//user/getBanks",
        {
          method: "GET",

          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        }
      );
      const fetchData = await data.json();
      console.log(fetchData.banks);
      setBankData(fetchData.banks);
      setcopyBankData(fetchData.banks);
    };
    fetchData();
  }, []);

  const logout = () => {
     localStorage.clear()
    Cookies.remove('token')
    Cookies.remove('user')
    Cookies.remove('role')
    window.location.href = "/";
  };

  const filterResults=(value)=>{
    if(value!==""){
    setBankData(bankData.filter((bankCard)=>{let bankItem=bankCard.IFSCcode.toLowerCase(); return bankItem.includes(value.toLowerCase()); }))}
    else{
        setBankData(copyBankData)
    }
   }

  return (
    <div className="">
      <button
        className="btn btn-dark m-2 border-2 border-white"
        onClick={() => {
          logout();
        }}
      >
        Logout 
      </button>
      <br></br>
      <center>
      <h1 className='Header-1 text-3xl font-bold mb-2 mt-1 text-white'>APPLY LOAN IN A BANK OF YOUR CHOICE</h1>
      <input type="text" className="form-control" placeholder="Search" style={{"width":"50vw","marginBottom":"1.25rem"}} onChange={(e)=>{filterResults(e.target.value)}}/>
      </center>
      <div className="w-full flex flex-row flex-wrap justify-evenly gap-2 items-center">
        {bankData.map((bankDetails) => (
          <div className="card-box p-2">
            <div className="card-body-box">
              <img src={bankDetails.logo} className="w-3/5 block mx-auto my-auto mt-1 mb-1 p-6 font-medium text-xl"></img>
              <h5 className="card-title">{bankDetails.bankName}</h5>
              <h5 className="card-title">
                Branch Name: {bankDetails.branchName}
              </h5>
              <h5 className="card-title">IFSC CODE : {bankDetails.IFSCcode}</h5>

              <button className="btn btn-light">
                <a
                  href="/otp"
                  onClick={() => {
                    localStorage.setItem("user_ifsc", bankDetails.IFSCcode);
                  }}
                >
                  Apply ✅
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
