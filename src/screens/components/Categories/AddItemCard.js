import React, { useState } from "react";
import "./allFile.css";
import { Dropdown } from "../Dropdown";
import { MultiSelectDropDown } from "../MultiSelectDropDown";
import { TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const AddItemCard = ({ callMainAPi, allData, categoryArray }) => {
  const [sectionArray, setSectionArray] = useState([]);
  const [subSectionArray, setSubSectionArray] = useState([]);
  const [categoryValue, setCategoryValue] = useState("");
  const [SectionValue, setSectionValue] = useState("");
  const [SubSectionValue, setSubSectionValue] = useState("");
  const [brandValue, setBrandValue] = useState("");
  const [sizeList, setSizeList] = useState("");
  const [discountedPrice, setdiscountedPrice] = useState(null);
  const [productName, setproductName] = useState(null);
  const [dicPer, setDicPer] = useState(null);
  const [price, setPrice] = useState(null);
  const [imageLink, setImageLink] = useState(null);
  const [imageArray, setImageArray] = useState([]);
  const [brandArray, setBrandArray] = useState([
    { brand_id: 101, brand_name: "PUMA" },
  ]);
  const changeCategory = (event) => {
    console.log("---------------------irttt--", event, allData);
    setCategoryValue(event);
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
    setSubSectionArray([]);
    allData.map((i) => {
      if (i.category_id == categoryValue.category_id) {
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
    setSubSectionValue(option);
  };
  const changeBrand = (option) => {
    console.log("---Sub-", option);
    setBrandValue(option);
  };
  const changeSize = (option) => {
    console.log("---Sub-", option);
    setSizeList(option);
  };
  const discountedFunc = (val) => {
    setdiscountedPrice(val);
    console.log("====PRRRRRR", price);
    let percent;
    if (price) {
      percent = (100 * (price - val)) / price;
      setDicPer(percent);
    }
    // else {
    //   let Price = (100 * val) / 100 - dicPer;
    //   console.log("--calculated Price--", Price);
    //   setPrice(Price);
    // }
  };
  const constChangeInPrice = (val) => {
    setPrice(val);
    let disc;
    if (dicPer) {
      disc = val - (val * dicPer) / 100;
      setdiscountedPrice(disc);
    }
  };
  const changeDisPer = (val) => {
    setDicPer(val);
    let disc;
    if (price) {
      disc = price - (price * val) / 100;
      console.log(disc, "--------DICCC");
      setdiscountedPrice(disc);
    }
  };

  const ImageAddFunction = () => {
    let arr = [...imageArray, imageLink];
    console.log("---IMAGE ARRA-", arr);
    setImageArray(arr);
    // imageArray.push([imageLink]);
  };

  const deleteImage = (index) => {
    const newArray = [
      ...imageArray.slice(0, index), // Elements before the one to delete
      ...imageArray.slice(index + 1), // Elements after the one to delete
    ];
    console.log("--dsdsdsdsdsd-", newArray);
    setImageArray(newArray);
  };

  const SubmitFunction = () => {
    let params = {
      category: categoryValue,
      section: SectionValue,
      subSection: SubSectionValue,
      brand: brandValue,
      size: sizeList,
      product_name: productName,
      price: price,
      discount_amount: discountedPrice,
      discount_percentage: dicPer,
      image_list: imageArray,
    };
    console.log("--PARAMNS-", JSON.stringify(params));
  };
  return (
    <div
      style={{
        margin: 30,
        maxWidth: "500px",
        flexGrow: 0.3,
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
          textFieldstyle={{ margin: 5, flex: 1 }}
          label={"Category"}
        />

        <Dropdown
          itemArray={sectionArray}
          key={"section_id"}
          value={"section_name"}
          onClick={(option) => changeSection(option)}
          textFieldstyle={{ margin: 5, flex: 1 }}
          label={"Section"}
        />

        <Dropdown
          itemArray={subSectionArray}
          key={"sub_section_id"}
          value={"sub_section_name"}
          onClick={(option) => changeSubSection(option)}
          textFieldstyle={{ margin: 5, flex: 1 }}
          label={"Sub Section"}
        />
      </div>
      <div
        style={{
          marginTop: 25,
          justifyContent: "space-around",
          display: "flex",
        }}
      >
        <Dropdown
          itemArray={brandArray}
          key={"brand_id"}
          value={"brand_name"}
          onClick={(option) => changeBrand(option)}
          textFieldstyle={{ flex: 1, margin: 5 }}
          label={"Brand"}
        />

        <MultiSelectDropDown
          itemArray={["XS", "S", "M", "L", "XL", "XXL", "XXXL"]}
          onClick={(option) => changeSize(option)}
          style={{ flex: 1, margin: 5 }}
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
          value={productName}
          // disabled={categoryValue == "" && SectionValue == "" ? true : false}
          onChange={(e) => setproductName(e.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Price of Product"
          variant="outlined"
          size="small"
          style={{ flex: 1, margin: 5 }}
          InputLabelProps={{ shrink: !!price }}
          value={price}
          // disabled={categoryValue == "" && SectionValue == "" ? true : false}
          onChange={(e) => constChangeInPrice(e.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Discount %"
          variant="outlined"
          size="small"
          style={{ flex: 1, margin: 5 }}
          InputLabelProps={{ shrink: !!dicPer }}
          value={dicPer}
          // disabled={categoryValue == "" && SectionValue == "" ? true : false}
          onChange={(e) => changeDisPer(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Dsc Price"
          InputLabelProps={{ shrink: !!discountedPrice }}
          variant="outlined"
          size="small"
          style={{ flex: 1, margin: 5 }}
          value={discountedPrice}
          // disabled={categoryValue == "" && SectionValue == "" ? true : false}
          onChange={(e) => discountedFunc(e.target.value)}
        />
      </div>
      <div
        style={{
          marginTop: 25,
          flexDirection: "row",
          display: "flex",
          overflow: "auto",
        }}
      >
        {imageArray.map((i, index) => {
          return (
            <div
              style={{
                display: "flex",
                // position: "absolute",
                // // justifyContent: "center",
                // flexDirection: "row",
                // // alignItems: "center",
              }}
            >
              <img
                src={i}
                style={{ width: 80, marginRight: 5, marginTop: 5 }}
              />
              <CloseIcon
                style={{
                  backgroundColor: "grey",
                  // right: ,
                  // position: "absolute",
                  width: 20,
                  height: 20,
                  borderRadius: 100,
                  // right: 800,

                  // top: "1px",
                }}
                onClick={() => deleteImage(index)}
              />
            </div>
          );
        })}
      </div>
      <div
        style={{
          marginTop: 20,
          justifyContent: "space-around",
          display: "flex",
          flex: 1,
          alignItems: "center",
          // flexWrap: "wrap",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Image Link"
          InputLabelProps={{ shrink: !!imageLink }}
          variant="outlined"
          size="small"
          style={{ flex: 1, margin: 5 }}
          value={imageLink}
          // disabled={categoryValue == "" && SectionValue == "" ? true : false}
          onChange={(e) => setImageLink(e.target.value)}
        />
        <Button
          variant="contained"
          size="small"
          style={{ height: 30, borderRadius: 100 }}
          disabled={imageLink && imageLink.length == 0}
          onClick={() => ImageAddFunction()}
        >
          Add
        </Button>
      </div>
      <Button
        variant="contained"
        size="small"
        // style={{ height: 30, borderRadius: 100 }}
        // disabled={imageLink && imageLink.length == 0}
        onClick={() => SubmitFunction()}
      >
        SUBMIT
      </Button>
    </div>
  );
};
