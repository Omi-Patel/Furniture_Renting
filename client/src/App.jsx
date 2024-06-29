import './App.css'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import NewsLetter from './components/NewsLetter.jsx'
import Pricing from './components/Pricing.jsx'
import Products from './components/Products.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
      <Pricing />
      <FAQ />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default App
