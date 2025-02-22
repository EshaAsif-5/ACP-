const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let currentShape = null;

function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(200, 150, 50, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    currentShape = 'circle';
}

function drawRectangle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(150, 100, 100, 100);
    ctx.strokeRect(150, 100, 100, 100);
    currentShape = 'rectangle';
}

function fillColor(color) {
    if (currentShape === 'circle') {
        ctx.beginPath();
        ctx.arc(200, 150, 50, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
    } else if (currentShape === 'rectangle') {
        ctx.fillStyle = color;
        ctx.fillRect(150, 100, 100, 100);
        ctx.strokeRect(150, 100, 100, 100);
    }
}
