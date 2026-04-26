import React from 'react'
import App from './App'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './Components/Login'

const Router = createBrowserRouter([
    { path :"/login", element: <Login/>},
]);

export default Router;