// Get a reference to the canvas and its 2D drawing context
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let x = 0;
let y = 0;

canvas.addEventListener('mousedown', (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

canvas.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;

  // Start a new path and move to the previous position
  ctx.beginPath();
  ctx.moveTo(x, y);

  // Draw a line to the current mouse position
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  // Update the current position
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});

canvas.addEventListener('mouseleave', () => {
  isDrawing = false;
});

  