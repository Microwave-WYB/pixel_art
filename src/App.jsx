import Board from "./Board";
import React from "react";

import "./styles/App.css";

import ToolContext from "./ToolContext";
import ColorContext from "./ColorContext";

export const PIXEL_WIDTH = 30;

function App() {
  const [boardSize, setBoardSize] = React.useState([16, 16]);
  const [tool, setTool] = React.useState("pencil");
  const [color, setColor] = React.useState([0, 0, 0, 1]);
  return (
    <ToolContext.Provider value={{tool, setTool}}>
      <p>Current tool: {tool}</p>
      <p>Current color: {`rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`}</p>
      <Board
        numRow={boardSize[0]}
        numCol={boardSize[1]}
        pixelWidth={PIXEL_WIDTH}
      ></Board>
    </ToolContext.Provider>
  );
}

export default App;
