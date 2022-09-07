import React from "react";

const AggForm = () => {
  const [expenses, setExpenses] = React.useState("");
  const [savings, setSavings] = React.useState("");
  const [taxUrl, setTaxUrl] = React.useState("");
  const [portfolioUrl, setPortfolioUrl] = React.useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(expenses, savings, taxUrl, portfolioUrl);
    fetch(`http://localhost:3001/user/addDetails`, {
      method: "PUT",
      body: JSON.stringify({
        expenses,
        savings,
        taxUrl,
        portfolioUrl,
        bankName: localStorage.getItem("user_ifsc") || "SBI",
        mobileNo: JSON.parse(localStorage.getItem("user")).mobileNo,
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
        window.location.href = "/dashboard";
      });
    setExpenses("");
    setSavings("");
    setTaxUrl("");
    setPortfolioUrl("");
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-blue-100 flex-col gap-y-9">
      <p className="text-3xl font-semibold text-center">
        Add Financial Details
      </p>
      <form
        onSubmit={submitHandler}
        className="h-[70%] w-[80%] md:w-[60%] border-2 border-black bg-white flex flex-col items-center justify-around rounded-md"
      >
        <input
          type="text"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
          className="w-[50%] h-12 border-2 border-black p-2 rounded-md"
          placeholder="Expenses"
        />
        <input
          type="text"
          value={savings}
          onChange={(e) => setSavings(e.target.value)}
          className="w-[50%] h-12 border-2 border-black p-2 rounded-md"
          placeholder="Savings"
        />
        <input
          type="text"
          value={taxUrl}
          onChange={(e) => setTaxUrl(e.target.value)}
          className="w-[50%] h-12 border-2 border-black p-2 rounded-md"
          placeholder="Tax Url"
        />
        <input
          type="text"
          value={portfolioUrl}
          onChange={(e) => setPortfolioUrl(e.target.value)}
          className="w-[50%] h-12 border-2 border-black p-2 rounded-md"
          placeholder="Portfolio Url"
        />
        <button
          type="submit"
          className="px-10 py-2 rounded-md border-2 border-black hover:bg-black hover:text-white hover:border-white hover:border-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AggForm;
