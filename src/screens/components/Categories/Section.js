import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { API_ADD_SECTION } from "../../redux/Urls";
import { AddSectionAction } from "../../redux/action/CategoryAction";
const Section = ({ categoryArray, callMainAPi }) => {
  const dispatch = useDispatch();
  const { addSectionResponse } = useSelector((store) => store.CategoryReducers);
  const [categoryArrayNew, setCategoryArrayNew] = useState(categoryArray);
  const [sectionName, setSectionName] = useState("");
  const [columnNo, setColumnNo] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  useEffect(() => {
    if (categoryArray) {
      setCategoryArrayNew(categoryArrayNew);
    }
  }, [categoryArray]);

  useEffect(() => {
    if (addSectionResponse) {
      console.log("---------------------------------", addSectionResponse);
      callMainAPi();
    }
  }, [addSectionResponse]);
  const onSubmit = () => {
    let params = {
      category_id: categoryValue.category_id,
      section_name: sectionName,
      column_number: columnNo.value,
    };

    console.log(
      "-----------------------------------------PARAMS-----------",
      params
    );

    let url = API_ADD_SECTION;
    dispatch(AddSectionAction(url, params));
  };
  const column_no = [
    {
      value: 1,
      id: 1,
    },
    {
      value: 2,
      id: 2,
    },
    {
      value: 3,
      id: 3,
    },
    {
      value: 4,
      id: 4,
    },
    {
      value: 5,
      id: 5,
    },
    {
      value: 6,
      id: 6,
    },
    {
      value: 7,
      id: 7,
    },
    {
      value: 8,
      id: 8,
    },
    {
      value: 9,
      id: 9,
    },
  ];
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
      <text style={{ color: "black" }}>Section Card</text>
      <div style={{ marginTop: 25 }}>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          helperText="Please select Category"
          size="small"
          onChange={(i) => console.log("--------------", i)}
        >
          {categoryArray.map((option) => (
            <MenuItem
              key={option.category_id}
              value={option.category_id}
              onClick={() => setCategoryValue(option)}
            >
              {option.category_name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          helperText="Please select Column No"
          size="small"
          onChange={(i) => console.log("--------------", i)}
          style={{ marginLeft: 20 }}
        >
          {column_no.map((option) => (
            <MenuItem
              key={option.id}
              value={option.value}
              onClick={() => setColumnNo(option)}
            >
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <div style={{ marginTop: 25 }}>
        <TextField
          id="outlined-basic"
          label="Section Name"
          variant="outlined"
          size="small"
          onChange={(e) => setSectionName(e.target.value)}
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

export default Section;
