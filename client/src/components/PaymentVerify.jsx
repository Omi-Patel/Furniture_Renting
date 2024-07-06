import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink, useNavigate } from "react-router-dom";

const PaymentVerify = () => {

  const [secondCounter, setSecondCounter] = useState(3)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Redirect_HomePage = () => {
    useEffect(() => {
      if(secondCounter > 0) {
        const intervalId = setInterval(() => {
          setSecondCounter(secondCounter => secondCounter - 1)
        }, 1000)
      } else {
        navigate("/")
      }
    }, [secondCounter, navigate, "/"])
  }

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <Helmet>
        <title>
          Payment Success
        </title>
      </Helmet>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-center items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-6.707l4-4a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414l1.293 1.293z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="text-2xl font-bold ml-2">Payment Successful</h1>
        </div>
          <h5>redirecting to home page in {secondCounter} seconds...</h5>
          {Redirect_HomePage()}
        {/* <NavLink to="/" className="text-white ml-2">
          <div className="bg-black rounded-lg p-4 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-6.707l4-4a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414l1.293 1.293z"
                clipRule="evenodd"
              />
            </svg>
            Go to Home
          </div>
        </NavLink> */}
      </div>
    </div>
  );
};

export default PaymentVerify;
