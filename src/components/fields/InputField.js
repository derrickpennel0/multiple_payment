import React from "react";

function InputField({
  labelWidth,
  inputWidth,
  type,
  label,
  maxLength,
  disabled,
  labelColor,
  required,
  onChange,
  onKeyDown,
  value,
  textAlign,
  paddingRight
}) {
  // disabled & required should be true or false, width should be in percentages, type: tel, number, text
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // margin: "10px",
        whiteSpace: "nowrap",
        marginBottom: "20px",
      }}
      className="input_field_and_label_div"
    >
      <label
        className="input_field_label"
        style={{
          width: labelWidth,
          fontSize: "85%",
          textAlign: "left",
          color: labelColor,
        }}
      >
        {label}
        {required ? <span style={{ color: "red" }}> *</span> : null}
      </label>

      <input
        type={type}
        className={disabled ? "disabledColoredInputField" : "inputField"}
        style={{
          width: inputWidth,
          color: "#595959",
          backgroundColor: "",
          textAlign: textAlign,
          paddingRight:paddingRight
        }}
        maxLength={maxLength}
        min={type === "number" && 0}
        disabled={disabled}
        required={required}
        onKeyDown={onKeyDown}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default InputField;
