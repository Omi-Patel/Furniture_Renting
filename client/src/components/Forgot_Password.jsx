import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Forgot_Password() {
    const [number, setNumber] = useState("");
    const [otp, setOTP] = useState("");
    const [showOTPInput, setShowOTPInput] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const handleSubmitNumber = (e) => {
        e.preventDefault();
        if(number.length == 10) {
            toast.success("OTP Send Successfully!")
            setShowOTPInput(true);
        } else {
            toast.error("Number must have 10 digits!")
            setNumber("")
        }
        // Here you can add logic to send OTP to the user's phone number
    };

    const ResendOTP = (e) => {
        e.preventDefault()
        if(number.length == 10) {
            toast.success("OTP Resend Successfully!")
            setOTP("")
        } else {
            toast.error("Error While Resending OTP!")
            setOTP("")
        }
    }

    const handleVerifyOTP = (e) => {
        e.preventDefault();

        setTimeout(() => {
            navigate("/recover-password/new-password")
        }, 5500)
        toast.success(`OTP Verified: ${otp}`);
        // Here you can add logic to verify the OTP entered by the user
        // Once verified, you can proceed with resetting the password
    };

    return (
        <>
            <Helmet>
                <title>Recover Password</title>
            </Helmet>
            <section>
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <div className="mb-2 flex justify-center">
                            <img
                                src="/src/assets/Signin_SignUp.png"
                                width={100}
                                alt="Furniture Rentals"
                            />
                        </div>
                        <h2 className="text-center text-2xl font-bold leading-tight text-black">
                            Recover Your Password
                        </h2>
                        <form className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="number"
                                            placeholder="Phone number"
                                            id="number"
                                            value={number}
                                            onChange={(e) =>
                                                setNumber(e.target.value)
                                            }
                                        ></input>
                                    </div>
                                </div>
                                {showOTPInput && (
                                    <div>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="number"
                                                placeholder="OTP"
                                                id="OTP"
                                                value={otp}
                                                onChange={(e) =>
                                                    setOTP(e.target.value)
                                                }
                                            ></input>
                                            <button className="mt-2" onClick={ResendOTP}>Resend OTP</button>
                                        </div>
                                        <button
                                            className="mt-2 inline-flex items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 w-full"
                                            onClick={handleVerifyOTP}
                                        >
                                            Verify
                                        </button>
                                    </div>
                                )}
                                {!showOTPInput && (
                                    <div>
                                        <button
                                            className="mt-2 inline-flex items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 w-full"
                                            onClick={handleSubmitNumber}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                )}
                            </div>
                        </form>
                        <div className="mt-3 space-y-3">
                            <NavLink to={"/signin"}>
                                <button className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none">
                                    Back to SignIn
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
