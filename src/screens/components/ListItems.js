import React, { useState } from "react";

import Slider from "@mui/material/Slider";
import { CheckBox } from "./Checkbox";

const ListItems = ({ category, subcategory }) => {
  const [selectIds, setSelectedIds] = useState({});
  const [value, setValue] = React.useState([300, 2300]);
  function valuetext(value) {
    return `${value}`;
  }

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - 100), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + 100)]);
    }
  };

  const onCheckBoxClicked = (id, type) => {
    let new_obj = { ...selectIds };
    if (new_obj[type]) {
      if (new_obj[type].includes(id)) {
        let obj = new_obj[type].filter((num) => num !== id);
        new_obj[type] = obj;
      } else {
        new_obj[type].push(id);
      }
    } else {
      new_obj[type] = [id];
    }
    setSelectedIds(new_obj);
  };
  return (
    <div className="my-[16px] ">
      <h3 className="text-xs ml-5 text-black">
        Home/ {category} / {subcategory}
      </h3>
      <div className="mt-[10px]  ml-5">
        <h3 className="text-xs  text-black">{subcategory} - 155145 items</h3>
      </div>
      <div className="mt-[15px] flex-row flex">
        <div className="sm:w-[18%]">
          <div className="py-3 border-b-[1px] border-slate-200 pl-5">
            <h3 className="sm:text-lg lg:text-lg text-lg font-bold text-black">
              Filters
            </h3>
          </div>
        </div>
        <div className="w-full py-3 border-b-[1px] border-slate-200 flex-row flex">
          <div className="ml-5">
            <h3 className="text-lg text-slate-300">Bundles</h3>
          </div>
          <div className="ml-5">
            <h3 className="text-lg text-slate-300">country of origin</h3>
          </div>
          <div className="ml-5">
            <h3 className="text-lg text-slate-300">size</h3>
          </div>
        </div>
      </div>
      <div className="flex-row flex">
        <div className="sm:w-[18%]">
          <div className="py-3 border-r-[1px] border-b-[1px] border-slate-200  pl-5">
            <h3 className="sm:text-sm lg:text-base text-base font-bold text-black">
              Categories
            </h3>
            <div className="mt-3">
              <CheckBox
                data={[
                  {
                    id: 1,
                    title: "T-Shirts",
                    count: 154325,
                  },
                  {
                    id: 2,
                    title: "Lounge Tshirts",
                    count: 1258,
                  },
                ]}
                type={"categories"}
                onCheckBoxClicked={onCheckBoxClicked}
                selectIds={selectIds}
              />
            </div>
          </div>
          <div className="py-3 border-r-[1px] border-b-[1px] border-slate-200  pl-5">
            <h3 className="sm:text-sm lg:text-base text-base font-bold text-black">
              Brands
            </h3>
            <div className="mt-3">
              <CheckBox
                data={[
                  {
                    id: 1,
                    title: "Roadster",
                    count: 4723,
                  },
                  {
                    id: 2,
                    title: "macmerise",
                    count: 4490,
                  },
                  {
                    id: 3,
                    title: "Frisker",
                    count: 3522,
                  },
                  {
                    id: 4,
                    title: "GreyLongg",
                    count: 3522,
                  },
                  {
                    id: 5,
                    title: "Tommy Hilfiger",
                    count: 3522,
                  },
                  {
                    id: 6,
                    title: "HRX by Hrithik Roshan",
                    count: 3522,
                  },
                  {
                    id: 7,
                    title: "U.S. Polo Assn.",
                    count: 2931,
                  },
                  {
                    id: 8,
                    title: "WROGN",
                    count: 225,
                  },
                  {
                    id: 9,
                    title: "Allen Solly",
                    count: 828,
                  },
                ]}
                type={"brands"}
                onCheckBoxClicked={onCheckBoxClicked}
                selectIds={selectIds}
              />
            </div>
          </div>
          <div className="py-3 border-r-[1px] border-b-[1px] border-slate-200  pl-5">
            <h3 className="sm:text-sm lg:text-base text-base font-bold text-black">
              Brands
            </h3>
            <div className="mt-3">
              <Slider
                getAriaLabel={() => "Minimum distance"}
                min={100}
                max={2300}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
                style={{ width: "80%" }}
              />
              <h1 style={{ color: "#000000" }} className="font-medium">
                ₹{value[0]}-₹{value[1]}+
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full py-3 ">
          {/* <div className='ml-5'>
                        <h3 className='text-l text-slate-300'>Bundles</h3>
                    </div>
                    <div className='ml-5'>
                        <h3 className='text-l text-slate-300'>country of origin</h3>
                    </div>
                    <div className='ml-5'>
                        <h3 className='text-l text-slate-300'>size</h3>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default ListItems;
