
var berry1 = 1;
var berry2 = 2;
var yell = 3;
var blindCar = 4;
var river = 5;
var hotCar = 6;
var blindBerry1 = 7;
var blindBerry2 = 8;
var noBerry = 9;
var blindLeft = 10;
var blindRight = 11;
var boat = 12;
var sparkly= 13;
var hotLeft = 14;
var hotRight = 15;

function start(){
  document.getElementById("berry1").innerHTML = "";
  document.getElementById("berry2").innerHTML = "";
}
function eatBerryOne(){
  if (berry1 === 1){
    document.getElementById("berry1text").innerHTML = "You are now blind!";
    document.getElementById("berry1").innerHTML = "";
    document.getElementById("berry2").innerHTML = "";
  }
  if (berry2=== 2){
    document.getElementById("berry1text").innerHTML = "You are now hot!";
    document.getElementById("berry1").innerHTML = "";
    document.getElementById("berry2").innerHTML = "";
    document.getElementById("river").innerHTML = "Jump in the River!";

  }
}
