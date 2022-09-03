/**
 * Component that displays all layers and implements functions to manipulate
 * layers
 */

import Layer from "./Layer";
import React from "react";

const LayerSwitcher = (props) => {

  const [layerButtons, setLayerButtons] = React.useState([]);

  React.useEffect(() => {
    updateLayerButtons();
  }, [])

  // Updates buttons according to current layers
  // TODO: implement as a card that contains buttons for layer creation, deletion,
  // and toggle visibility and lock status
  const updateLayerButtons = () => {
    setLayerButtons([]);
    for (let i = 0; i < props.layers.arr.length; i++) {
      setLayerButtons((layerButtons) => [
        layerButtons,
        <button
          key={i}
          onContextMenu={(e) => {
            e.preventDefault();
            onClick(e, i)
          }}
          onClick={(e) => onClick(e, i)}
          style={{backgroundColor: props.layers.curr === i ? "#ffcc85" : ""}}
        >
          {props.layers.arr[i].id}
        </button>,
      ]);
    }
  }

  /**
   * Create a new layer and update switcher
   */
  const newLayer = () => {
    let newLayer = new Layer(16, 16, `Layer ${props.layers.arr.length}`, true);
    newLayer.fillLayer([255, 255, 0, 0.5]);
    props.layers.arr.push(newLayer);
    switchLayer(props.layers.arr.length - 1);
    updateLayerButtons();
  }

  /**
   * Delete the current layer and update switcher
   */
  const deleteLayer = () => {
    if (props.layers.arr.length === 1) {
      alert("Cannot delete the last layer");
      return;
    }
    props.layers.arr.splice(props.layers.curr, 1);
    props.layers.curr = props.layers.curr - 1;
    updateLayerButtons();
  }

  // TODO: implement this function in each layer card
  const onClick = (e, index) => {
    switch (e.nativeEvent.button) {
      case 0:
        // switch layer with left click
        switchLayer(index);
        console.log("left");
        updateLayerButtons();
        break;
      case 2:
        // toggle visibility with right click
        props.layers.arr[index].toggleVisible();
        console.log("right");
        break;
      default:
        break;
    }
  }

  // Change active layer
  const switchLayer = (index) => {
    props.layers.curr = index;
    console.log(props.layers);
  }

  return (
    <div id="layerSwitcher">
      <button onClick={newLayer}>Create Layer</button>
      <button onClick={deleteLayer}>Delete Layer</button>
      {layerButtons}
    </div>
  );
}

export default LayerSwitcher;