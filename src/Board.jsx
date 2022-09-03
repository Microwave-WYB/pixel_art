/**
 * A board components that renders the canvas when pixels change
 */

import React from "react";
import ColorContext from "./ColorContext";
// import "./styles/Board.css"
import Layer from "./Layer";
// import { PIXEL_WIDTH } from "./App";
import ToolContext from "./ToolContext"
import LayerContext from "./LayerContext";

const Board = (props) => {

  const canvasRef = React.useRef(null);

  // Updates the canvas every 10ms
  React.useEffect(() => {
    const interval = setInterval(() => {
      render();
    }, 10);
  }, []);

  // Update the canvas by iterating through layers from bottom to top.
  const render = () => {
    let ctx = canvasRef.current.getContext("2d");
    props.layers.arr.forEach(layer => {
      // Skip invisible layers
      if (!layer.visible) {
        return;
      }
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

  // Return the pixel's position under a mouse event
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
    props.tool.onMouseDown(row, col, props.layers.arr[props.layers.curr]);
  }

  const onMouseMove = (e) => {
    let [row, col] = pixelUnderCursor(e);
    props.tool.onMouseMove(row, col, props.layers.arr[props.layers.curr]);
  }

  const onMouseUp = () => {
    props.tool.onMouseUp();
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