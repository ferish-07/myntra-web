import React, { useState } from "react";
import { brandList, colorsData } from "../../data";
import { CheckBox } from "@mui/icons-material";
import { Checkbox, Slider } from "@mui/material";
import "./Filter.css";

const Filters = () => {
  const [PriceRange, setPriceRange] = useState([0, 5000]);
  const [filters, setFilters] = useState([
    {
      title: "CATEGORIES",
      data: [{ title: "T-Shirt" }, { title: "Lounge T-Shirts" }],
    },
    { title: "BRANDS", data: [...brandList] },
    { title: "PRICE", data: [] },
    { title: "COLORS", data: [...colorsData] },
    {
      title: "DISCOUNT RANGE",
      data: [
        { title: "10% and above" },
        { title: "20% and above" },
        { title: "30% and above" },
        { title: "40% and above" },
        { title: "50% and above" },
        { title: "60% and above" },
        { title: "70% and above" },
        { title: "80% and above" },
        { title: "90% and above" },
      ],
    },
  ]);
  function valuetext(value) {
    return `${value}°C`;
  }
  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
    console.log("--------------new value", newValue);
  };

  return (
    <div
      className=""
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        textAlign: "start",
        // backgroundColor: "red",
        // borderRightWidth: 1,
      }}
    >
      <div
        className="text-black p-[18px] vertical-filters-header"
        style={{
          // width: "15%",
          // padding: 10,
          // paddingBottom: 17,
          // borderRightWidth: 1,
          borderBottomWidth: 1,
        }}
      >
        FILTERS
      </div>
      {filters.map((item) => {
        return (
          <div
            style={{
              borderBottomWidth: 1,
              padding: 15,
              borderRightWidth: 1,
              // marginRight: 10,
            }}
          >
            <div
              style={{
                // backgroundColor: "red"
                color: "black",
              }}
            >
              <div className="vertical-filters-header">{item.title}</div>
              <>
                {item?.data?.map((subitem, index) => {
                  return (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {index < 8 || item.title == "DISCOUNT RANGE" ? (
                        <>
                          <Checkbox
                            value={subitem.title}
                            inputProps={{
                              "aria-label": "Checkbox A",
                            }}
                            style={{ padding: 1 }}
                            size="small"
                          />

                          {item.title == "COLORS" ? (
                            <>
                              <div
                                style={{
                                  backgroundColor: subitem.colorCode,
                                  width: 15,
                                  height: 15,
                                  borderRadius: 100,
                                }}
                              />
                            </>
                          ) : null}
                          <div style={{}} className="vertical-filters-label">
                            &nbsp;{subitem.title}
                          </div>
                        </>
                      ) : null}
                    </div>
                  );
                })}
                {item.title == "PRICE" ? (
                  <>
                    <Slider
                      getAriaLabel={() => "Price range"}
                      value={PriceRange}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      max={5000}
                    />
                    <div style={{ color: "red" }}>
                      {`${PriceRange[0]}-${PriceRange[1]}`}
                    </div>
                  </>
                ) : null}
                {item?.data.length > 8 && item.title != "DISCOUNT RANGE" ? (
                  <div className="text-base text-pink-500">{`+ ${
                    item?.data.length - 8
                  } More`}</div>
                ) : null}
              </>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Filters;
