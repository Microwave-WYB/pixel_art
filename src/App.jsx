import Board from "./Board";
import React from "react";

import "./styles/App.css";

// import ToolContext from "./ToolContext";
// import ColorContext from "./ColorContext";
// import LayerContext from "./LayerContext";
import Toolbox from "./Toolbox";
import Pencil from "./tools/Pencil";
import Layer from "./Layer";
import LayerSwitcher from "./LayerSwitcher";

export const PIXEL_WIDTH = 30;

function App() {
  const bgLayer = new Layer(16, 16, "background", true);
  const [boardSize, setBoardSize] = React.useState([16, 16]);
  const [layers, setLayers] = React.useState({arr: [bgLayer], curr: 0});
  const [color, setColor] = React.useState([0, 0, 0, 1]);
  const [tool, setTool] = React.useState(new Pencil(1, color));
  // setLayer(newLayer);

  React.useEffect(() => {
    bgLayer.fillLayer([255, 255, 255, 1]);
  }, []);

  return (
    // <LayerContext.Provider value={{layer, setLayer}}>
    // <ToolContext.Provider value={{tool, setTool}}>
    // <ColorContext.Provider value={{color, setColor}}>
    <>
      <p>Current tool: {tool.constructor.name}</p>
      <p>Current color: {`rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`}</p>
      <Board
        numRow={boardSize[0]}
        numCol={boardSize[1]}
        pixelWidth={PIXEL_WIDTH}
        tool={tool}
        color={color}
        layers={layers}
      ></Board>
      <Toolbox></Toolbox>
      <LayerSwitcher layers={layers}></LayerSwitcher>
    </>
    // </ColorContext.Provider>
    // </ToolContext.Provider>
    // </LayerContext.Provider>
  );
}

export default App;
