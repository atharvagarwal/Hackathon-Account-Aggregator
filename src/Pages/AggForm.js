import React from "react";
import Cookies from "js-cookie";
const AggForm = () => {
  const [expenses, setExpenses] = React.useState("");
  const [loanAmt,setloanAmt] = React.useState("");
  const [type,setType] = React.useState("");
  const [savings, setSavings] = React.useState("");
  const [taxUrl, setTaxUrl] = React.useState("");
  const [portfolioUrl, setPortfolioUrl] = React.useState("value");
  
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(expenses, savings, taxUrl, portfolioUrl);
    fetch(`https://flip-flops-calf.cyclic.app/user/addDetails`, {
      method: "PATCH",
      body: JSON.stringify({
        expenses, 
        savings,
        taxUrl,
        portfolioUrl,
        loanAmt,
        type,
        bankName: localStorage.getItem("user_ifsc"),
        mobileNo: JSON.parse(Cookies.get('user'))[0].mobileNo,
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
        window.location.href = "/userDashboard";
      });
    setTimeout(() => {
      window.location.href = "/userDashboard";
    }, 2000);
    setExpenses("");
    setSavings("");
    setTaxUrl("");
    setPortfolioUrl("");
  };
  let myWidget = window.cloudinary.createUploadWidget({
    cloudName: 'projectcloudat7', 
    uploadPreset: 'at7_upload_preset'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        
        setTaxUrl(result.info.url)
        
      }
    }
  )
  const widgetFunc=(event)=>{
    myWidget.open()
    event.stopPropagation();
  }

  return (
    <><p className="text-5xl font-bold text-center text-white mt-10">
    Add Financial Details
  </p>
  <p className="text-2xl font-medium text-center text-white mt-10">It is mandatory to upload your income tax statement image inorder to check your cashflows.</p>
    <div className="w-screen h-screen flex justify-around items-start mt-36 flex-wrap">
      <img src="Form1.svg" className="w-1/2 md:w-1/2 lg:w-1/3"></img>
      <div className="md:h-[70%] w-[100%] h-[80%] md:w-[50%] border-2 mx-3 my-3 border-white text-black bg-black flex flex-col items-center justify-center rounded-md">
       <form
      onSubmit={submitHandler}
        className="flex flex-col w-full gap-2"
      >
        <p className="text-3xl font-bold text-center text-white mt-10">
   Submit your Documents
  </p>
  <input
          type="text"
          value={loanAmt}
          onChange={(e) => setloanAmt(e.target.value)}
          className="w-[50%] h-12 border-2 border-black p-2 rounded-md"
          placeholder="Loan Amount"
        />
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-[50%] h-12 border-2 border-black p-2 rounded-md"
          placeholder="Loan Type"
        />
        <input
          type="text"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
          className="w-[50%] h-12 border-2 border-black p-2 rounded-md"
          placeholder="Earnings"
        />
        <input
          type="text"
          value={savings}
          onChange={(e) => setSavings(e.target.value)}
          className="w-[50%] h-12 border-2 border-black p-2 rounded-md"
          placeholder="Savings"
        />
        <button
          type="submit"
          className="px-2 py-2 rounded-md border-2 btn-primary mt-3 md:w-1/4 w-1/2 mb-3 mx-auto my-auto"
        >
          Submit
        </button>
      </form>
      <button className="btn btn-primary sub-btn  mx-auto my-auto mt-0" style={{"marginBottom":"0.25rem",color:"white"}} onClick={(event)=>{widgetFunc(event)}} required>Upload Documents</button>

      </div>
      </div>
     
    
    </>
  );
};

export default AggForm;
