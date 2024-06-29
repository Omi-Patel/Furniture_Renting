import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductOne from '../../client/src/components/Product-Single.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import Products from './components/Products.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
