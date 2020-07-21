const canvas = document.querySelector('canvas');
const colorInput = document.querySelector("input#color") as HTMLInputElement;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let color = colorInput.value;
let changed = false;
const context = canvas.getContext('2d');

context.beginPath();

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('touchstart', touchStart);
canvas.addEventListener('touchmove', touchMove);
canvas.addEventListener('touchend', touchEnd);
colorInput.addEventListener('input', inputChanged);

function draw(event: MouseEvent) {
    if (changed) {
        context.closePath();
        changed = false;

        context.beginPath();
    }
    if (event.altKey) {
        context.lineTo(event.clientX, event.clientY);
        context.strokeStyle = color;
        context.stroke();
    } else {
        context.closePath();
        context.beginPath();
    }
}

function touchStart(event: TouchEvent) {
    event.preventDefault();
    context.beginPath();
}

function touchMove(event: TouchEvent) {
    event.preventDefault();
    context.lineTo(event.touches[0].clientX, event.touches[0].clientY);
    context.strokeStyle = color;
    context.stroke();
}
function touchEnd(event: TouchEvent) {
    event.preventDefault();
    context.closePath();
}

function inputChanged() {
    color = colorInput.value;
    changed = true;
}