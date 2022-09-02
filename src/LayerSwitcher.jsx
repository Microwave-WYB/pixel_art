import Layer from "./Layer";
import React from "react";

const LayerSwitcher = (props) => {

  const [layerButtons, setLayerButtons] = React.useState([]);

  React.useEffect(() => {
    updateLayerButtons();
  }, [])

  const updateLayerButtons = () => {
    setLayerButtons([]);
    for (let i = 0; i < props.layers.arr.length; i++) {
      setLayerButtons((layerButtons) => [
        layerButtons,
        <button key={i} onClick={() => onClick(i)}>{props.layers.arr[i].id}</button>,
      ]);
    }
  }

  const newLayer = () => {
    let newLayer = new Layer(16, 16, `Layer ${props.layers.arr.length}`, true);
    newLayer.fillLayer([255, 255, 0, 0.5]);
    props.layers.arr.push(newLayer);
    switchLayer(props.layers.arr.length - 1);
    updateLayerButtons();
  }

  const onClick = (index) => {
    if (props.layers.curr != index) {
      switchLayer(index);
    } else {
      props.layers.arr[props.layers.curr].toggleVisible();
    }
  }

  const switchLayer = (index) => {
    props.layers.curr = index;
    console.log(props.layers);
  }

  return (
    <div id="layerSwitcher">
      <button onClick={newLayer}>Create Layer</button>
      {layerButtons}
    </div>
  );
}

export default LayerSwitcher;