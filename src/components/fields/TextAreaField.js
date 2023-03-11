import React from "react";
import "./AllFieldsLabel.css"


function TextAreaField({
  labelWidth,
  inputWidth,
  fontWeight,
  label,
  disabled,
  required,
  content,
}) {
  // disabled & required should be true or false, width should be in percentages, type: tel, number, text
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "15px",
        whiteSpace: "nowrap",
      }}
      className="text_area_div"
    >
      <label
        className="text_area_label"
        style={{ width: labelWidth, fontSize: "90%" }}
      >
        {label}
        {required === true ? <span style={{ color: "red" }}> *</span> : null}
      </label>

      <textarea
        className="inputField"
        style={{
          width: inputWidth,
          color: "#595959",
          paddingTop: "5px",
          height: "31px",
          fontWeight: fontWeight,
        }}
        disabled={disabled}
        required={required}
        value={content}
      ></textarea>
    </div>
  );
}

export default TextAreaField;

// export default function TextAreaField({
//   labelWidth, inputWidth, label, disabled, required
// }) {
//   // disabled & required should be true or false, width should be in percentages, type: tel, number, text
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         // margin: "10px",
//         whiteSpace: "nowrap",
//         marginBottom: "20px"

//       }}
//     >
//       <label className="text_area_label" style={{ width: labelWidth, fontSize: "90%",textAlign:"left",color:labelColor}}>
//         {label}
//         {required === true ? <span style={{ color: "red" }}> *</span> : null}
//       </label>


// <textarea style={{ width: inputWidth, fontSize: "90%",color:labelColor,border:'1px solid rgb(157, 157, 157)', textAlign: 'left', borderRadius:"3px" ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}> </textarea>

//     </div>
//   );