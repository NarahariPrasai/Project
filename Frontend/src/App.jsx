import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import About from './Pages/About.jsx'
import Wishlist from './Pages/Wishlist.jsx'
import Cart from './Pages/Cart.jsx'
import Home from './Pages/Home.jsx'
import Orders from './Pages/Orders.jsx'
import Contact from './Pages/Contact.jsx'
import Collection from './Pages/Collection.jsx'
import Product from './Pages/Product.jsx'
import PlaceOrder from './Pages/PlaceOrder.jsx'
import ShopContextProvider from './Context/ShopContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ShopContextProvider>
        <Layout />
      </ShopContextProvider>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/place-order", element: <PlaceOrder /> },
      { path: "/about", element: <About /> },
      { path: "/myorders", element: <Orders /> },
      { path: "/product/:productId", element: <Product/> },
      { path: "/contact", element: <Contact /> },
      { path: "/collection", element: <Collection /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/cart", element: <Cart /> },
    ]
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> }
]);

const App = () => {
  return(
  <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
  <RouterProvider router={router} />
  </div>
  )
};

export default App;