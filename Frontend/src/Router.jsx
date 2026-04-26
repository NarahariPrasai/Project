import React from 'react'
import App from './App'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'

const Router = createBrowserRouter([
    { path :"/login", element: <Login/>},
    { path :"/register", element: <Register/>},
]);

export default Router;