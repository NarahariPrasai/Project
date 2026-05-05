import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import SearchBar from "./Components/SearchBar";

const Layout = () => {
  return (
    <>
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