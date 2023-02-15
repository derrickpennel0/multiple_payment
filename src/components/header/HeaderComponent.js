import React from "react";

function HeaderComponent({ icon, title }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: '100%',
          padding: "5px",
          color: "white",
          backgroundColor: "rgb(21 163 183)",
          fontSize: "20px",
          textTransform: 'uppercase'
        }}
      >
        <div style={{marginRight: '10px', marginBottom: '5px'}}>{icon}</div>
        {title}
      </div>
    </div>
  );
}

export default HeaderComponent;
