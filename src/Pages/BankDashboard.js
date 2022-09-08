import React, { useEffect, useState } from "react";
import "./cardFetch.css";
const BankDashboard = () => {
  const [appliedUsers, setAppliedUsers] = useState([]);
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("otp");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://hackathonapp-vit.herokuapp.com/user/getAppliedUsers/${
          JSON.parse(localStorage.getItem("user")).IFSCcode
        }`,
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
      setAppliedUsers(fetchData.appliedUsers);
      console.log(fetchData);
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <button
        className="btn btn-dark"
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
      <br></br>
      <center>
        <p style={{ fontFamily: "Helvetica" }}>
          See All the Banks To Apply For Loans
        </p>
      </center>
      <div className="w-screen flex flex-row flex-wrap justify-center">
        {appliedUsers.map((user) => {
          return (
            <div className="card-box p-3">
              <div className="card-body-box">
                <h5 className="card-title">Aadhar No: {user.user.aadharNo}</h5>
                <h5 className="card-title">Mobile No: {user.user.mobileNo}</h5>

                {user.approved ? (
                  <button disabled className="btn btn-primary bg-dark">
                    Approved ✅
                  </button>
                ) : (
                  <button
                    className="btn btn-primary bg-dark"
                    onClick={async (e) => {
                      await fetch(
                        `https://hackathonapp-vit.herokuapp.com/user/approveLoan`,
                        {
                          method: "POST",
                          body: JSON.stringify({
                            loanId: user.loanId,
                          }),
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Credentials": true,
                          },
                        }
                      );
                    }}
                  >
                    Approve ✅
                  </button>
                )}
                <button
                  onClick={() => {
                    localStorage.setItem("userDetails", JSON.stringify(user));
                  }}
                  className="btn btn-primary bg-dark"
                >
                  <a href="/details">Details</a>
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
