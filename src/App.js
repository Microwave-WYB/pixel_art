import logo from './logo.svg';
import Board from './Board';
import Cursor from './Cursor';
import ToolBox from './ToolBox'
import { useState, useEffect } from "react";

import './styles/App.css';

function App() {
  const [color, setColor] = useState([0,0,0]);
  const [tool, setTool] = useState("pencil");

  return (
    <div className="App">
      <Board
        width={16}
        height={16}
        tool={tool}
        color={color}
        pixelSize={30}
      ></Board>
      <ToolBox tool={tool} onChange={setTool}></ToolBox>
    </div>
  );
}

export default App;
