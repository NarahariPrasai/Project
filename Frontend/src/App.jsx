import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import About from './Components/About'
import Search from './Components/Search'
import Wishlist from './Components/Wishlist'
import Cart from './Components/Cart'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Orders from './Components/Orders'
import Contact from './Components/Contact'
import Collection from './Components/Collection.jsx'


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
    path: "/search",
    element:     
    <div>
      <Navbar/>
      <Search/>
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