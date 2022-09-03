/**
 * Data structures and functions that simulate a layer.
 */
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
  }

  /**
   * Fill the entire layer with one color
   * @param {[r, g, b, a]} color
   */
  fillLayer(color) {
    for (let row = 0; row < this.numRow; row++) {
      for (let col = 0; col < this.numCol; col++) {
        this.pixels[row][col] = color;
      }
    }
  }

  /**
   * Fill a single pixel with a specified color
   * @param {number} row 
   * @param {number} col 
   * @param {[r, g, b, a]} color 
   */
  fillPixel(row, col, color) {
    this.pixels[row][col] = color;
  }

  /**
   * Toggle the visibility of the layer
   */
  toggleVisible() {
    this.visible = !this.visible;
  }
}