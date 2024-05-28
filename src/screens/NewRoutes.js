import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./Login";
import Navbar from "./components/Navbar";
import Home from "./Home";

import Category from "./components/Categories/Category";
import ShoppingMainPage from "./ShoppingMainPage";

const NewRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AddCategories" element={<Category />} />
        <Route path="/:category/:subcategory" element={<ShoppingMainPage />} />
      </Routes>
    </>
  );
};

export default NewRoutes;
