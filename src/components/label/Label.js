import React from "react";

function Label({ label, labelWidth, fontSize, fontWeight, color }) {
    // label width should be in percentages
  return <label style={{ width: labelWidth, color: color, fontSize: fontSize, fontWeight: fontWeight }}>{label}</label>;
}

export default Label;
