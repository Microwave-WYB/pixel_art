import Tool from "./Tool";
export default class Pencil extends Tool {
  constructor(layer, width, color) {
    super(layer);
    this.width = width;
    this.color = color;
  }

  onMouseDown(row, col) {
    this.mouseDown = true;
    // TODO: use width
    this.layer.fillPixel(row, col, this.color);
  }

  onMouseUp() {
    this.mouseDown = false;
  }

  onMouseMove(row, col) {
    if (this.mouseDown) {
      this.layer.fillPixel(row, col, this.color) 
    } else {
      // TODO: use buffer
    }
  }
}