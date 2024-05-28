import React, { useEffect, useState } from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllSectionDataAction,
  resetAction,
} from "../redux/action/CategoryAction";
import { ALL_SECTION } from "../redux/store/Types";
import { API_GET_SECTION_DATA } from "../redux/Urls";

import Logo from "../utils/Images/myntraLogo.png";
const Navbar = () => {
  const [navbarData, setNavBarData] = useState([
    {
      _id: "662919da294df208526847c8",
      category_id: 101,
      category_name: "MEN",
      sections: [
        {
          _id: "66291c1f79079334d35a7984",
          section_id: 101,
          section_name: "Topwear",
          category_id: 101,
          column_no: 1,
          __v: 0,
          sub_sections: [
            {
              _id: "66291dc8d114dd6ffe114541",
              sub_section_id: 101,
              sub_section_name: "T-Shirts",
              section_id: 101,
              __v: 0,
            },
            {
              _id: "66292f9b0f585dd93b7b3980",
              sub_section_id: 104,
              sub_section_name: "Casual Shirts",
              section_id: 101,
              __v: 0,
            },
            {
              _id: "66292fa40f585dd93b7b3984",
              sub_section_id: 105,
              sub_section_name: "Formal Shirts",
              section_id: 101,
              __v: 0,
            },
            {
              _id: "66292fb20f585dd93b7b3988",
              sub_section_id: 106,
              sub_section_name: "Sweatshirts",
              section_id: 101,
              __v: 0,
            },
            {
              _id: "66292fbb0f585dd93b7b398c",
              sub_section_id: 107,
              sub_section_name: "Sweaters",
              section_id: 101,
              __v: 0,
            },
            {
              _id: "66292fc30f585dd93b7b3990",
              sub_section_id: 108,
              sub_section_name: "Jackets",
              section_id: 101,
              __v: 0,
            },
            {
              _id: "66292fcf0f585dd93b7b3994",
              sub_section_id: 109,
              sub_section_name: "Blazers & Coats",
              section_id: 101,
              __v: 0,
            },
            {
              _id: "66292fd60f585dd93b7b3998",
              sub_section_id: 110,
              sub_section_name: "Suits",
              section_id: 101,
              __v: 0,
            },
            {
              _id: "66292fdf0f585dd93b7b399c",
              sub_section_id: 111,
              sub_section_name: "Rain Jackets",
              section_id: 101,
              __v: 0,
            },
          ],
        },
        {
          _id: "66292f590f585dd93b7b397c",
          section_id: 103,
          section_name: "Indian & Festive Wear",
          category_id: 101,
          column_no: 1,
          __v: 0,
          sub_sections: [
            {
              _id: "6629315d0f585dd93b7b39a0",
              sub_section_id: 112,
              sub_section_name: "Kurtas",
              section_id: 103,
              __v: 0,
            },
            {
              _id: "662931620f585dd93b7b39a4",
              sub_section_id: 113,
              sub_section_name: "Sherwanis",
              section_id: 103,
              __v: 0,
            },
            {
              _id: "6629316e0f585dd93b7b39a8",
              sub_section_id: 114,
              sub_section_name: "Nehru jackets",
              section_id: 103,
              __v: 0,
            },
            {
              _id: "662931760f585dd93b7b39ac",
              sub_section_id: 115,
              sub_section_name: "Dhotis",
              section_id: 103,
              __v: 0,
            },
          ],
        },
        {
          _id: "662931f50f585dd93b7b39b0",
          section_id: 104,
          section_name: "Bottomwear",
          category_id: 101,
          column_no: 2,
          __v: 0,
          sub_sections: [
            {
              _id: "6629324a0f585dd93b7b39bc",
              sub_section_id: 116,
              sub_section_name: "Jeans",
              section_id: 104,
              __v: 0,
            },
            {
              _id: "662932520f585dd93b7b39c0",
              sub_section_id: 117,
              sub_section_name: "Casual Trousers",
              section_id: 104,
              __v: 0,
            },
            {
              _id: "6629325a0f585dd93b7b39c4",
              sub_section_id: 118,
              sub_section_name: "Formal Trousers",
              section_id: 104,
              __v: 0,
            },
            {
              _id: "662932660f585dd93b7b39c8",
              sub_section_id: 119,
              sub_section_name: "Shorts",
              section_id: 104,
              __v: 0,
            },
            {
              _id: "662932760f585dd93b7b39cc",
              sub_section_id: 120,
              sub_section_name: "Track Pants & Joggers",
              section_id: 104,
              __v: 0,
            },
          ],
        },
        {
          _id: "662932020f585dd93b7b39b4",
          section_id: 105,
          section_name: "Innerwear & sleepwear",
          category_id: 101,
          column_no: 2,
          __v: 0,
          sub_sections: [
            {
              _id: "662932860f585dd93b7b39d0",
              sub_section_id: 121,
              sub_section_name: "Brief & Trunks",
              section_id: 105,
              __v: 0,
            },
            {
              _id: "6629328d0f585dd93b7b39d4",
              sub_section_id: 122,
              sub_section_name: "Boxers",
              section_id: 105,
              __v: 0,
            },
            {
              _id: "662932920f585dd93b7b39d8",
              sub_section_id: 123,
              sub_section_name: "Vests",
              section_id: 105,
              __v: 0,
            },
            {
              _id: "6629329e0f585dd93b7b39dc",
              sub_section_id: 124,
              sub_section_name: "Sleepwear & Loungewear",
              section_id: 105,
              __v: 0,
            },
            {
              _id: "662932a40f585dd93b7b39e0",
              sub_section_id: 125,
              sub_section_name: "Thermals",
              section_id: 105,
              __v: 0,
            },
          ],
        },
        {
          _id: "6629320b0f585dd93b7b39b8",
          section_id: 106,
          section_name: "Plus Size",
          category_id: 101,
          column_no: 2,
          __v: 0,
          sub_sections: [],
        },
      ],
    },
    {
      _id: "66291a09294df208526847cc",
      category_id: 102,
      category_name: "WOMEN",
      sections: [
        {
          _id: "66292d830f585dd93b7b3970",
          section_id: 102,
          section_name: "Indian & Fusion Wear",
          category_id: 102,
          column_no: 1,
          __v: 0,
          sub_sections: [
            {
              _id: "66292dca0f585dd93b7b3974",
              sub_section_id: 102,
              sub_section_name: "Kurtas & Suits",
              section_id: 102,
              __v: 0,
            },
            {
              _id: "66292df40f585dd93b7b3978",
              sub_section_id: 103,
              sub_section_name: "Sarees",
              section_id: 102,
              __v: 0,
            },
          ],
        },
      ],
    },
    {
      _id: "66291a0f294df208526847d0",
      category_id: 103,
      category_name: "KIDS",
      sections: [],
    },
    {
      _id: "66291a25294df208526847d4",
      category_id: 104,
      category_name: "HOME & LIVING",
      sections: [],
    },
    {
      _id: "66291a2e294df208526847d8",
      category_id: 105,
      category_name: "BEAUTY",
      sections: [],
    },
    {
      _id: "66291a35294df208526847dc",
      category_id: 106,
      category_name: "STUDIO",
      sections: [],
    },
  ]);

  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const dispatch = useDispatch();
  const { allSectionData } = useSelector((store) => store.CategoryReducers);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    callMainAPi();
  }, []);
  const callMainAPi = () => {
    dispatch(resetAction(ALL_SECTION));

    let url = API_GET_SECTION_DATA;
    dispatch(getAllSectionDataAction(url));
  };

  useEffect(() => {
    console.log(
      "-----------------allSectionData------------------------------",
      JSON.stringify(allSectionData?.data)
    );
    if (allSectionData) {
      if (!allSectionData.error_status && allSectionData?.data) {
        let arr = allSectionData?.data;

        arr.map((i) => {
          let arr = [];
          i.sections.map((i2) => {
            arr.push(i2.column_no);
            i.parts = [...new Set(arr)];
          });
        });

        setNewData(arr);
        console.log("-----ddd------", JSON.stringify(arr));
      }
    }
  }, [allSectionData]);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <div
        style={{
          width: "5%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <img src={Logo} style={{ width: 50, height: 50 }} />
      </div>
      <ul className="menu">
        {newData.map((i) => {
          return (
            <li>
              <a style={{ fontSize: 14, margin: "0px" }}>{i.category_name}</a>
              <ul className="submenu">
                {i.parts
                  ? i.parts.map((i2, index) => {
                      return (
                        <div>
                          {i.sections.map((i3) => {
                            if (i2 == i3.column_no) {
                              return (
                                <li
                                  style={{
                                    flexDirection: "column",
                                  }}
                                >
                                  <a
                                    style={{
                                      color: "black",
                                      // backgroundColor: "yellow",
                                      display: "flex",
                                      // alignItems: "flex-start",
                                      justifyContent: "flex-start",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {i3.section_name}
                                  </a>
                                  {/* <div> */}
                                  {i3.sub_sections.map((i4) => {
                                    return (
                                      // <Link
                                      //   style={{
                                      //     display: "flex",
                                      //     justifyContent: "flex-start",
                                      //   }}
                                      //   to={`${i.category_name.toLowerCase()}/${i4.sub_section_name
                                      //     .replace(" ", "")
                                      //     .replace("-", "")
                                      //     .toLowerCase()}`}
                                      // >
                                      <li
                                        onClick={() => {
                                          console.log(
                                            "-----ssdsdsdsdsddsdsdsd-------",
                                            `${i.category_name.toLowerCase()}/${i4.sub_section_name
                                              .replaceAll(" ", "")
                                              .replace("-", "")
                                              .toLowerCase()}`
                                          );
                                          navigateTo(
                                            `/${i.category_name.toLowerCase()}/${i4.sub_section_name
                                              .replaceAll(" ", "")
                                              .replace("-", "")
                                              .toLowerCase()}`
                                          );
                                        }}
                                      >
                                        <a className="sub_section_title">
                                          {i4.sub_section_name}
                                        </a>
                                      </li>
                                      // </Link>
                                    );
                                  })}
                                  {/* </div> */}
                                </li>
                              );
                            }
                          })}
                        </div>
                      );
                    })
                  : null}
              </ul>
            </li>
          );
        })}
      </ul>
      <div className="dashboard-search-bar">
        <SearchIcon style={{ color: "#696e79", marginRight: "5px" }} />
        <input className="inputStyle" rows={1} />
      </div>

      <div className="profile-nav-bar">
        <ul className="menu">
          <li>
            <a>
              <Person2OutlinedIcon
                className="profile-nav-bar-icon"
                onClick={() => console.log("-----FERISH Modi-------")}
              />
            </a>
            <ul
              className="submenu"
              style={{ width: "20%", right: 60, flexDirection: "column" }}
            >
              <li
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  padding: 10,
                }}
              >
                <a
                  style={{
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Welcome
                </a>
                <a style={{ textAlign: "start", color: "#747683" }}>
                  To access account and manage orders
                </a>
                {/* </div> */}
                <Link
                  className="login-button-option"
                  style={{
                    padding: "5px",
                    paddingLeft: "5px",
                    color: "#fe4872",
                    fontWeight: "bold",
                  }}
                  to={"/Login"}
                >
                  Login/SignUp
                </Link>
                <a
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    width: "100%",
                    marginTop: "10px",
                  }}
                />
                <a style={{ color: "#747683" }}>Orders</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="menu">
          <li>
            <a>
              <FavoriteBorderOutlinedIcon className="profile-nav-bar-icon" />
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li>
            <a>
              <ShoppingBagOutlinedIcon className="profile-nav-bar-icon" />
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li>
            <Link to={"/AddCategories"}>
              <CategoryIcon className="profile-nav-bar-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
