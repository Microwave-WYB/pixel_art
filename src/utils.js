export const clearPixel = (pos, layerID, pixelSize) => {
  let c = document.getElementById(layerID);
  let ctx = c.getContext("2d");
  let x = pos[0] * pixelSize;
  let y = pos[1] * pixelSize;
  ctx.clearRect(x, y, pixelSize, pixelSize);
  console.log("clear")
}