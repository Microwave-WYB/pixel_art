import React from "react";

const pixelSize = 30;

const Cursor = (props) => {
  const style = {
    width: "30px",
    height: "30px",
    zIndex: 999,
    left: props.col * pixelSize,
    top: props.row * pixelSize,
    position: "absolute",
    boxSizing: "border-box",
    border: "4px dashed rgba(0, 255, 255, 0.5)",
    mixBlendMode: "difference",
  };
  return (
    <div
      id="cursor"
      style={style}
    ></div>
  );
}

export default Cursor;