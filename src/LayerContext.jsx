import React from "react";
import Layer from "./Layer";

const LayerContext = React.createContext({
  layers: new Layer(16, 16, "background", true),
  setLayer: () => {}
});

export default LayerContext;
