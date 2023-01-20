import React, { useEffect, useState,useContext} from "react";
import "./cardFetch.css";
import { UserContext } from "../UserContext";
import Cookies from 'js-cookie'
const BankDashboard = () => {
  const [user,setUser]=useContext(UserContext)
  const [appliedUsers, setAppliedUsers] = useState([]);
  const [copyappliedUsers, setcopyAppliedUsers] = useState([]);

  const logout = () => {
    localStorage.clear()
    Cookies.remove('token')
    Cookies.remove('user')
    Cookies.remove('role')
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://flip-flops-calf.cyclic.app/user/getAppliedUsers/${
          JSON.parse(Cookies.get("user"))[0].IFSCcode
        }`,
        {
          method: "GET",

          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
            "Acces-Control-Allow-Origin":"*"
          },
        }
      );
      const fetchData = await data.json();
      setAppliedUsers(fetchData.appliedUsers);
      setcopyAppliedUsers(fetchData.appliedUsers)
      console.log(fetchData);
      
    };
    fetchData();
  }, []);

  const filterResults=(value)=>{
    if(value!==""){
    setAppliedUsers(appliedUsers.filter((userCard)=>{let userItem=userCard.user.aadharNo.toLowerCase(); return userItem.includes(value.toLowerCase()); }))}
    else{
        setAppliedUsers(copyappliedUsers)
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
        <p className="text-white text-2xl text-medium">
          See All the Banks To Apply For Loans
        </p>
        <input type="text" className="form-control" placeholder="Search" style={{"width":"50vw","marginBottom":"1.25rem"}} onChange={(e)=>{filterResults(e.target.value)}}/>
      </center>
      <div className="w-screen flex flex-row flex-wrap justify-center">
        {appliedUsers.map((user) => {
          return (
            <div className="card-box p-5">
              <div className="card-body-box">
                <a href={user.user.aadharUrl} target="_blank" className="p-6 hover:text-black">Aadhar Image</a>
                <h5 className="card-title">Aadhar No: {user.user.aadharNo}</h5> 
                <h5 className="card-title">Mobile No: {user.user.mobileNo}</h5>
                <h5 className="card-title">Loan Amount: {user.loanAmount}</h5>
                <h5 className="card-title">Loan Type: {user.type}</h5>

               
                {user.approved ? (
                  <button disabled className="btn btn-primary bg-dark">
                    Approved ✅
                  </button>
                ) : (
                  <button
                    className="btn btn-primary bg-dark"
                    onClick={async (e) => {
                      await fetch(
                        `https://flip-flops-calf.cyclic.app/user/approveLoan`,
                        {
                          method: "POST",
                          body: JSON.stringify({
                            loanId: user.loanId,
                          }),
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Credentials": true,
                            "Acces-Control-Allow-Origin":"*"
                          },
                        }
                      );
                      window.location.reload();
                    }
                  }
                  >
                    Approve ✅
                  </button>
                )}
                <button
                  onClick={() => {
                    localStorage.setItem("userDetails", JSON.stringify(user));
                  }}
                  className="btn btn-primary bg-dark m-2"
                >
                  <a href="/details" className="hover:text-yellow-200">Details</a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BankDashboard;
