import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function New_Password() {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const updatePassword = (e) => {
        e.preventDefault()
        if(password != confirmPassword) {
            toast.error("New password and Confirm Password are not similar!")
            setPassword("")
            setConfirmPassword("")
        } else if(password.length < 8) {
            toast.error("Password length must be grester than or equal to 8!")
            setPassword("")
            setConfirmPassword("")
        } else {
            toast.success("Password Updated Successfully!")
            navigate("/signin")
        }
    }

    function myFunction() {
        var x = document.getElementById("password");
        var y = document.getElementById("new_password")
        if (x.type === "password" && y.type === "password") {
          x.type = "text";
          y.type = "text";
        } else {
          x.type = "password";
          y.type = "password"
        }
      }

    return (
        <>
            <Helmet>
                <title>
                    Recover Password
                </title>
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
                                            type="password"
                                            placeholder="New Passwordr"
                                            id="password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            required
                                        ></input>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="password"
                                            placeholder="Confirm Passwordr"
                                            id="new_password"
                                            value={confirmPassword}
                                            onChange={(e) =>
                                                setConfirmPassword(e.target.value)
                                            }
                                            required
                                        ></input>
                                    </div>
                                    <input type="checkbox" onClick={myFunction} className="mt-4 mx-1 p-2" />Show Password
                                    <div>
                                        <button
                                            className="mt-2 inline-flex items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 w-full"
                                            onClick={updatePassword}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
