import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Login from "../Pages/Login/Login";
import ClickData from "../Pages/ClickData";
import AllProducts from "../Pages/Products/AllProducts";
import SingleProductRQ from "../Pages/Products/SingleProductRQ";
import Navbar from "../Components/Navbar";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<ClickData />} />
        <Route path="/all-product" element={<AllProducts />} />
        <Route path="/all-product/:productId" element={<SingleProductRQ />} />
        <Route path="/product" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
