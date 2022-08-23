import React from "react";
import "./styles/Board.css"
import Cursor from "./Cursor";
import { useState, useEffect} from "react";

export const pixelSize = 30;

const Board = (props) => {
  let interval;
  const actualWidth = props.width * pixelSize;
  const actualHeight = props.height * pixelSize;

  const [cursorPos, setCursorPos] = useState([0, 0]);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [currColor, setCurrColor] = useState([0, 0, 0]);
  const [currLayer, setCurrLayer] = useState("layer0");
  const [mouseDown, setMouseDown] = useState(-1);

  const getMousePos = (e) => {
    let rect = e.target.getBoundingClientRect();
    let col = parseInt((e.clientX - rect.left) / pixelSize);
    let row = parseInt((e.clientY - rect.top) / pixelSize);
    return [col, row];
  }

  const moveCursor = (e) => {
    let [col, row] = getMousePos(e);
    setCursorPos([col, row]);
  }

  const fillPixel = (color, pos, layerId) => {
    let c = document.getElementById(layerId);
    let ctx = c.getContext("2d");
    let x = pos[0] * pixelSize;
    let y = pos[1] * pixelSize;
    ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    ctx.fillRect(x, y, pixelSize, pixelSize);
  }

  const clearPixel = (pos, layerId) => {
    let c = document.getElementById(layerId);
    let ctx = c.getContext("2d");
    let x = pos[0] * pixelSize;
    let y = pos[1] * pixelSize;
    ctx.clearRect(x, y, pixelSize, pixelSize);
  }

  const handleMouseDown = (e) => {
    setMouseDown(e.nativeEvent.button);
    switch (e.nativeEvent.button) {
      case 0:
        fillPixel(currColor, cursorPos, currLayer);
        break;
      case 2:
        e.preventDefault();
        clearPixel(cursorPos, currLayer);
        break;
      default:
        break;
    }
  }

  const handleMouseMove = (e) => {
    console.log(mouseDown);
    switch (mouseDown) {
      case 0:
        fillPixel(currColor, cursorPos, currLayer);
        break;
      case 2:
        clearPixel(cursorPos, currLayer);
        break;
      default:
        break;
    }
  }

  const handleMouseLeave = (e) => {
    setMouseDown(-1);
    setCursorVisible(false);
  }

  const handleMouseEnter = (e) => {
    setCursorVisible(true);
  }


  return (
    <div
      className="board"
      style={{ width: actualWidth, height: actualHeight, zIndex: 0 }}
      onMouseLeave={(e) => handleMouseLeave(e)}
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseUp={(e) => setMouseDown(-1)}
      onMouseMove={(e) => handleMouseMove(e)}
      onContextMenu={(e) => handleMouseDown(e)}
    >
      <canvas
        id="cursor-layer"
        className="layer"
        width={actualWidth}
        height={actualHeight}
        onMouseMove={(e) => moveCursor(e)}
      ></canvas>
      <Cursor
        col={cursorPos[0]}
        row={cursorPos[1]}
        visible={cursorVisible}
      ></Cursor>
      <canvas
        id="layer0"
        className="layer"
        width={actualWidth}
        height={actualHeight}
      ></canvas>
    </div>
  );
}

export default Board;