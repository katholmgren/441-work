p2text= "You swallow the berry, and your vision fades until you are completely blind! Try not to panic! You decide it's best to either stay put and yell for help or try to return to your car where you left your cell phone. What will you do?";
p3text= "You yell for help for hours until you hear a branch break nearby. You think it's bear, until a woman greets you. 'What's wrong?' she asks. You explain your situation, and she says she's a nomadic apocathery woodswoman. She offers you two berries, one of which might cure your blindness. But then again, didn't you learn your lesson about eating berries?";
p4text= "You can't exactly remember which way your car is... No matter, you'll just have to guess!";
p5text= "<i>Wow, that berry tasted horrible,</i> you think to yourself. Then you start to feel funny. Your temperature rapidly increases, and your skin feels like fire. You look down and see that your arms are sweaty and bright red. You need to act fast. What will you do?";
p6text= "You cannonball into the river, and you sigh as the heat lifts. But how could you possibly forget that you can't swim? Dummy! The current overatakes you. Suddenly, you are gasping and flailing to stay above the river. But look! It's a boat! A really cool-looking boat! You better try to head over there. But what's that? Is there something shiny over there?";
p7text= "You can't exactly remember which way your car is... No matter, you'll just have to guess!";
// Results:
p8text= "You're healed! After you safely return home, you write a blog post about your experience, become 'instafamous', and become the next Bear Grylls. Congratulations!";
p9text= "Wow. It's a miracle... That berry tasted fantastic! Unfortunately your blindness is not healed, but don't worry-- that berry tasted so good it was worth going blind for.";
p10text= "Here's the good news: The kind woodswoman guides you to your car and gives you a ride home. The bad news is that the doctors say your blindness will most likely be permanant. But you learn to be content despite your loss. No small feat, so I sincerely congratuate you.";
p11text= "Here's the good news: You find your car, call 911, and arrive home safely. The bad news is that the doctors say your blindness will most likely be permanant. But you learn to be content despite your loss. No small feat, so I sincerely congratuate you.";
p12text=" After stumbling around in complete darkness for hours, you realize you may have made a wrong turn. You start back-tracking, when suddenly you fall into a deep hole! You start crying, realizing that you must die in this hole completely blind and alone. You curl up on the ground and bravely face your doom. But then, what's this? Your vision is returning! And squinting, you see some sort of chest. You've found treasure! (there's a skull too, but we'll ignore that for now). Overjoyed, you bring the treasure back to civilization. You are now $500 million dollars richer. But money doesn't buy happiness, my friend. Remember that when you role around in your limosines.";
p13text= "You yell for help, and the captain comes near and pulls you on board. You still feel hot, so he gives you some medicine that clears it up. But just when you thought you made a new friend, the captain pulls a gun on you and takes your credit card. He was a pirate. Just your luck.";
p14text= "'Oooo pretty,' you say when you reach the shiny object. It's another berry, so you eat it (you're not very smart. At this point we've learned you don't make good decisions). Suddenly, you're in Kansas! You've always wanted to go to Kansas!";
p15text= "Here's the good news: You find your car, call 911, and arrive home safely. The bad news is that the doctors say you will be sweaty and uncomfortable for the rest of your life. But you learn to be content anyway. No small feat, so I sincerely congratuate you.";
p16text= "You frantically run toward the right, afraid your body heat will start a forest fire. Then you trip and fall in a puddle of medicinal salve. Your burns are healed! After going home and sorting yourself out, you return to puddle and bottle the salve. You research it, cure cancer, and go down in pharmacist history.";

function doSomething(choice){
  // BERRY ONE -----------------------------------------------------------------
   if(choice == 1){ // If you chose berry 1
      document.getElementById("p2text").innerHTML = p2text; // "You became blind!" text
      document.getElementById("yell").innerHTML = "Yell"; // Display yell choice
      document.getElementById("blindCar").innerHTML = "Choose to go to car"; // Display car choice
    }
          if (choice == 3){
            document.getElementById("p3text").innerHTML = p3text; // "A woman comes" text
            document.getElementById("yellBerry1").innerHTML = "Berry 1"; // Display "berry 1" choice
            document.getElementById("yellBerry2").innerHTML = "Berry 2"; // Display "berry 2" choice
            document.getElementById("noMore").innerHTML = "No thanks lady. I'm not a fool"; // Display "no more berries" choice

          }
          else if(choice == 4){ // Else if you chose to go to car
            document.getElementById("p4text").innerHTML = p4text; // "Which way?" text
            document.getElementById("blindLeft").innerHTML = "Go left"; // Display "Go Left" choice
            document.getElementById("blindRight").innerHTML = "Go right"; // Display "Go Right" choice
          }

   // BERRY TWO ---------------------------------------------------------------
   else if(choice == 2){ // If you chose Berry 2
     document.getElementById("p5text").innerHTML = p5text; // "You start to feel hot" text
     document.getElementById("river").innerHTML = "Choose to jump in river";
     document.getElementById("hotCar").innerHTML = "Choose to run to car";
   }
          if (choice == 10){
            document.getElementById("p6text").innerHTML = p6text; // "How did you forget you can't swim?" text
            document.getElementById("boat").innerHTML = "Go to boat";
            document.getElementById("sparkly").innerHTML = "Go to sparkly";
          }
          else if (choice == 11){
            document.getElementById("p7text").innerHTML = p7text; // "Which way" text
            document.getElementById("hotLeft").innerHTML = "Go left";
            document.getElementById("hotRight").innerHTML = "Go right";

          }

   // Blind Results
     if (choice == 5){
       document.getElementById("result1").innerHTML = p8text; // Berry 1
     }
     if (choice == 6){
       document.getElementById("result2").innerHTML = p9text; // Berry 2
     }
     if (choice == 7){
       document.getElementById("result3").innerHTML = p10text; // No Berry
     }

     if (choice == 8){
       document.getElementById("result4").innerHTML = p11text; //Left
     }
     if (choice == 9){
       document.getElementById("result5").innerHTML = p12text; //Right
     }

     // Heat Results
     if (choice == 12){
       document.getElementById("result6").innerHTML = p13text; // Boat
     }
     if (choice == 13){
       document.getElementById("result7").innerHTML = p14text; // Sparkly
     }

     if (choice == 14){
       document.getElementById("result8").innerHTML = p15text; // Left
     }
     if (choice == 15){
       document.getElementById("result9").innerHTML = p16text; // Right
     }
}
