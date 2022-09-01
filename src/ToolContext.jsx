import React from "react";
import Pencil from "./tools/Pencil";

const ToolContext = React.createContext({
  tool: new Pencil(),
  setTool: () => {}
});

export default ToolContext;
