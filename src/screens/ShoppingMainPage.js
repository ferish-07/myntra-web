import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import { generateProducts } from "../data";
import { FixedSizeList as Grid } from "react-window";
import "./ShoppingMainPage.css";
import Filters from "./components/Filters";
import { Button } from "@mui/material";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import Header from "./components/Header";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const ShoppingMainPage = () => {
  const { category, subcategory } = useParams();
  const [productList, setProductList] = useState([]);
  const [allProductListLength, setAllProductListLength] = useState([]);
  const [focusView, setFocusView] = useState(null);
  const ITEMS_PER_PAGE = 50;
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuId, setMenuId] = useState(false);
  const [sortByMenuItems, setSortByMenuItems] = useState([
    { title: "Recommended" },
    { title: "What's New" },
    { title: "Popularity" },
    { title: "Better Discount" },
    { title: "Price: High to Low" },
    { title: "Price: Low to High" },
    { title: "Customer Rating" },
  ]);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const updateVisibleProducts = (page) => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setVisibleProducts(productList.slice(startIndex, endIndex));
  };

  const handleNext = () => {
    if (currentPage * ITEMS_PER_PAGE < productList.length) {
      setCurrentPage((prevPage) => {
        const newPage = prevPage + 1;
        updateVisibleProducts(newPage);
        return newPage;
      });
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => {
        const newPage = prevPage - 1;
        updateVisibleProducts(newPage);
        return newPage;
      });
    }
  };
  useEffect(() => {
    console.log("useEffect is running...");
    try {
      const products = generateProducts(5000);
      setAllProductListLength(products.length);
      setProductList(products);
      setVisibleProducts(products.slice(0, ITEMS_PER_PAGE));
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  }, []);

  const onPointer = (index) => {
    console.log("---------------------------------------------->>>>", index);
    setFocusView(index);
  };
  const CellRenderer = ({ products, index, style }) => {
    const product = products;

    return (
      <div
        key={index}
        className="m-2"
        style={{
          textAlign: "start",
          boxShadow:
            focusView == index ? "0px 4px 8px rgba(0, 0, 0, 0.2)" : null,
        }}
        onPointerEnter={() => onPointer(index)}
      >
        <div style={{}}>
          <img
            src={product.image}
            alt={product.name}
            style={{ backgroundColor: "red", width: "100%" }}
          />
          <div className="text-start">
            <strong className="text-dark">{product.brand}</strong>
            <div className="text-dark">{product.name}</div>
            <strong className="text-dark">
              ₹{product.finalPrice}{" "}
              <span className="fw-light" style={{ color: "grey" }}>
                <s>₹{product.price}</s>
              </span>
              <span style={{ fontSize: 14, color: "orange" }}>
                {" "}
                ({product.discount}% off)
              </span>
            </strong>
            {/* <span >⭐ {product.rating}</span> */}
          </div>
        </div>
      </div>
    );
  };

  const menuClicked = (index) => {
    setMenuVisible(!menuVisible);
    setMenuId(index);
  };

  const SortByDropdown = () => {
    return (
      <div
        className="relative inline-block text-left"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="cursor-pointer px-2 py-1 w-64 border-2 text-[16px] flex ">
          <div className="text-[black]">{`Sort By:`}&nbsp;</div>
          <div className="font-bold">
            {sortByMenuItems[selectedOption]?.title}
          </div>
        </div>

        {isHovered && (
          <div className="absolute  w-64 bg-white border border-gray-300  shadow-lg z-10">
            {sortByMenuItems.map((option, index) => (
              <div
                key={index}
                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                  selectedOption == index ? "bg-gray-100" : null
                }`}
                onClick={() => {
                  console.log("-------------------", option);
                  setSelectedOption(index);
                }}
              >
                {option.title}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ color: "red" }}>{`${category}------${subcategory}`}</h1>

      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "row",
          // backgroundColor: "red",
          // justifyContent: "center",
        }}
      >
        <div className="hidden sm:flex w-[20%]">
          <Filters />
        </div>
        <div>
          <div
            className="text-black p-[11px]"
            style={{
              // width: "15%",

              // borderRightWidth: 1,
              borderBottomWidth: menuVisible ? 0 : 1,
              textAlign: "left",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="flex">
              <div
                className="cursor-pointer hover:bg-[#eeeeee] p-[3px] rounded-[20px] px-[8px] text-[14px] justify-center items-center content-center flex text-[#282c3f] font-text-family"
                onClick={() => menuClicked(1)}
              >
                Bundles
                <KeyboardArrowDownIcon />
              </div>
              <div
                className="cursor-pointer hover:bg-[#eeeeee] p-[3px] rounded-[20px] px-[8px] text-[14px] justify-center items-center content-center flex text-[#282c3f] font-text-family"
                onClick={() => menuClicked(2)}
              >
                Country of Origin
                <KeyboardArrowDownIcon />
              </div>
              <div
                className="cursor-pointer hover:bg-[#eeeeee] p-[3px] rounded-[20px] px-[8px] text-[14px] justify-center items-center content-center flex text-[#282c3f] "
                onClick={() => menuClicked(3)}
              >
                Size
                <KeyboardArrowDownIcon />
              </div>
            </div>
            <SortByDropdown />
          </div>
          {menuVisible && <></>}
          <div
            className="grid grid-cols-2 sm:grid-cols-5"
            style={{ borderBottomWidth: 2, paddingLeft: 20, paddingRight: 20 }}
          >
            {visibleProducts.map((item, index) => {
              return <CellRenderer index={index} products={item} />;
            })}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Button
              variant="contained"
              disabled={currentPage == 1 ? true : false}
              onClick={handlePrevious}
              style={{ width: "10%" }}
            >
              {"< "}Previous
            </Button>
            <li></li>
            <div style={{ color: "gray" }}>
              {" "}
              Page {currentPage} of {allProductListLength / ITEMS_PER_PAGE}{" "}
            </div>
            <li></li>
            <Button
              variant="contained"
              onClick={handleNext}
              style={{ width: "10%" }}
            >
              Next{" >"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingMainPage;
