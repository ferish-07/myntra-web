import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { API_ADD_MAIN_CATEGORY } from "../../redux/Urls";
import { useDispatch, useSelector } from "react-redux";
import { mainCategoryAction } from "../../redux/action/CategoryAction";
import "./allFile.css";

const Brand = ({ callMainAPi }) => {
  const dispatch = useDispatch();
  const [brandName, setbrandName] = useState("");
  const { addMainCategoryData } = useSelector(
    (store) => store.CategoryReducers
  );

  //   useEffect(() => {
  //     if (addMainCategoryData) {
  //       console.log("----addMainCategoryData---------", addMainCategoryData);
  //       if (!addMainCategoryData.error_status) {
  //         alert(addMainCategoryData.message);
  //         callMainAPi();
  //       }
  //     }
  //   }, [addMainCategoryData]);

  const AddCategory = () => {
    // let url = API_ADD_MAIN_CATEGORY;
    let params = {
      brand_name: brandName,
    };

    console.log("-------------------------", params);
    // dispatch(mainCategoryAction(url, params));
  };

  const onReset = () => {
    setbrandName("");
  };
  return (
    <div
      style={{
        height: "200px",
        flexGrow: 0.4,
        margin: 10,
      }}
      className="boxView"
    >
      <text className="text">Brand Card</text>
      <div style={{ marginTop: 25 }}>
        <TextField
          id="outlined-basic"
          label="Brand"
          variant="outlined"
          size="small"
          value={brandName}
          onChange={(e) => setbrandName(e.target.value)}
        />
      </div>

      <div className="buttonView">
        <Button
          variant="contained"
          size="small"
          style={{ marginRight: 5 }}
          onClick={onReset}
        >
          Reset
        </Button>
        <Button variant="contained" size="small" onClick={() => AddCategory()}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default Brand;
