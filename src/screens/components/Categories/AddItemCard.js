import React, { useState } from "react";
import "./allFile.css";
import { Dropdown } from "../Dropdown";
import { MultiSelectDropDown } from "../MultiSelectDropDown";
import { TextField } from "@mui/material";

export const AddItemCard = ({ callMainAPi, allData, categoryArray }) => {
  const [sectionArray, setSectionArray] = useState([]);
  const [subSectionArray, setSubSectionArray] = useState([]);
  const [categoryValue, setCategoryValue] = useState("");
  const [SectionValue, setSectionValue] = useState("");
  const [brandArray, setBrandArray] = useState([
    { brand_id: 101, brand_name: "PUMA" },
  ]);
  const changeCategory = (event) => {
    console.log("---------------------irttt--", event, allData);
    setCategoryValue(event.category_id);
    setSectionArray([]);
    allData.map((i) => {
      if (i.category_id == event.category_id) {
        let section_array = [];
        i.sections.map((i2) => {
          section_array.push({
            section_id: i2.section_id,
            section_name: i2.section_name,
          });
          setSectionArray(section_array);
        });
      }
    });
  };
  const changeSection = (event) => {
    console.log("--------------CHNAGE SECRTIUON----", event);
    setSectionValue(event.section_id);
    setSubSectionArray([]);
    allData.map((i) => {
      if (i.category_id == categoryValue) {
        i.sections.map((i2) => {
          if (i2.section_id == event.section_id) {
            let sub_section_array = [];
            i2.sub_sections.map((i3) => {
              sub_section_array.push({
                sub_section_id: i3.sub_section_id,
                sub_section_name: i3.sub_section_name,
              });
            });
            setSubSectionArray(sub_section_array);
          }
        });
      }
    });
  };
  const changeSubSection = (option) => {
    console.log("---Sub-", option);
  };
  const changeBrand = (option) => {
    console.log("---Sub-", option);
  };
  const changeSize = (option) => {
    console.log("---Sub-", option);
  };
  return (
    <div
      style={{
        margin: 30,
        maxWidth: "500px",
        // flexGrow: 1,
        // width: "40%",
      }}
      className="add-item-card boxView"
    >
      <h5 className="text">AddItemCard</h5>
      <div
        style={{
          marginTop: 20,
          justifyContent: "space-around",
          display: "flex",
          // flexWrap: "wrap",
          // flex: 1,
        }}
      >
        <Dropdown
          itemArray={categoryArray}
          key={"category_id"}
          value={"category_name"}
          onClick={(option) => changeCategory(option)}
          textFieldstyle={{ margin: 5 }}
        />

        <Dropdown
          itemArray={sectionArray}
          key={"section_id"}
          value={"section_name"}
          onClick={(option) => changeSection(option)}
          textFieldstyle={{ margin: 5 }}
        />

        <Dropdown
          itemArray={subSectionArray}
          key={"sub_section_id"}
          value={"sub_section_name"}
          onClick={(option) => changeSubSection(option)}
          textFieldstyle={{ margin: 5 }}
        />
      </div>
      <div
        style={{
          marginTop: 25,
          justifyContent: "space-around",
          display: "flex",
          flex: 1,
        }}
      >
        <div style={{ flex: 1 }}>
          <Dropdown
            itemArray={brandArray}
            key={"brand_id"}
            value={"brand_name"}
            onClick={(option) => changeBrand(option)}
            // textFieldstyle={{ width: "45%" }}
          />
        </div>

        <MultiSelectDropDown
          itemArray={["XS", "S", "M", "L", "XL", "XXL", "XXXL"]}
          onClick={(option) => changeSize(option)}
          textFieldstyle={{ width: "45%" }}
        />
      </div>
      <div
        style={{
          marginTop: 20,
          justifyContent: "space-around",
          display: "flex",
          flex: 1,
          // flexWrap: "wrap",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Name of Product"
          variant="outlined"
          size="small"
          style={{ flex: 1, margin: 5 }}
          // disabled={categoryValue == "" && SectionValue == "" ? true : false}
          // onChange={(e) => setSubSectionValue(e.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Price of Product"
          variant="outlined"
          size="small"
          style={{ flex: 1, margin: 5 }}
          // disabled={categoryValue == "" && SectionValue == "" ? true : false}
          // onChange={(e) => setSubSectionValue(e.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Discount"
          variant="outlined"
          size="small"
          style={{ flex: 1, margin: 5 }}
          // disabled={categoryValue == "" && SectionValue == "" ? true : false}
          // onChange={(e) => setSubSectionValue(e.target.value)}
        />
      </div>
    </div>
  );
};
