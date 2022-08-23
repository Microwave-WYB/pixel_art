import React from "react";

const Cursor = (props) => {
  const style = {
    width: "30px",
    height: "30px",
    zIndex: 999,
    left: props.col * props.pixelSize,
    top: props.row * props.pixelSize,
    position: "absolute",
    // boxSizing: "border-box",
    outline: props.visible ? "6px dashed rgba(255, 50, 50, 0.8)" : "none",
    // backgroundColor: `rgb(${props.color[0]}, ${props.color[1]}, ${props.color[2]})`,
  };
  return (
    <div
      id="cursor"
      style={style}
    ></div>
  );
}

export default Cursor;