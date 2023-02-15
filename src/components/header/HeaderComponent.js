import React from "react";
import { FiFeather } from "react-icons/fi";

function HeaderComponent({ icon, title }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "5px",
          color: "white",
          backgroundColor: "#37c6db",
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
