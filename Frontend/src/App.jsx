import React from 'react'
import Router from './Router'
import { RouterProvider } from 'react-router-dom'
import Login from './Components/Login'

const App = () => {
  return(
    <RouterProvider router={Router} />
  )
};

export default App;