import React, { useEffect, useState } from "react";

const UserDashboard = () => {
  const [bankData, setBankData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://hackathonapp-vit.herokuapp.com/user/getBanks",
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
    };
    fetchData();
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("otp");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

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
        {bankData.map((bankDetails) => (
          <div className="card-box p-3">
            <div className="card-body-box">
              <h5 className="card-title">Bank Name {bankDetails.bankName}</h5>
              <h5 className="card-title">
                Branch Name:{bankDetails.branchName}
              </h5>
              <h5 className="card-title">IFSC CODE : {bankDetails.IFSCcode}</h5>

              <button className="btn btn-primary bg-dark">
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
