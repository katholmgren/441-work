// var berry1;
// var yell;
// var blindBerry1;
// var blindBerry2;
// var noMore;
// var blindCar;
// var blindLeft;
// var blindRight;
//
// var berry2;
// var river;
// var boat;
// var sparkly;
// var hotCar;
// var hotLeft;
// var hotRight;
//
// if (berry1){
//   if (yell){
//     if (blindBerry1){
//
//     }
//     if (blindBerry2){
//
//     }
//     if (noMore){
//
//     }
//   }
//   if (blindCar){
//       if (blindLeft){
//
//       }
//       if (blindRight){
//
//       }
//   }
// } if (berry2){
//     if (river){
//       if (boat){
//
//       }
//       if (sparkly){
//
//       }
//     }
//     if (hotCar){
//         if (hotLeft){
//
//         }
//         if (hotRight){
//
//         }
//       }
//   }

  function whichBlind(choice){};
  function whichHot(choice){};


function whichBerry(choice){
// BERRY ONE -----------------------------------------------------------------
 if(choice == 1){
    document.getElementById("test").innerHTML = "Choose to Yell";
    document.getElementById("test2").innerHTML = "Choose to go to car";

    // Yell Choices
    function whichBlind(choice){
      if (choice == 1){
        console.log("You chose to yell for help");
      }
      // Blind Find Car Choices
      else if(choice == 2){
        console.log("You blindly chose to find car");
      }
    }
 }
 // BERRY TWO ---------------------------------------------------------------
 else if(choice == 2){
   document.getElementById("test3").innerHTML = "Choose to jump in river";
   document.getElementById("test4").innerHTML = "Choose to run to car";

 }
}
