import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Products from "../Pages/AddProduct/AddProducts";
import Login from "../Pages/Login/Login";
import ClickData from "../Pages/ClickData";
import AllProducts from "../Pages/Products/AllProducts";
import SingleProductRQ from "../Pages/Products/SingleProductRQ";
import Navbar from "../Components/Navbar";
import AddProducts from "../Pages/AddProduct/AddProducts";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<ClickData />} />
        <Route path="/all-product" element={<AllProducts />} />
        <Route path="/all-product/:productId" element={<SingleProductRQ />} />
        <Route path="/add-product" element={<AddProducts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
