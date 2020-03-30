var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var userX = 50;
var userY = 50;
var x = 300;
var y = 200;
var dx=5; // For green square
var dy=5;
var randomNumber = Math.floor(Math.random() * 10)
drawSquare();
hasCollided();
setInterval(update, 1000/60);

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

function update(){ // Using this so I could set a framerate (see vars)
     drawSquare();
     x+= dx; // Green square movement
     y+= dy;
     if(x<0 || x>600) dx=-dx;
     if(y<0 || y>400) dy=-dy;
     if(userX<0 || userX>600) userX= 300;
     if(userY<0 || userY>400) userY= 200;
     x+=dx;
     y+=dy;
}

function drawSquare(){ // My lovely blue squares
    ctx.clearRect(0,0,600,400);
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(userX, userY, 20, 20); // User-controlled square
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, 20, 20); // Free green square
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

function hasCollided() {
    if (((userY + 20) < (y)) || (userY > (y + 20)) || ((userX + 20) < x) || (userX > (x + 20))){
      x-=dx;
      y-=dy;
    }
}
