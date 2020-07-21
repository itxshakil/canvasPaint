var canvas = document.querySelector('canvas');
var colorInput = document.querySelector("input#color");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var color = colorInput.value;
var changed = false;
var context = canvas.getContext('2d');
context.beginPath();
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('touchstart', touchStart);
canvas.addEventListener('touchmove', touchMove);
canvas.addEventListener('touchend', touchEnd);
colorInput.addEventListener('input', inputChanged);
function draw(event) {
    if (changed) {
        context.closePath();
        changed = false;
        context.beginPath();
    }
    if (event.altKey) {
        context.lineTo(event.clientX, event.clientY);
        context.strokeStyle = color;
        context.stroke();
    }
    else {
        context.closePath();
        context.beginPath();
    }
}
function touchStart(event) {
    event.preventDefault();
    context.beginPath();
}
function touchMove(event) {
    event.preventDefault();
    context.lineTo(event.touches[0].clientX, event.touches[0].clientY);
    context.strokeStyle = color;
    context.stroke();
}
function touchEnd(event) {
    event.preventDefault();
    context.closePath();
}
function inputChanged() {
    color = colorInput.value;
    changed = true;
}
