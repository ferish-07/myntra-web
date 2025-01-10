import React from "react";
import { Route, Router, Routes } from "react-router-dom";

import PracticeHome from "./PracticeHome";

const PracticeRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PracticeHome />} />
        {/* <Route path="/Login" element={<Login />} />
        <Route path="/AddCategories" element={<Category />} />
        <Route path="/:category/:subcategory" element={<ShoppingMainPage />} /> */}
      </Routes>
    </>
  );
};

export default PracticeRoutes;
