import './App.css'
import ProductOne from '../../../Furniture Rent/src/components/Product-Single.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import Products from './components/Products.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from './components/Pricing.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:productId' element={<ProductOne />} />
          <Route path="/pricing" element={<Pricing />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
