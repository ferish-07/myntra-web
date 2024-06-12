import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export const Dropdown = ({
  itemArray,
  key,
  value,
  onClick,
  isRightIcon,
  handleRightIconPress,
  textFieldstyle,
  helperText,
  label,
}) => {
  return (
    <TextField
      id="outlined-select-currency"
      select
      defaultValue=""
      label={label ? label : "Select"}
      helperText={helperText ? helperText : ""}
      size="small"
      SelectProps={{
        renderValue: (selected) => selected,
      }}
      style={textFieldstyle}
    >
      {itemArray.map((option) => (
        <MenuItem
          key={option[key]}
          value={option[value]}
          onClick={() => onClick(option)}
        >
          <ListItemText primary={option[value]} />
          {isRightIcon ? (
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={(event) => handleRightIconPress(event, option)}
            >
              <DeleteIcon />
            </IconButton>
          ) : null}
        </MenuItem>
      ))}
    </TextField>
  );
};
