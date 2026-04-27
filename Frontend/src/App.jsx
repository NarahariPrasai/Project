import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import About from './Components/About'
import Search from './Components/Search'
import Wishlist from './Components/Wishlist'
import Cart from './Components/Cart'
import Home from './Components/Home'

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
    element: <Navbar/>
  },
  {
    path: "/register",
    element: <Register/>
  },

]);

const App = () => {
  return(
    <RouterProvider router={Router} />
  )
};

export default App;