import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        textAlign: "start",
        borderBottomWidth: 1,
        justifyContent: "center",
      }}
    >
      <div className="text-black" style={{ width: "15%", padding: 10 }}>
        FILTERS
      </div>
      <div className="text-black " style={{ padding: 10 }}>
        Main
      </div>
    </div>
  );
};

export default Header;
