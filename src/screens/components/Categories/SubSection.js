import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { InputLabel, Select } from "@mui/material";
import { API_ADD_SUB_SECTION } from "../../redux/Urls";
import { AddSubSectionAction } from "../../redux/action/CategoryAction";

const SubSection = ({ categoryArray, allData, callMainAPi }) => {
  const dispatch = useDispatch();
  const { allSectionData, addSubSectionResponse } = useSelector(
    (store) => store.CategoryReducers
  );
  const [sectionArray, setSectionArray] = useState([]);
  const [categoryValue, setCategoryValue] = useState("");
  const [SectionValue, setSectionValue] = useState("");
  const [subSectionValue, setSubSectionValue] = useState("");

  useEffect(() => {
    if (addSubSectionResponse) {
      console.log(
        "-------------addSubSectionResponse---------------------------------.",
        addSubSectionResponse
      );
      callMainAPi();
    }
  }, [addSubSectionResponse]);
  const changeCategory = (event) => {
    console.log("---------------------irttt--", event);
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
    setSectionValue(event);
  };
  const onSubmit = () => {
    let params = {
      category_id: categoryValue,
      section_id: SectionValue.section_id,
      sub_section_name: subSectionValue,
    };

    let url = API_ADD_SUB_SECTION;
    dispatch(AddSubSectionAction(url, params));
    console.log("==========================", params);
  };
  return (
    <div
      style={{
        // width: "25%",

        borderRadius: 5,
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        border: "1px solid rgba(0,0,0,0.1)",
        padding: 15,
      }}
    >
      <text style={{ color: "black" }}>Sub Section Card</text>
      <div
        style={{
          display: "flex",
          marginTop: 25,
          width: "40ch",

          justifyContent: "space-around",
          flex: 1,
        }}
      >
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          helperText="Please select Category"
          size="small"
          value={categoryValue}
          // onChange={setCategoryValue}
          onSelect={(i) => console.log("------------", i)}
          style={{ width: "45%" }}
        >
          {categoryArray.map((option) => (
            <MenuItem
              key={option.category_id}
              value={option.category_id}
              onClick={() => changeCategory(option)}
            >
              {option.category_name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          helperText="Please select Section"
          size="small"
          style={{ width: "45%" }}
          disabled={categoryValue == "" ? true : false}
        >
          {sectionArray.map((option) => (
            <MenuItem
              key={option.section_id}
              value={option.section_id}
              onClick={() => changeSection(option)}
            >
              {option.section_name}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <div style={{ marginTop: 25 }}>
        <TextField
          id="outlined-basic"
          label="Sub Section Name"
          variant="outlined"
          size="small"
          disabled={categoryValue == "" && SectionValue == "" ? true : false}
          onChange={(e) => setSubSectionValue(e.target.value)}
        />
      </div>

      <div
        style={{ marginTop: 25, justifyContent: "flex-end", display: "flex" }}
      >
        <Button variant="contained" size="small" style={{ marginRight: 5 }}>
          Reset
        </Button>
        <Button variant="contained" size="small" onClick={onSubmit}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default SubSection;
