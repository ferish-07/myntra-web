import React from "react";
import { IMAGE_LIST_DASHBOARD_COUROSOL } from "../utils/Common/Utils";

const MainCarousel = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ marginTop: 10 }}
    >
      <div className="carousel-inner">
        {IMAGE_LIST_DASHBOARD_COUROSOL.map((link, index) => {
          return (
            <div
              className={index == 0 ? "carousel-item active" : "carousel-item"}
            >
              <img src={link} className="d-block w-100" alt="..." />
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
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MainCarousel;
