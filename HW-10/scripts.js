//https://www.webfx.com/blog/web-design/bouncing-a-ball-around-with-html5-and-javascript/

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var userX = 50;
var userY = 50;
var width = 50;
var height = 50;
var x = 300;
var y = 200;
var dx=5; // For green square
var dy=5;
var randomNumber = Math.floor(Math.random() * 10)
drawSquare();
setInterval(draw, 1000/60);

var collide = new Audio();
collide.src = "sounds/happy-quick.wav";

$(document).ready(function(){
    $(this).keypress(function(event){
        getKey(event);
    });
});

function getKey(event){ // Controls for blue square
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w"){
        moveUp();
    }
    if(actualLetter == "s"){
        moveDown();
    }
    if(actualLetter == "d"){
        moveRight();
    }
    if(actualLetter == "a"){
        moveLeft();
    }
    drawSquare();
}

function draw(){ // Using this so I could set a framerate (see vars)
     drawSquare();
     ctx.clearRect(0,0,600,400);
     ctx.fillStyle = "#0000FF";
     ctx.fillRect(userX, userY, width, height); // User-controlled square
     ctx.fillStyle = "green";
     ctx.fillRect(x, y, width, height); // Free green square
     x+= dx; // Green square movement
     y+= dy;
     if(x<0 || x>600) dx=-dx;
     if(y<0 || y>400) dy=-dy;
     if(userX<0 || userX>600) userX= 300;
     if(userY<0 || userY>400) userY= 200;
     // blue bottom touches green top || blue top touches green bottom ||blue right touches green left || blue left touches green right
     if (((userY + height) === (y)) && (userY === (y + height)) && ((userX + width) === x) && (userX === (x + width))){
       document.body.style.backgroundColor = "red";
       collide.play();
        } else {
        return false;
        document.body.style.backgroundColor = "white";
      }
}

function drawSquare(){ // My lovely blue squares
    ctx.clearRect(0,0,600,400);
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(userX, userY, width, height); // User-controlled square
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, width, height); // Free green square
}

function moveUp(){
    userY-=10;
}

function moveDown(){
    userY+=10;
}

function moveRight(){
    userX+=10;
}

function moveLeft(){
    userX-=10;
}

// function hasCollided() {
//       x-=5;
//       dy = -5;
//       backgroundcolor = "rgb(40,150,200)";
//       // height+= 1;
//       // width+= 1;
// }
