
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const img = new Image()
img.src = "./imgs/landscape.jpg"
img.onload = () => {
  ctx.drawImage(img, 0, 0)
}

var user = {x: 50, y: 50, w: 50, h: 50}
var green = {x: 300, y: 200, w: 50, h: 50}
var dx=5; // Delta for green square
var dy=5;
setInterval(draw, 1000/60);

// Sounds
var collide = new Audio();
collide.src = "sounds/happy-quick.wav";

// Not sure what this does exactly
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

function draw(){
     drawSquare();
     ctx.clearRect(0,0,600,400);
     ctx.fillStyle = "#0000FF";
     ctx.fillRect(user.x, user.y, user.w, user.h); // User-controlled blue square
     ctx.fillStyle = "green";
     ctx.fillRect(green.x, green.y, green.w, green.h); // Free green square
     green.x+= dx; // Green square movement
     green.y+= dy;

     if(green.x<0 || green.x>600) dx=-dx; // Stay in the canvas
     if(green.y<0 || green.y>400) dy=-dy;
     if(user.x<0 || user.x>600) user.x= 300;
     if(user.y<0 || user.y>400) user.y= 200;

     if (user.x < green.x + green.w &&
        user.x + user.w > green.x &&
        user.y < green.y + green.h &&
        user.y + user.h > green.y) {
         // collision detected!
         collide.play();
         green.w++;
         green.h++;
     }
}

function drawSquare(){ // My lovely blue squares
    ctx.clearRect(0,0,600,400);
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(user.x, user.y, user.w, user.h); // User-controlled square
    ctx.fillStyle = "green";
    ctx.fillRect(green.x, green.y, green.w, green.h); // Free green square
}

function moveUp(){
    user.y-=10;
}

function moveDown(){
    user.y+=10;
}

function moveRight(){
    user.x+=10;
}

function moveLeft(){
    user.x-=10;
}
