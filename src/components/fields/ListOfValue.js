import React from "react";
// import {TfiSearch} from 'react-icons/tfi'
import { FcSearch } from '../../../node_modules/react-icons/fc/index.esm';


function ListOfValue({ labelWidth, inputWidth, type, label, maxLength }) {

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
        style={{ width: inputWidth, color: "#595959", backgroundColor: 'whitesmoke' }}
        maxLength={maxLength}
        disabled
        
      />
      <button style={{ height: "36px",borderRadius:'3px',marginLeft:'1.5px', border:'1px solid rgb(157, 157, 157)', textAlign: 'center',  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', backgroundColor:"#e1e8f0"}}>
        <FcSearch  size={20} />
      </button>
    </div>
  );
}

export default ListOfValue;
