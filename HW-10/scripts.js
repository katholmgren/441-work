var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var userX = 50;
var userY = 50;
var x = 300;
var y = 200;
var randomNumber = Math.floor(Math.random() * 10)
drawSquare();
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
     x+= randomNumber; // Green square movement
     y+= randomNumber;

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




// function hasCollided(object1, object2) {
//     return !(
//         ((object1.y + object1.height) < (object2.y)) ||
//         (object1.y > (object2.y + object2.height)) ||
//         ((object1.x + object1.width) < object2.x) ||
//         (object1.x > (object2.x + object2.width))
//     );
// }
