import React from "react";
import Label from "../label/Label";

function ButtonType({
  label,
  labelWidth,
  type,
  inputwidth,
  marginLeft,
  name,
}) {
  // label width should be in percentages
  // type: radio, checkboxes
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginLeft: marginLeft,
      }}
    >
      <input
        type={type}
        name={name}
        style={{ marginRight: "5px", width: inputwidth }}
      />
      <Label label={label} labelWidth={labelWidth} />
    </div>
  );
}

export default ButtonType;
