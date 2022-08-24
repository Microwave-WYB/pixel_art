import { clearPixel } from "../utils.js"

class Pencil {
  constructor(color, pos, pencilSize, pixelSize, layerID) {
    this.color = color;
    this.pos = pos;
    this.pencilSize = pencilSize;
    this.pixelSize = pixelSize;
    this.layerID = layerID;
  }

  handleMouseDown = (e) => {
    switch (e.nativeEvent.button) {
      case 0:
        this.draw(this.layerID);
        break;
      case 2:
        e.preventDefault();
        clearPixel(this.pos, this.layerID, this.pixelSize);
        break;
      default:
        break;
    }
  }

  draw = () => {
    let c = document.getElementById(this.layerID);
    let ctx = c.getContext("2d");
    let x = this.pos[0] * this.pixelSize;
    let y = this.pos[1] * this.pixelSize;
    ctx.fillStyle = `rgb(${this.color[0]}, ${this.color[1]}, ${this.color[2]})`;
    ctx.fillRect(x, y, this.pixelSize, this.pixelSize);
    console.log(
      "pencil drawing at [%d, %d] on layer '%s'",
      this.pos[0],
      this.pos[1],
      this.layerID
    );
  }
}

export default Pencil;
