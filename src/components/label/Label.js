import React from "react";

function Label({ label, labelWidth }) {
    // label width should be in percentages
  return <label style={{ width: labelWidth, fontSize: "90%" }}>{label}</label>;
}

export default Label;
