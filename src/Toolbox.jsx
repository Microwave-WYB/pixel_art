import React from "react";

const Toolbox = (props) => {
  return (
    <div id="toolBox">
      <button className="tool">Pencil</button>
      <button className="tool">Fill</button>
      <button className="tool">Rect</button>
      <button className="tool">Circle</button>
    </div>
  );
}

export default Toolbox;