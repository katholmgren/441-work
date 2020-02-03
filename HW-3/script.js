
function doSomething(choice){
  // BERRY ONE -----------------------------------------------------------------
   if(choice == 1){ // If you chose berry 1
      document.getElementById("yell").innerHTML = "Choose to Yell"; // Display yell choice
      document.getElementById("blindCar").innerHTML = "Choose to go to car"; // Display car choice
    }
          if (choice == 3){
            document.getElementById("yellBerry1").innerHTML = "Berry 1"; // Display "berry 1" choice
            document.getElementById("yellBerry2").innerHTML = "Berry 2"; // Display "berry 2" choice
            document.getElementById("noMore").innerHTML = "No more berries for me"; // Display "no more berries" choice

          }
          else if(choice == 4){ // Else if you chose to go to car
            document.getElementById("blindLeft").innerHTML = "Go left"; // Display "Go Left" choice
            document.getElementById("blindRight").innerHTML = "Go right"; // Display "Go Right" choice
          }

   // BERRY TWO ---------------------------------------------------------------
   else if(choice == 2){ // If you chose Berry 2
     document.getElementById("river").innerHTML = "Choose to jump in river";
     document.getElementById("hotCar").innerHTML = "Choose to run to car";
   }
          if (choice == 10){
            document.getElementById("boat").innerHTML = "Go to boat";
            document.getElementById("sparkly").innerHTML = "Go to sparkly";
          }
          else if (choice == 11){
            document.getElementById("hotLeft").innerHTML = "Go left";
            document.getElementById("hotRight").innerHTML = "Go right";

          }

   // Blind Results
     if (choice == 5){
       document.getElementById("result1").innerHTML = "Your blindness is healed"; // Berry 1
     }
     if (choice == 6){
       document.getElementById("result2").innerHTML = "Tasty berry, still blind"; // Berry 2
     }
     if (choice == 7){
       document.getElementById("result3").innerHTML = "You are still blind"; // No Berry
     }

     if (choice == 8){
       document.getElementById("result4").innerHTML = "You are still blind"; //Left
     }
     if (choice == 9){
       document.getElementById("result5").innerHTML = "You found treasure"; //Right
     }

     // Heat Results
     if (choice == 12){
       document.getElementById("result6").innerHTML = "Credit card stolen by pirates"; // Boat
     }
     if (choice == 13){
       document.getElementById("result7").innerHTML = "In Kansas"; // Sparkly
     }

     if (choice == 14){
       document.getElementById("result8").innerHTML = "You are hot and uncomfortable forever"; // Left
     }
     if (choice == 15){
       document.getElementById("result9").innerHTML = "You find medicinal salve"; // Right
     }
}
