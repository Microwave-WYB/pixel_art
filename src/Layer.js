export default class Layer {
  constructor(numRow, numCol, id, visible=true) {
    this.numRow = numRow;
    this.numCol = numCol;
    this.id = id;
    this.visible = visible;
    this.pixels = new Array(numRow);
    for (let row = 0; row < this.numRow; row++) {
      this.pixels[row] = new Array(numCol).fill([0, 0, 0, 0]);
    }
    this.buffer = new Set();
  }

  fillLayer(color) {
    for (let row = 0; row < this.numRow; row++) {
      for (let col = 0; col < this.numCol; col++) {
        this.pixels[row][col] = color;
      }
    }
  }

  fillPixel(row, col, color) {
    this.pixels[row][col] = color;
  }

  applyBuffer(color) {
    this.buffer.forEach(([row, col]) => {
      this.pixels[row][col] = color;
    });
  }
}