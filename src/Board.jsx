import React from "react";
// import "./styles/Board.css"
import Layer from "./Layer";
// import { PIXEL_WIDTH } from "./App";

const Board = (props) => {

  const layers = [];

  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const bgLayer = new Layer(props.numRow, props.numCol, "background");
    bgLayer.fillLayer([255, 255, 255, 1]);
    layers.push(bgLayer);
    render();
  }, []);

  React.useEffect(() => {
    render();
  }, [layers]);

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

  return (
    <div className="board">
      <canvas
        id="canvas"
        width={props.numCol * props.pixelWidth}
        height={props.numRow * props.pixelWidth}
        ref={canvasRef}
      ></canvas>
    </div>
  );
}

export default Board;