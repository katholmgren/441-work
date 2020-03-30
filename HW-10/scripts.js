var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
ctx.fillStyle = "#0000FF";
drawSquare();

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

function drawSquare(){
    ctx.clearRect(0,0,600,400);
    ctx.fillRect(x, y, 20, 20);
}

function moveUp(){
    y-=10;
}

function moveDown(){
    y+=10;
}

function moveRight(){
    x+=10;
}

function moveLeft(){
    x-=10;
}

// function hasCollided(object1, object2) {
//     return !(
//         ((object1.y + object1.height) < (object2.y)) ||
//         (object1.y > (object2.y + object2.height)) ||
//         ((object1.x + object1.width) < object2.x) ||
//         (object1.x > (object2.x + object2.width))
//     );
// }
