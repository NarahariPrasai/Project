import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import SearchBar from "./Components/SearchBar";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <>
     <ToastContainer />
      <Navbar />
      <SearchBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;