var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2;
var direction;
var questions;
var squareArray = [];
var lives = 3;

$(document).ready(function(){
    setup();
    $(this).keypress(function(event){
        getKey(event);
    });
});

function setup(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // create two objects
    square1 = new Square(100,100,50,50,"#0000FF");
    square2 = new Square(400,400,100,100,"#00FF00");
    $.getJSON("information.json", function(data) {
        for(var i = 0; i < data.squares.length; i++){
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
    });
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
        square1.x+=10;
    }
    if(actualLetter == "d"){
        square1.x-=10;
    }
}

function drawSquare(){
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
    for(var i = 0; i < squareArray.length; i++){
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }
}
