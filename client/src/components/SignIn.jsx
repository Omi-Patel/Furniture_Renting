import axios from "axios";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { Helmet } from "react-helmet";
import signinImg from '../../public/Images/Signin_SignUp.png'


export default function SignInThree() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //navigate
  const navigate = useNavigate();

  const loginHandle = async () => {
    if (!email || !password) {
      return toast.error("Provide All The Data..!");
    }

    try {
      const response = await fetch(
        import.meta.env.VITE_BASE_URL + `/api/users/login`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      //receiving response
      const loginData = await response.json();

      //condition
      if (loginData.error) {
        toast.error(loginData.error);
      } else {
        setLoading(false);
        setEmail("");
        setPassword("");
        toast.success(loginData.success);
        navigate("/");

        const token = loginData?.token;
        localStorage.setItem("token", loginData?.token);

        const decoded = jwtDecode(token);
        const response = await axios.post(
          import.meta.env.VITE_BASE_URL + `/api/users/verifyuser`,
          { token }
        );

        // console.log(response.data );

        localStorage.setItem("userId", response.data.decoded.user.id);
        localStorage.setItem("userEmail", response.data.decoded.user.email);
      }

      //
    } catch (error) {
      console.log(error);
    }
  };

  // const verifyToken = async () => {
  //   try {
  //     setIsVerified(response.data);
  //     console.log(isVerified);
  //   } catch (error) {
  //     console.error("Token verification failed", error);
  //   }
  // };

  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div>
      <Helmet>
        <title>
          Signin - Furniture Rentals
        </title>
      </Helmet>
    </div>
      <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center">
            <img src={signinImg} width={100} alt="Furniture Rentals" />

            <img src="https://i.ibb.co/hHDy6pv/logo.png" width={100} alt="Furniture Rentals" />
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 ">
              Don&apos;t have an account?{" "}
              <NavLink
                to={"/register"}
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Create a free account
              </NavLink>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <NavLink
                      to={"/recover-password/verify-otp"}
                      className="text-sm font-semibold text-black hover:underline"
                    >
                      {" "}
                      Forgot password?{" "}
                    </NavLink>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="myInput"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <input type="checkbox" onClick={myFunction} className="mt-4 mx-1 p-2" />Show Password
                  </div>
                </div>
                <div>
                  <button
                    onClick={loginHandle}
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Log In <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
