import React from "react";

const Toolbox = (props) => {
  return (
    <div id="toolBox">
      <button className="tool">pencil</button>
      <button className="tool">pen</button>
      <button className="tool">fill</button>
      <button className="tool">rect</button>
      <button className="tool">circle</button>
    </div>
  );
}

export default Toolbox;