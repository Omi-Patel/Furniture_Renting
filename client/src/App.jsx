import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import ProductOne from "../../client/src/components/Product-Single.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import Products from "./components/Products.jsx";
import Pricing from "./components/Pricing.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Profile from "./components/Profile.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentVerify from "./components/PaymentVerify.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Loader from "./components/Loader.jsx";

function App() {

  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      console.log("In loader")
      setLoader(true)
    }, 1000)
  }, [])

  return (
    <>
      {
        loader ? 
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/signin"
              element={
                <ProtectedRouteForAuth>
                  <SignIn />
                </ProtectedRouteForAuth>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRouteForAuth>
                  <SignUp />
                </ProtectedRouteForAuth>
              }
            />
            <Route path="/products" element={<Products />} />
            <Route
              path="/product/:productId"
              element={
                <ProtectedRoute>
                  <ProductOne />
                </ProtectedRoute>
              }
            />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/profile/:userId"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <ProtectedRouteForAdmin>
                  <Dashboard />
                </ProtectedRouteForAdmin>
              }
            />

            <Route
              path="/paymentsuccess"
              element={
                <ProtectedRoute>
                  <PaymentVerify />
                </ProtectedRoute>
              }
            />
          </Routes>
          <ToastContainer />

          <Footer />
        </BrowserRouter>
         : <Loader />
      }
    </>

  );
}

export default App;

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return children;
  } else {
    return <Navigate to={"/signin"} />;
  }
};

export const ProtectedRouteForAuth = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

export const ProtectedRouteForAdmin = ({ children }) => {
  const userEmail = localStorage.getItem("userEmail");
  if (userEmail === import.meta.env.VITE_ADMIN_LOGIN) {
    return children;
  } else {
    return <Navigate to={"/signin"} />;
  }
};
