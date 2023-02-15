import React from "react";

function ButtonComponent({label,buttonBackgroundColor, buttonColor, buttonWidth, buttonHeight}) {
    // height should be in percentages and width should be in pixels
  return (
      <button className="button" style={{backgroundColor: buttonBackgroundColor, color: buttonColor, border: 'none', borderRadius: '4px', height: buttonHeight, width:buttonWidth, whiteSpace: 'nowrap'}}>{label}</button>
  );
}

export default ButtonComponent;
