import Tool from "./Tool";
export default class Pencil extends Tool {
  constructor(width, color) {
    super();
    this.width = width;
    this.color = color;
  }

  onMouseDown(row, col, layer) {
    this.mouseDown = true;
    // TODO: use width
    layer.fillPixel(row, col, this.color);
  }

  onMouseUp() {
    this.mouseDown = false;
  }

  onMouseMove(row, col, layer) {
    if (this.mouseDown) {
      layer.fillPixel(row, col, this.color) 
    } else {
      // TODO: use buffer
    }
  }
}