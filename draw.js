// Boilerplate functions
function randNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomColor() {
    var color = '#'; // hexadecimal starting symbol
    var letters = ['D50000', 'C51162', 'AA00FF', '00BFA5', 'FF6D00', 'DD2C00', '263238', '000000'];
    color += letters[randNum(0, 8)];
    return color;
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var radius = 4;
var tau = Math.PI*2;

var mouseIsDown = false;

function startPath() {
    mouseIsDown = true;
}
function endPath() {
    mouseIsDown = false;
    ctx.closePath();
    ctx.beginPath();
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawDot(e) {
    ctx.lineWidth = radius * 2;
    if (mouseIsDown) {
        pathColor = randomColor();
        ctx.fillStyle = pathColor;
        ctx.strokeStyle = pathColor;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(e.offsetX, e.offsetY, radius, 0, tau);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    }
}

// Event listeners
canvas.addEventListener('mousedown', startPath);
canvas.addEventListener('mouseup', endPath);
canvas.addEventListener('mousemove', drawDot);
