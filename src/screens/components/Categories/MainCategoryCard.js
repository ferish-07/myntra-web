import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { API_ADD_MAIN_CATEGORY } from "../../redux/Urls";
import { useDispatch, useSelector } from "react-redux";
import { mainCategoryAction } from "../../redux/action/CategoryAction";

const MainCategoryCard = ({ callMainAPi }) => {
  const dispatch = useDispatch();
  const [mainCategory, setMainCategory] = useState("");
  const { addMainCategoryData } = useSelector(
    (store) => store.CategoryReducers
  );

  useEffect(() => {
    if (addMainCategoryData) {
      console.log("----addMainCategoryData---------", addMainCategoryData);
      if (!addMainCategoryData.error_status) {
        alert(addMainCategoryData.message);
        callMainAPi();
      }
    }
  }, [addMainCategoryData]);

  const AddCategory = () => {
    let url = API_ADD_MAIN_CATEGORY;
    let params = {
      category_name: mainCategory,
    };

    console.log("-------------------------", url, params);
    dispatch(mainCategoryAction(url, params));
  };

  const onReset = () => {
    setMainCategory("");
  };
  return (
    <div
      style={{
        width: "25%",

        borderRadius: 5,
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        border: "1px solid rgba(0,0,0,0.1)",
        padding: 15,
        height: "200px",
      }}
    >
      <text style={{ color: "black" }}>Main Category Card</text>
      <div style={{ marginTop: 25 }}>
        <TextField
          id="outlined-basic"
          label="Category"
          variant="outlined"
          size="small"
          value={mainCategory}
          onChange={(e) => setMainCategory(e.target.value)}
        />
      </div>

      <div
        style={{ marginTop: 25, justifyContent: "flex-end", display: "flex" }}
      >
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

export default MainCategoryCard;
