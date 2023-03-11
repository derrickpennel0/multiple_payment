import React from "react";

function Label({ label, labelWidth, color }) {
    // label width should be in percentages
  return <label style={{ width: labelWidth, color: color, fontSize: "85%",
          textAlign: "left" }}>{label}</label>;
}

export default Label;
