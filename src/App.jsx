import Board from "./Board";
import React from "react";

import "./styles/App.css";

import ToolContext from "./ToolContext";

export const PIXEL_WIDTH = 30;

function App() {
  const [boardSize, setBoardSize] = React.useState([16, 16]);
  const [tool, setTool] = React.useState("pencil");
  return (
    <ToolContext.Provider value={{tool, setTool}}>
      <p>Current tool: {tool}</p>
      <Board
        numRow={boardSize[0]}
        numCol={boardSize[1]}
        pixelWidth={PIXEL_WIDTH}
      ></Board>
    </ToolContext.Provider>
  );
}

export default App;
