import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListItems from "./components/ListItems";

const ShoppingMainPage = () => {
  const { category, subcategory } = useParams();

  console.log("---category---", category, subcategory);

  return (
    <div className="flex-1  h-screen">
      <div className="bg-primary w-full flex-1 ">
        <div className="flex justify-center items-center">
          {/* <div className="xl:max-w-[1280px] w-full"> */}
          <Navbar />
          {/* </div> */}
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="px-6 sm:px-[125px]">
          <ListItems category={category} subcategory={subcategory} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingMainPage;
