import React from "react";
import "./styles/Board.css"
import Cursor from "./Cursor";
import { useState, useEffect } from "react";

const pixelSize = 30;

const Board = ({ width, height }) => {

  const actualWidth = width * pixelSize;
  const actualHeight = height * pixelSize;

  const [cursorPos, setCursorPos] = useState([0,0]);

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

  return (
    <div
      className="board"
      style={{ width: actualWidth, height: actualHeight, zIndex: 0}}
    >
      <canvas
        id="cursor-layer"
        className="layer"
        width={actualWidth}
        height={actualHeight}
        onMouseMove={(e) => moveCursor(e)}
      ></canvas>
      <Cursor col={cursorPos[0]} row={cursorPos[1]}></Cursor>
      <canvas
        id="layer1"
        className="layer"
        width={actualWidth}
        height={actualHeight}
      ></canvas>
    </div>
  );
}

export default Board;