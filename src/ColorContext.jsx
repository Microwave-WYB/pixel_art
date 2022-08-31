import React from "react";

const ColorContext = React.createContext({
  rgba: [0, 0, 0, 1],
  setColor: () => {}
});

export default ColorContext;
