/**
 * Inspired by some Youtube Tutorial
 */

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
// c.fillStyle = "red";
// c.fillRect(100, 100, 200 , 40);
// c.fillStyle = "blue" ;
// c.fillRect(10, 120, 100 , 140);
// c.fillStyle = "yellow";
// c.fillRect(0, 10, 200 , 40);

// // Line
// c.beginPath();
// c.moveTo(500,50);
// c.lineTo(700,170);
// c.lineTo(800,270);
// c.strokeStyle  = "#766004";
// c.stroke();


// //Arc Circle

// c.arc(500 , 400 , 30 , 0 , Math.PI * 2 , false);
// c.stroke();

// c.beginPath();
// c.arc(900 , 600 , 30 , 0 , 6 , false);
// c.strokeStyle = "dodgerblue";
// c.stroke();

// for(var i=0; i < 100 ; i++){
//     var r = Math.floor(Math.random() * 256);
//     var g = Math.floor(Math.random() * 256);
//     var b = Math.floor(Math.random() * 256);
//     var a = Math.random();

//     var x =Math.random() * window.innerWidth;
//     var y=Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x , y , 30 , 0 , Math.PI * 2 , false);
//     c.strokeStyle = "rgba("+r +"," +g + "," +b + "," +a + ")";
//     c.stroke();
// }


//  c.beginPath();
//  c.arc(200 , 200 , 30 , 0 , Math.PI * 2 , false);
//  c.strokeStyle = "dodgerblue";
//  c.stroke();


function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y =y;
    this.dx =dx;
    this.dy = dy;
    this.radius = radius;
    this.draw = function(){
        c.beginPath();
        c.arc(this.x , this.y , this.radius , 0 , Math.PI * 2 , false);
        c.strokeStyle = "dodgerblue";
        c.stroke();
    }
    this.update = function(){
        if(this.x+this.radius > innerWidth ||this.x-this.radius < 0){
            this.dx = -this.dx ;
        }

        this.x +=this.dx;
        if(this.y+this.radius > innerHeight ||this.y-this.radius < 0){
            this.dy = -this.dy ;
        }

        this.y +=this.dy;
    }
}

var x = (Math.random())*innerWidth;
var y = (Math.random())*innerHeight;
var dx = (Math.random() - 0.5) * 10;
var dy =  (Math.random() - 0.5) * 10;
 var num = 0;
 var radius = 30;
 function animate(){
    requestAnimationFrame(animate);
    num += num + 1 ;
    // console.log(num);
    // c.clearRect(0 , 0 , innerWidth , innerHeight);
    c.beginPath();
    c.clearRect(0,0,innerWidth,innerHeight);
    c.arc(x , y , radius , 0 , Math.PI * 2 , false);
    c.strokeStyle = "dodgerblue";
    c.fill();
    c.fillStyle="dodgerblue";
    c.stroke();
    if(x+radius > innerWidth ||x-radius < 0){
        dx = -dx ;
    }

    x +=dx;
    if(y+radius > innerHeight ||y-radius < 0){
        dy = -dy ;
    }

    y +=dy;
 }

 animate();