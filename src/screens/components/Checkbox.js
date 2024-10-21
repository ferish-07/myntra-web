import React from "react";

import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import { styled, css } from "@mui/system";
export const CheckBox = ({ data, onCheckBoxClicked, selectIds, type }) => {
  const [anchor, setAnchor] = React.useState(null);
  return (
    <div>
      {data.slice(0, 8).map((item) => {
        let isSelected = selectIds[type]?.includes(item.id);

        return (
          <div
            onClick={() => onCheckBoxClicked(item.id, type)}
            className="cursor-pointer flex-row flex items-center"
          >
            <h1
              className={`custom-font text-[17px] no-select`}
              style={{ color: isSelected ? "#ff3f6c" : "#94969f" }}
            >
              {isSelected ? "checkbox-filled-checked" : "checkbox-unchecked"}
            </h1>
            <h1 className="ml-2 truncate " style={{ color: "#535766" }}>
              {item.title}
            </h1>
            <h1 className="ml-2 text-[10px]" style={{ color: "#94969f" }}>
              ({item.count})
            </h1>
          </div>
        );
      })}
      {data.length > 8 ? (
        <h1
          className="mt-4 pl-5 cursor-pointer no-select "
          style={{ color: "#ff3f6c" }}
          aria-describedby="placement-popper"
          onClick={(event) => setAnchor(anchor ? null : event.currentTarget)}
        >
          {" "}
          + {data.slice(8, data.length).length} More
        </h1>
      ) : null}

      <BasePopup
        id="placement-popper"
        open={Boolean(anchor)}
        anchor={anchor}
        placement={"right"}
        offset={4}
      >
        <PopupBody>The content of the Popup.</PopupBody>
      </BasePopup>
    </div>
  );
};
const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Anchor = styled("span")(
  ({ theme }) => css`
    display: inline-block;
    background-color: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  `
);

const PopupBody = styled("div")(
  ({ theme }) => css`
    padding: 0.5rem 1rem;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border-radius: 8px;
    box-shadow: ${theme.palette.mode === "dark"
      ? `0px 4px 8px rgb(0 0 0 / 0.7)`
      : `0px 4px 8px rgb(0 0 0 / 0.1)`};
    min-height: 3rem;
    display: flex;
    align-items: center;
  `
);
