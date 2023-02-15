import React from "react";

function HeaderComponent({ icon, title }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "5px",
          color: "white",
          backgroundColor: "rgb(21 163 183)",
          fontSize: "20px",
        }}
      >
        <div>{icon}</div>
        {title}
      </div>
    </div>
  );
}

export default HeaderComponent;
