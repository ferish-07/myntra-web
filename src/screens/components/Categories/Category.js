import React, { useEffect, useState } from "react";
import MainCategoryCard from "./MainCategoryCard";
import Section from "./Section";
import SubSection from "./SubSection";
import { API_GET_SECTION_DATA } from "../../redux/Urls";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllSectionDataAction,
  resetAction,
} from "../../redux/action/CategoryAction";
import { ALL_SECTION } from "../../redux/store/Types";
import Brand from "./Brand";
import { AddItemCard } from "./AddItemCard";

const Category = () => {
  const { allSectionData } = useSelector((store) => store.CategoryReducers);
  const [categoryArray, setCategoryArray] = useState([]);
  const [AllSectionData, setAllSectionData] = useState([]);
  useEffect(() => {
    if (allSectionData) {
      let category_array = [];
      if (!allSectionData.error_status && allSectionData.data) {
        setAllSectionData(allSectionData.data);
        allSectionData.data.map((i) => {
          category_array.push({
            category_id: i.category_id,
            category_name: i.category_name,
          });

          setCategoryArray(category_array);
        });
      }
    }
  }, [allSectionData]);
  const dispatch = useDispatch();

  useEffect(() => {
    callMainAPi();
  }, []);
  const callMainAPi = () => {
    dispatch(resetAction(ALL_SECTION));

    let url = API_GET_SECTION_DATA;
    dispatch(getAllSectionDataAction(url));
  };
  return (
    <div>
      <text style={{ color: "black" }}>Category Page</text>
      <div
        style={{
          padding: 20,
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <MainCategoryCard callMainAPi={callMainAPi} />

        <Section categoryArray={categoryArray} callMainAPi={callMainAPi} />
        <SubSection
          categoryArray={categoryArray}
          allData={AllSectionData}
          callMainAPi={callMainAPi}
        />
        <Brand callMainAPi={callMainAPi} />
        <AddItemCard
          categoryArray={categoryArray}
          callMainAPi={callMainAPi}
          allData={AllSectionData}
        />
      </div>
    </div>
  );
};

export default Category;
