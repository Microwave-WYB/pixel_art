import React from "react";
import "./styles/Board.css"
import Cursor from "./Cursor";
import { useState, useEffect} from "react";

const Board = (props) => {
  // props.width;
  // props.height;
  // props.tool;
  // props.color;
  const actualWidth = props.width * props.pixelSize;
  const actualHeight = props.height * props.pixelSize;

  const [cursorPos, setCursorPos] = useState([0, 0]);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [currLayer, setCurrLayer] = useState("layer0");
  const [mouseDown, setMouseDown] = useState(-1);

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

  const fillPixel = (color, pos, layerId) => {
    let c = document.getElementById(layerId);
    let ctx = c.getContext("2d");
    let x = pos[0] * props.pixelSize;
    let y = pos[1] * props.pixelSize;
    ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    ctx.fillRect(x, y, props.pixelSize, props.pixelSize);
  }

  const clearPixel = (pos, layerId) => {
    let c = document.getElementById(layerId);
    let ctx = c.getContext("2d");
    let x = pos[0] * props.pixelSize;
    let y = pos[1] * props.pixelSize;
    ctx.clearRect(x, y, props.pixelSize, props.pixelSize);
  }

  const handelMouseDown = (e) => {
    switch (props.tool) {
      case "pencil":
        setMouseDown(e.nativeEvent.button);
        switch (e.nativeEvent.button) {
          case 0:
            fillPixel(props.color, cursorPos, currLayer);
            break;
          case 2:
            e.preventDefault();
            clearPixel(cursorPos, currLayer);
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }

  const handelMouseMove = (e) => {
    switch (mouseDown) {
      case 0:
        fillPixel(props.color, cursorPos, currLayer);
        break;
      case 2:
        clearPixel(cursorPos, currLayer);
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
        id="layer0"
        className="layer"
        width={actualWidth}
        height={actualHeight}
      ></canvas>
    </div>
  );
}

export default Board;