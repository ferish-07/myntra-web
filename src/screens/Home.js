import React from "react";
import Navbar from "./components/Navbar";
import "./Home.css";
import imageOne from "./utils/Images/DashBoard_C1.webp";
import imageTwo from "./utils/Images/DashBoard_C2.webp";
import {
  IMAGE_LIST_DASHBOARD_COUROSOL,
  IMAGE_LIST_GLOBAL_BRANDS,
} from "./utils/Common/Utils";
import MainCarousel from "./components/MainCarousel";
const Home = () => {
  const social_media_image_link = [
    "https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png",
    "https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png",
    "https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png",
    "https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png",
  ];
  return (
    <div>
      <Navbar />

      <MainCarousel />

      <div
        style={{
          marginTop: 10,

          display: "flex",
          paddingLeft: 15,
        }}
      >
        <h3 style={{ color: "black", letterSpacing: 1.5 }}>
          GRAND GLOBAL BRANDS
        </h3>
      </div>

      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ marginTop: 10 }}
      >
        <div className="carousel-inner">
          {IMAGE_LIST_GLOBAL_BRANDS.map((item, index) => {
            return (
              <div
                className={
                  index == 0 ? "carousel-item active" : "carousel-item"
                }
              >
                <div style={{ flexDirection: "row", display: "flex", flex: 1 }}>
                  {item.images.map((link) => {
                    return (
                      <div style={{ display: "flex", flex: 1 }}>
                        <img src={link} className="d-block w-100" alt="..." />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div style={{ backgroundColor: "#f5f5f6", height: 500 }}>
        <div
          style={{
            marginTop: 8,
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",

            // padding: 10,
          }}
        >
          <div
            style={{
              // width: "25%",

              padding: 20,
            }}
          >
            <ul
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <a style={{ color: "black", fontSize: 12, fontWeight: "bold" }}>
                ONLINE SHOPPING
              </a>
              <li style={{ color: "black", fontSize: 14, marginTop: 10 }}>
                Men
              </li>
              <li style={{ color: "black", fontSize: 14 }}>Women</li>
              <li style={{ color: "black", fontSize: 14 }}>Kids</li>
              <li style={{ color: "black", fontSize: 14 }}>Home & Living</li>
              <li style={{ color: "black", fontSize: 14 }}>Beauty</li>
              <li style={{ color: "black", fontSize: 14 }}>Gift Cards</li>
              <li style={{ color: "black", fontSize: 14 }}>Myntra Insider</li>
            </ul>
            <ul
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <a
                style={{
                  color: "black",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginTop: 10,
                }}
              >
                USEFULL LINKS
              </a>
              <li style={{ color: "black", fontSize: 14, marginTop: 10 }}>
                Blogs
              </li>
              <li style={{ color: "black", fontSize: 14 }}>Careers</li>
              <li style={{ color: "black", fontSize: 14 }}>Site Map</li>
              <li style={{ color: "black", fontSize: 14 }}>
                Corporate Information
              </li>
              <li style={{ color: "black", fontSize: 14 }}>Whitehat</li>
              <li style={{ color: "black", fontSize: 14 }}>Cleartrip</li>
            </ul>
          </div>
          <div
            style={{
              // width: "25%",
              padding: 20,
            }}
          >
            <ul
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <a
                style={{
                  color: "black",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                CUSTOMER POLICIES
              </a>
              <li style={{ color: "black", fontSize: 14, marginTop: 10 }}>
                Contact Us
              </li>
              <li style={{ color: "black", fontSize: 14 }}>FAQ</li>
              <li style={{ color: "black", fontSize: 14 }}>T&C</li>
              <li style={{ color: "black", fontSize: 14 }}>Terms of Use</li>
              <li style={{ color: "black", fontSize: 14 }}>Track Orders</li>
              <li style={{ color: "black", fontSize: 14 }}>Shipping</li>
              <li style={{ color: "black", fontSize: 14 }}>Cancellation</li>
              <li style={{ color: "black", fontSize: 14 }}>Returns</li>
              <li style={{ color: "black", fontSize: 14 }}>Privacy Policy</li>
              <li style={{ color: "black", fontSize: 14 }}>
                Grievance Officers
              </li>
            </ul>
          </div>
          <div
            style={{
              // width: "25%",
              padding: 20,
            }}
          >
            <ul
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <a
                style={{
                  color: "black",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                EXPERIENCE MYNTRA APP ON MOBILE
              </a>

              <div style={{ marginTop: 10 }}>
                <img
                  src={
                    "https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                  }
                  style={{ width: 150 }}
                />
                <img
                  src={
                    "https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                  }
                  style={{ width: 150, height: 48 }}
                />
              </div>
              <a
                style={{
                  color: "black",
                  fontSize: 12,
                  marginTop: 20,
                  fontWeight: "bold",
                }}
              >
                KEEP IN TOUCH
              </a>
              <div>
                {social_media_image_link.map((link, index) => {
                  return (
                    <img src={link} style={{ width: 20, marginRight: 10 }} />
                  );
                })}
              </div>
            </ul>
          </div>

          <div
            style={{
              // width: "25%",
              padding: 20,
            }}
          >
            <div style={{ display: "flex" }}>
              <div>
                <img
                  src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                  style={{ width: 80 }}
                />
              </div>
              <div
                style={{
                  width: "50%",
                }}
              >
                <text style={{ color: "black", fontWeight: "bold" }}>
                  100% ORIGINAL{" "}
                </text>
                <text style={{ color: "black", fontWeight: "bold" }}>
                  guarantee for all products at myntra.com
                </text>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <img
                  src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"
                  style={{ width: 80 }}
                />
              </div>
              <div style={{ width: "50%" }}>
                <text style={{ color: "black", fontWeight: "bold" }}>
                  Return within 14days{" "}
                </text>
                <text style={{ color: "black", fontWeight: "bold" }}>
                  of receiving your order
                </text>
              </div>
            </div>
          </div>
        </div>

        <hr
          style={{
            backgroundColor: "grey",
            height: 2,
            marginLeft: 340,
            marginRight: 340,
            // ju,
          }}
        />
        <div
          style={{
            color: "black",
            fontSize: 12,
            fontWeight: 700,
            backgroundColor: "#f5f5f6",
            marginLeft: 340,
            marginRight: 340,
            display: "flex",
            width: 140,
            position: "absolute",
            marginTop: -25,
          }}
          // className="desktop-pSearchTitle"
        >
          POPULAR SEARCHS
        </div>
      </div>
    </div>
  );
};

export default Home;
