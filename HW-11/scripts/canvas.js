var canvas;
var ctx;
var x = 50;
var y = 50;
var dx = 5;
var dy = Math.floor(Math.random() * 10);
var square1, square2;
var squareArray = [];
var lives = 3;

const img = new Image()
img.src = "./imgs/squares-abstract.jpg"
img.onload = () => {
  ctx.drawImage(img, 0, 0)
}

$(document).ready(function(){
    setup();
    draw();
    $(this).keypress(function(event){
        getKey(event);
    });
});

function setup(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    setInterval(draw, 1000/60);
    //drawSquare();

    // create two objects
    square1 = new Square(100,100,70,70, "#00008b");
    square2 = new Square(400,400,60,60, "#ffff00");
    $.getJSON("information.json", function(data) {
        for(var i = 0; i < data.squares.length; i++){
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
    });
}

function draw(){
     drawSquare();
     ctx.clearRect(x,y,600,400);
     ctx.fillStyle = square1.color;
     ctx.fillRect(square1.x, square1.y, square1.w, square1.h); // User-controlled blue square
     ctx.fillStyle = square2.color;
     ctx.fillRect(square2.x, square2.y, square2.w, square2.h); // Free green square
     for(var i = 0; i < squareArray.length; i++){
         ctx.fillStyle = squareArray[i].color;
         ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].w, squareArray[i].h);
         squareArray[i].x+= dx;
         squareArray[i].y+= dy;
         if(squareArray[i].x<0 || squareArray[i].x>600) squareArray[i].x=-dx; // Stay in the canvas
         if(squareArray[i].y<0 || squareArray[i].y>400) squareArray[i].y=-dy;
     }
     square2.x+= dx; // Green square movement
     square2.y+= dy;


     if(square2.x<0 || square2.x>600) dx=-dx; // Stay in the canvas
     if(square2.y<0 || square2.y>400) dy=-dy;
     if(square1.x<0 || square1.x>600) square1.x= 300;
     if(square1.y<0 || square1.y>400) square1.y= 200;

     if (square1.x < square2.x + square2.w &&
        square1.x + square1.w > square2.x &&
        square1.y < square2.y + square2.h &&
        square1.y + square1.h > square2.y) {
         // collision detected!
         //collide.play();
         console.log("Success")
         square2.w++;
         square2.h++;
//          if (user.x < green.x + green.w &&
//    user.x + user.w > green.x &&
//    user.y < green.y + green.h &&
//    user.y + user.h > green.y) {
//     // collision detected!
//     collide.play();
//     green.w++;
//     green.h++;
// }
     }
}

function drawSquare(){
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = square1.color;
    ctx.fillRect(square1.x, square1.y, square1.w, square1.h);
    ctx.fillStyle = square2.color;
    ctx.fillRect(square2.x, square2.y, square2.w, square2.h);
    for(var i = 0; i < squareArray.length; i++){
        ctx.fillStyle = squareArray[i].color;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].w, squareArray[i].h);

    }
}

function getKey(event){
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w"){
        square1.y-=10;
    }
    if(actualLetter == "s"){
        square1.y+=10;
    }
    if(actualLetter == "a"){
        square1.x-=10;
    }
    if(actualLetter == "d"){
        square1.x+=10;
    }
}

// This does not work:
// function hasCollided(object1, object2) {
//     return !(
//         ((object1.y + object1.h) < (object2.y)) ||
//         (object1.y > (object2.y + object2.h)) ||
//         ((object1.x + object1.w) < object2.x) ||
//         (object1.x > (object2.x + object2.w))
//     );
// }
