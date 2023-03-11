import React from "react";

function ButtonComponent({ textColor, text, marginLeftButton,type,buttonBackgroundColor,buttonWidth}) {
    // height should be in percentages and width should be in pixels
  return (
  <button  type={type} style={{ height: "31px",borderRadius:'3px',width:buttonWidth,padding: "0px 5px", border:'1px solid rgb(157, 157, 157)', textAlign: 'center',  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', backgroundColor:buttonBackgroundColor,color:textColor}}>
{text}      </button>
      );
}

export default ButtonComponent;
