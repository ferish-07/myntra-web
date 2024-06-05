import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";

import { API_ADD_SUB_SECTION } from "../../redux/Urls";
import { AddSubSectionAction } from "../../redux/action/CategoryAction";
import "./allFile.css";
import { Dropdown } from "../Dropdown";

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
  const handleDelete = (event, id) => {
    event.stopPropagation();
    console.log("----idddddd-", id);
  };

  return (
    <div
      style={{
        flexGrow: 0.2,
        margin: 10,
      }}
      className="boxView"
    >
      <text className="text">Sub Section Card</text>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginTop: 25,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "40ch",

            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <Dropdown
            // isRightIcon={true}
            itemArray={categoryArray}
            key={"category_id"}
            value={"category_name"}
            onClick={(option) => changeCategory(option)}
            textFieldstyle={{ width: "45%" }}
            // handleRightIconPress={(event, option) => handleDelete(event, option)}
          />
          <Dropdown
            isRightIcon={true}
            itemArray={sectionArray}
            key={"section_id"}
            value={"section_name"}
            onClick={(option) => changeSection(option)}
            textFieldstyle={{ width: "45%" }}
            handleRightIconPress={(event, option) =>
              handleDelete(event, option)
            }
          />
        </div>
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

export default SubSection;
