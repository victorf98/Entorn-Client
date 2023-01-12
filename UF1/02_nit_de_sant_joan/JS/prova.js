const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min, max) {
  return min + Math.random() * (max + 1 - min);
}

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  //Re-add the stars
  stars();
});

function stars() {
  //Add stars to a small fraction of the canvas
  const canvasSize = canvas.width * canvas.height;
  const starsFraction = canvasSize / 2000;

  for(let i = 0; i < starsFraction; i++) {
    //Set up random elements
    let xPos = random(2, canvas.width - 2);
    let yPos = random(2, canvas.height - 2);
    let alpha = random(0.5, 1);
    let size = random(1, 2);

    //Add stars
    ctx.fillStyle = '#ffffff';
    ctx.globalAlpha = alpha;
    ctx.fillRect(xPos, yPos, size, size);
  }
}

//Add the stars
stars();