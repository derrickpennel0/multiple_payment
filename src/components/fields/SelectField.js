import React from "react";

function SelectField({ labelWidth, inputWidth, label, description }) {
  //   const dat = ["male", "female", "other"];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "40px",
        whiteSpace: "nowrap",
      }}
    >
      <label className="select_field_label" style={{ width: labelWidth, fontSize: "90%" }}>{label}</label>
      <select
        className="inputField"
        style={{ width: inputWidth, color: "#595959" }}
      >
        <option>{description}</option>
        {/* {dat.map((item) => {
          return <option key={item}>{item}</option>;
        })} */}
      </select>
    </div>
  );
}

export default SelectField;
