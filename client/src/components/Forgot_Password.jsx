import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';

export default function Forgot_Password() {
    const [email, setEmail] = useState("");
    const [otp, setOTP] = useState("");
    const [new_otp, setNew_otp] = useState("");
    const [showOTPInput, setShowOTPInput] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmitNumber = (e) => {
        e.preventDefault();
        if (email.includes("@") && confirm("Write only email from which you created the account because We are fetching the data using written email-id")) {
            setShowOTPInput(true);
            const generated_OTP = generateOTP();
            setNew_otp(generated_OTP);
            send_OTP_mail(generated_OTP);
        } else {
            toast.error("Email format is not proper!");
        }
    };

    const send_OTP_mail = (generated_OTP) => {
        const templateParams = {
            to_email: email,
            message: generated_OTP
        };

        emailjs.send(
            'service_1fx4v2a',
            'template_5956j18',
            templateParams,
            'RcJS2rrh_yC4RmUQh' // Add your EmailJS user ID here
        ).then((result) => {
            toast.success("OTP Sent Successfully!");
            console.log(result.text);
            setOTP("");
        }).catch((error) => {
            toast.error(error.message);
            setOTP("");
            setTimeout(() => {
                toast.success("Sending OTP again in a few seconds...");
                ResendOTP();
            }, 3000);
        });
    };

    function generateOTP() {
        let digits = '0123456789';
        let OTP = '';
        for (let i = 0; i < 6; i++) {
            OTP += digits[Math.floor(Math.random() * 10)];
        }
        return OTP;
    }

    const ResendOTP = (e) => {
        if (e) e.preventDefault();
        handleSubmitNumber(e);
    };

    const handleVerifyOTP = (e) => {
        e.preventDefault();
        if (otp === new_otp) {
            setTimeout(() => {
                navigate("/recover-password/new-password");
            }, 5000);
            toast.success("OTP Verified!");
        } else {
            toast.error("Incorrect OTP!");
        }
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
                                            type="email"
                                            placeholder="Your Email"
                                            id="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
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
                                                name="OTP"
                                                value={otp}
                                                onChange={(e) =>
                                                    setOTP(e.target.value)
                                                }
                                            />
                                            <button
                                                className="mt-2 inline-flex items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 w-full"
                                                id="resend"
                                                onClick={ResendOTP}
                                            >
                                                Resend OTP
                                            </button>
                                        </div>
                                        <button
                                            className="mt-2 inline-flex items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 w-full"
                                            id="verify"
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
                                            id="submit"
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
