

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Line
let clicked = false;


c.beginPath();
//c.moveTo(Math.random() * window.innerWidth,Math.random() * window.innerWidth);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('touchstart', touchStart);
canvas.addEventListener('touchmove', touchMove);
canvas.addEventListener('touchend', touchEnd);

function touchStart(e){
    e.preventDefault();
    c.moveTo(e.touches[0].pageX,e.touches[0].pageY);
    c.strokeStyle  = "white";
    c.stroke();
}
function touchMove(e){
    e.preventDefault();
    c.lineTo(e.touches[0].pageX,e.touches[0].pageY);
    c.strokeStyle  = "#766004";
    c.stroke();
}
function touchEnd(e){

}
function draw(e){
    console.log(e);
    if(e.altKey || clicked){
         console.log('123');
        c.lineTo(e.layerX,e.layerY);
        c.strokeStyle  = "#766004";
        c.stroke();
    }
    if(!e.altKey || !clicked){
        c.moveTo(e.layerX,e.layerY);
        c.strokeStyle  = "white";
        c.stroke();
    }
     
}

function waitBtn(){
    clicked=false;
}
 function drawBtn()
{
    clicked=true;
}