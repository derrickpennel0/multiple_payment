import React from "react";

function InputField({
  labelWidth,
  inputWidth,
  type,
  label,
  maxLength,
  disabled,
  required,
}) {
  // disabled & required should be true or false, width should be in percentages, type: tel, number, text
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "40px",
        whiteSpace: "nowrap",
      }}
    >
      <label style={{ width: labelWidth, fontSize: "90%" }}>{label}</label>
      <input
        type={type}
        className="inputField"
        style={{ width: inputWidth, color: "#595959" }}
        maxLength={maxLength}
        min={type === "number" && 0}
        disabled={disabled}
        required={required}
      />
    </div>
  );
}

export default InputField;
