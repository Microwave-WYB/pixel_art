import logo from './logo.svg';
import Board from './Board';
import Cursor from './Cursor';
import { useState, useEffect } from "react";

import './styles/App.css';

const pixelSize = 30;

function App() {
  return (
    <div className="App">
      <Board width={16} height={16}></Board>
    </div>
  );
}

export default App;
