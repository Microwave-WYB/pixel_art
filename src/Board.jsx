import React from "react";
import Pencil from "./tools/Pencil"
import { clearPixel } from "./utils"
import "./styles/Board.css"
import Cursor from "./Cursor";
import { useState, useEffect} from "react";
import pencil from "./tools/Pencil";

const Board = (props) => {
  // props.width;
  // props.height;
  // props.tool;
  // props.color;
  const actualWidth = props.width * props.pixelSize;
  const actualHeight = props.height * props.pixelSize;

  // Hooks
  const [cursorPos, setCursorPos] = useState([0, 0]);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [currLayer, setCurrLayer] = useState("background");
  const [mouseDown, setMouseDown] = useState(-1);

  // Tools
  const pencil = new Pencil(props.color, cursorPos, 1, props.pixelSize, currLayer);

  const getMousePos = (e) => {
    let rect = e.target.getBoundingClientRect();
    let col = parseInt((e.clientX - rect.left) / props.pixelSize);
    let row = parseInt((e.clientY - rect.top) / props.pixelSize);
    return [col, row];
  }

  const moveCursor = (e) => {
    let [col, row] = getMousePos(e);
    setCursorPos([col, row]);
  }

  const handelMouseDown = (e) => {
    switch (props.tool) {
      case "pencil":
        setMouseDown(e.nativeEvent.button);
        pencil.handleMouseDown(e);
        break;
      default:
        break;
    }
  }

  const handelMouseMove = (e) => {
    switch (mouseDown) {
      case 0:
        // fillPixel(props.color, cursorPos, currLayer);
        pencil.draw(currLayer);
        break;
      case 2:
        clearPixel(cursorPos, currLayer, props.pixelSize);
        break;
      default:
        break;
    }
  }

  const handelMouseLeave = (e) => {
    setMouseDown(-1);
    setCursorVisible(false);
  }

  const handelMouseEnter = (e) => {
    setCursorVisible(true);
  }


  return (
    <div
      className="board"
      style={{ width: actualWidth, height: actualHeight, zIndex: 0 }}
      onMouseLeave={(e) => handelMouseLeave(e)}
      onMouseEnter={(e) => handelMouseEnter(e)}
      onMouseDown={(e) => handelMouseDown(e)}
      onMouseUp={(e) => setMouseDown(-1)}
      onMouseMove={(e) => handelMouseMove(e)}
      onContextMenu={(e) => handelMouseDown(e)}
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
        color={props.color}
        pixelSize={props.pixelSize}
      ></Cursor>
      <canvas
        id="background"
        className="layer"
        width={actualWidth}
        height={actualHeight}
      ></canvas>
    </div>
  );
}

export default Board;