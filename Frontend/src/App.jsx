import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import About from './Pages/About.jsx'
import Wishlist from './Pages/Wishlist.jsx'
import Cart from './Pages/Cart.jsx'
import Home from './Pages/Home.jsx'
import Navbar from './Components/Navbar'
import Orders from './Pages/Orders.jsx'
import Contact from './Pages/Contact.jsx'
import Collection from './Pages/Collection.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path: "/about",
    element:    
    <div>
      <Navbar/>
      <About/>
    </div>
  },
  {
    path: "/myorders",
    element:     
    <div>
      <Navbar/>
      <Orders/>
    </div>
  },
    {
    path: "/contact",
    element:     
    <div>
      <Navbar/>
      <Contact/>
    </div>
  },
    {
    path: "/collection",
    element:     
    <div>
      <Navbar/>
      <Collection/>
    </div>
  },
  {
    path: "/wishlist",
    element:     
    <div>
      <Navbar/>
      <Wishlist/>
    </div>
  },
  {
    path: "/cart",
    element:     
    <div>
      <Navbar/>
      <Cart/>
    </div>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },

]);

const App = () => {
  return(
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <RouterProvider router = {router} />
    </div>
  )
};

export default App;