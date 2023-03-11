import { Select } from "@mantine/core";
import React from "react";
// import {TfiSearch} from 'react-icons/tfi'
import { IoMdSearch } from "react-icons/io";
// import { FiFeather } from "react-icons/fi";

function ListOfValue({
  labelWidth,
  inputWidth,
  placeholder,
  label,
  required,
  maxLength,
  lovData,
  id,
  onChange,
  value,
}) {
  // const handleOpen = () => {
  //   var focusTrigger = document.getElementById("theField");
  //   focusTrigger.focus();
  // };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
        whiteSpace: "nowrap",
      }}
      className="lov_with_label_div"
    >
      <label
        className="lov_label"
        style={{ width: labelWidth, fontSize: "85%" }}
      >
        {label}
        {required ? <span style={{ color: "red" }}> *</span> : null}
      </label>

      <Select
        placeholder={placeholder}
        id={id}
        value={value}
        style={{
          width: inputWidth,
          height: "25px !important",
          outline: "1px solid rgb(157, 157, 157)",
          borderRadius: "3px",
          border: "none",
          fontsize: "90%",
          // paddinglleft: "7px",
        }}
        onChange={onChange}
        searchable
        size={"xs"}
        rightSection={
          <IoMdSearch style={{ marginLeft: "15px" }} size={18} color="grey" />
        }
        styles={{ rightSection: { pointerEvents: "none" } }}
        data={lovData}
        // data={[
        //   { value: "react", label: "React" },
        //   { value: "ng", label: "Angular" },
        //   { value: "svelte", label: "Svelte" },
        //   { value: "vue", label: "Vue" },
        // ]}
      />
    </div>
  );
}

export default ListOfValue;

// import React,{useState} from "react";
// import { FcSearch } from '../../../node_modules/react-icons/fc/index.esm';

// function ListOfValue({name , lov,  labelWidth, inputWidth, type, label, maxLength,marginBottomDiv,labelColor, buttonType, content, handleLov }) {
//   const [click,setClick] = useState(false)

//   console.log(lov)
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",

//         // margin: "40px",
//         whiteSpace: "nowrap",
//         marginBottom: marginBottomDiv
//       }}
//     >
//       <label  className="LOV_label" style={{ width: labelWidth, fontSize: "90%",textAlign:"left",color:labelColor }}>{label}</label>
//       <input
//         type={type}
//         className="inputField"
//         style={{ width: inputWidth, color: "#595959", backgroundColor: 'whitesmoke' }}
//         maxLength={maxLength}
//         disabled

//       />

//       <button className="" type={buttonType} name={name} onClick={(e)=>handleLov(name)} style={{ height: "32px",postion:"relative",borderRadius:'3px',marginLeft:'1.5px', border:'1px solid rgb(157, 157, 157)', textAlign: 'center',  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', backgroundColor:"#e1e8f0"}}>
//         <FcSearch  size={20} />
//        {lov && lov[name] && <div className="tooltiptext" style={{position:"absolute",backgroundColor:"red",color:"white",height:"100px",width:"100px"}}>
//             {content}

//        </div> }
//       </button>
//     </div>
//   );
// }

// export default ListOfValue;
