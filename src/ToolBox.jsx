import React from "react";
import "./styles/ToolBox.css"
import Cursor from "./Cursor";
import { useState, useEffect} from "react";

const ToolBox = (props) => {

  const styleSelected = {
    border: "6px dashed #e06f1f"
  }
  const choosePencil = () => {
    props.onChange("pencil");
  }

  return (
    <div id="toolbox">
      <button
        id="pencil"
        className="tool"
        onClick={choosePencil}
        style={ props.tool == "pencil" ? styleSelected : {}}
      >
        <img alt="Pencil"></img>
      </button>
    </div>
  );
}

export default ToolBox;