import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { API_ADD_SECTION } from "../../redux/Urls";
import { AddSectionAction } from "../../redux/action/CategoryAction";
import { ListItemText } from "@mui/material";
import "./allFile.css";
import { Dropdown } from "../Dropdown";
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
  const handleDelete = (event, id) => {
    event.stopPropagation();
    console.log("----idddddd-", id);
  };
  const onSubmit = () => {
    let params = {
      category_id: categoryValue.category_id,
      section_name: sectionName,
      column_number: columnNo.value,
    };

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
        flexGrow: 0.3,
        margin: 10,
      }}
      className="boxView"
    >
      <text className="text">Section Card</text>
      <div
        style={{
          marginTop: 25,
          justifyContent: "space-around",
          display: "flex",
          flex: 1,
          // backgroundColor:
        }}
      >
        <Dropdown
          isRightIcon={true}
          itemArray={categoryArray}
          key={"category_id"}
          value={"category_name"}
          onClick={(option) => setCategoryValue(option)}
          handleRightIconPress={(event, option) => handleDelete(event, option)}
          textFieldstyle={{ margin: 5, flex: 1 }}
        />
        <Dropdown
          isRightIcon={false}
          itemArray={column_no}
          key={"id"}
          value={"value"}
          onClick={(option) => setColumnNo(option)}
          textFieldstyle={{ margin: 5, flex: 1 }}
        />
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

      <div className="buttonView">
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
