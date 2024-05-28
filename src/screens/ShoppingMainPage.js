import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./components/Navbar";

const ShoppingMainPage = () => {
  const { category, subcategory } = useParams();

  console.log("---category---", category, subcategory);

  return (
    <div>
      <Navbar />
      <h1 style={{ color: "red" }}>{`${category}------${subcategory}`}</h1>
    </div>
  );
};

export default ShoppingMainPage;
