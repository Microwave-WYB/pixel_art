import React from "react";
import ColorContext from "./ColorContext";
// import "./styles/Board.css"
import Layer from "./Layer";
// import { PIXEL_WIDTH } from "./App";
import ToolContext from "./ToolContext"
import LayerContext from "./LayerContext";

const Board = (props) => {

  const layers = [];
  const canvasRef = React.useRef(null);

  const {tool, setTool} = React.useContext(ToolContext);
  const {color, setColor} = React.useContext(ColorContext);
  const {layer, setLayer} = React.useContext(LayerContext);

  React.useEffect(() => {
    layers.push(layer);
    const interval = setInterval(() => {
      render();
    }, 10);
  }, []);

  // React.useEffect(() => {
  //   render();
  // });

  const render = () => {
    let ctx = canvasRef.current.getContext("2d");
    layers.forEach(layer => {
      for (let row = 0; row < layer.numRow; row++) {
        for (let col = 0; col < layer.numCol; col++) {
          let [r, g, b, a] = layer.pixels[row][col];
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
          ctx.fillRect(
            col * props.pixelWidth,
            row * props.pixelWidth,
            props.pixelWidth,
            props.pixelWidth
          );
        }
      }
    });
  }

  const pixelUnderCursor = (e) => {
    let bounds = e.target.getBoundingClientRect();
    let x = e.clientX - bounds.left;
    let y = e.clientY - bounds.top;
    let col = parseInt(x / props.pixelWidth);
    let row = parseInt(y / props.pixelWidth);
    return ([row, col]);
  }

  const onMouseDown = (e) => {
    let [row, col] = pixelUnderCursor(e);
    tool.onMouseDown(row, col);
  }

  const onMouseMove = (e) => {
    let [row, col] = pixelUnderCursor(e);
    tool.onMouseMove(row, col);
  }

  const onMouseUp = () => {
    tool.onMouseUp();
  }

  return (
    <div className="board">
      <canvas
        id="canvas"
        width={props.numCol * props.pixelWidth}
        height={props.numRow * props.pixelWidth}
        ref={canvasRef}
        onMouseDown={(e) => {onMouseDown(e)}}
        onMouseUp={onMouseUp}
        onMouseMove={(e) => {onMouseMove(e)}}
      ></canvas>
    </div>
  );
}

export default Board;