import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Notfound from './pages/notfound/Notfound'
import Signup from './pages/signup/Signup'
import Footer from './components/Footer'
import Wishlist from './components/Wishlist'
import Cart from './components/Cart'
import Profile from './components/Profile'
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/wishlist' element={<Wishlist />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path='/*' element={<Notfound />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App