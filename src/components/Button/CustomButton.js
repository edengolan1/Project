import React from "react";
import "./CustomButton.css";

function CustomButton({text, onClick}) {
  return (
    <button className="btn17" onClick={onClick}>
      {text}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export default CustomButton;
