import React from "react";

const ToolContext = React.createContext({
  tool: "pencil",
  setTool: () => {}
});

export default ToolContext;
