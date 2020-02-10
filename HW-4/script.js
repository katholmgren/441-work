  function getChoice1()
    {
        var myChoice = document.getElementById("choice").value;
        var myPage = document.getElementById("pagetext");
        if(myChoice === "Berry 1")
        {
            document.getElementById("mainImage").src="./imgs/blind.jpg";
            document.getElementById("choice").style.display="none";
            document.getElementById("btnSubmit").style.display="none";

            document.getElementById("choice2").style.display="block";
            document.getElementById("btnSubmit2").style.display="block";


            myPage.innerHTML = "Oh you chose berry 1. You are blind now. Do you want to yell for help or return to the car to call 911?";
        }
        else if(myChoice === "Berry 2")
        {
            document.getElementById("mainImage").src="./imgs/hot.jpg";
            document.getElementById("choice").style.display="none";
            document.getElementById("btnSubmit").style.display="none";

            document.getElementById("choice3").style.display="block";
            document.getElementById("btnSubmit3").style.display="block";

            myPage.innerHTML = "You chose berry 2. You are now feeling very hot. Do you want to jump in the river or return to the car?";

        }
        else
        {
            myPage.innerHTML = "Invalid answer";
        }

    }

    function getChoice2()
    {
        var myChoice2 = document.getElementById("choice2").value;
        var myPage = document.getElementById("pagetext");

        if(myChoice2 === "Yell")
        {
          document.getElementById("mainImage").src="./imgs/more-berries.jpg";
          document.getElementById("choice2").style.display="none";
          document.getElementById("btnSubmit2").style.display="none";

          document.getElementById("choice4").style.display="block";
          document.getElementById("btnSubmit4").style.display="block";

          myPage.innerHTML = "You yell and a woman comes and offers you two berries. Do you want berry 1 or berry 2?";
        }
        else if(myChoice2 === "Car")
        {
          document.getElementById("mainImage").src="./imgs/leftright.jpg";
          document.getElementById("choice2").style.display="none";
          document.getElementById("btnSubmit2").style.display="none";

          document.getElementById("choice5").style.display="block";
          document.getElementById("btnSubmit5").style.display="block";

          myPage.innerHTML = "Was the car left or right?";
        }
        else
        {
          myPage.innerHTML = "Invalid Answer"
        }
    }

    function getChoice3()
    {
        var myChoice3 = document.getElementById("choice3").value;
        var myPage = document.getElementById("pagetext");

        if(myChoice3 === "River")
        {
          document.getElementById("mainImage").src="./imgs/boat.jpg";
          document.getElementById("choice3").style.display="none";
          document.getElementById("btnSubmit3").style.display="none";

          document.getElementById("choice6").style.display="block";
          document.getElementById("btnSubmit6").style.display="block";

          myPage.innerHTML = "You jump in the river. Do you want to swim to a boat or to something sparkly?";
        }

        else if(myChoice3 === "Car")
        {
          document.getElementById("mainImage").src="./imgs/leftright.jpg";
          document.getElementById("choice3").style.display="none";
          document.getElementById("btnSubmit3").style.display="none";

          document.getElementById("choice7").style.display="block";
          document.getElementById("btnSubmit7").style.display="block";

          myPage.innerHTML = "Was the car left or right?";
        }
        else
        {
          myPage.innerHTML = "Invalid Answer"
        }
    }

    function getChoice4()
    {
        var myChoice4 = document.getElementById("choice4").value;
        var myPage = document.getElementById("pagetext");

        if(myChoice4 === "Berry 1")
        {
          document.getElementById("mainImage").src="./imgs/home.jpg";
          document.getElementById("choice4").style.display="none";
          document.getElementById("btnSubmit4").style.display="none";

          document.getElementById("choice8").style.display="block";
          document.getElementById("btnSubmit8").style.display="block";

          myPage.innerHTML = "Your blindness is healed. Do you want to go home or to the hospital (just in case)?";
        }

        else if(myChoice4 === "Berry 2")
        {
          document.getElementById("mainImage").src="./imgs/leftright.jpg";
          document.getElementById("choice4").style.display="none";
          document.getElementById("btnSubmit4").style.display="none";
          document.getElementById("playAgain").style.display="block";

          myPage.innerHTML = "You are now blind and sick. And in the woods alone forever and ever and ever and ever <i>and ever</i>.";
        } else
        {
          myPage.innerHTML = "Invalid Answer"
        }
    }

    function getChoice5()
    {
        var myChoice5 = document.getElementById("choice5").value;
        var myPage = document.getElementById("pagetext");

        if(myChoice5 === "Left")
        {
          document.getElementById("mainImage").src="./imgs/money.jpg";
          document.getElementById("choice5").style.display="none";
          document.getElementById("btnSubmit5").style.display="none";
          document.getElementById("playAgain").style.display="block";

          myPage.innerHTML = "You go left and fall into a ditch. Then your blindness heals and you find 500 million dollars in the ditch. It's your lucky day!";
        }

        else if(myChoice5 === "Right")
        {
          document.getElementById("mainImage").src="./imgs/blind.jpg";
          document.getElementById("choice5").style.display="none";
          document.getElementById("btnSubmit5").style.display="none";
          document.getElementById("playAgain").style.display="block";

          myPage.innerHTML = "You find your car and call 911, but your blindness never heals. But you learn to be content (No small feat. Congratualations).";
        }
    }

    function getChoice6()
    {
        var myChoice6 = document.getElementById("choice6").value;
        var myPage = document.getElementById("pagetext");

        if(myChoice6 === "Boat")
        {
          document.getElementById("mainImage").src="./imgs/pirate.jpg";
          document.getElementById("choice6").style.display="none";
          document.getElementById("btnSubmit6").style.display="none";
          document.getElementById("playAgain").style.display="block";

          myPage.innerHTML = "You swim to the boat. It's a pirate. He steals your credit card. Sorry, buddy.";
        }

        else if(myChoice6 === "Sparkly")
        {
          document.getElementById("mainImage").src="./imgs/kansas.jpg";
          document.getElementById("choice6").style.display="none";
          document.getElementById("btnSubmit6").style.display="none";
          document.getElementById("playAgain").style.display="block";

          myPage.innerHTML = "The sparkly is a berry! So yes, you eat it. Turns out, it's a magic berry. You find yourself in Kansas (much like Dorthy's shoes in Wizard of Oz). You've always wanted to go to Kansas.";
        }
      }

      function getChoice7()
      {
          var myChoice7 = document.getElementById("choice7").value;
          var myPage = document.getElementById("pagetext");

          if(myChoice7 === "Left")
          {
            document.getElementById("mainImage").src="./imgs/blind.jpg";
            document.getElementById("choice7").style.display="none";
            document.getElementById("btnSubmit7").style.display="none";

            document.getElementById("choice10").style.display="block";
            document.getElementById("btnSubmit10").style.display="block";

            myPage.innerHTML = "You collapse from heat stroke. Do you dream about elves or dragons?";
          }

          else if(myChoice7 === "Right")
          {
            document.getElementById("mainImage").src="./imgs/famous.jpg";
            document.getElementById("choice7").style.display="none";
            document.getElementById("btnSubmit7").style.display="none";
            document.getElementById("playAgain").style.display="block";

            myPage.innerHTML = "You run through the woods and trip. You fall into a puddle of medicinal salve. It heals all your burns! So you bottle it, return to civilization, and go down in pharmaceutical history.";
          }
          else
          {
            myPage.innerHTML = "Invalid Answer"
          }
        }

        function getChoice8()
        {
            var myChoice8 = document.getElementById("choice8").value;
            var myPage = document.getElementById("pagetext");

            if(myChoice8 === "Home")
            {
              document.getElementById("mainImage").src="./imgs/home.jpg";
              document.getElementById("choice8").style.display="none";
              document.getElementById("btnSubmit8").style.display="none";

              document.getElementById("choice9").style.display="block";
              document.getElementById("btnSubmit9").style.display="block";

              myPage.innerHTML = "You drive home. Do you want to blog about your experience or make a grilled cheese sandwich?";
            }

            else if(myChoice8 === "Hospital")
            {
              document.getElementById("mainImage").src="./imgs/hospital.jpg";
              document.getElementById("choice8").style.display="none";
              document.getElementById("btnSubmit8").style.display="none";
              document.getElementById("playAgain").style.display="block";

              myPage.innerHTML = "The doctor says your eyes are fine, but you're a little delusional. He wants you to take expensive medicine. So you jump out the window and go home.";
            }
            else
            {
              myPage.innerHTML = "Invalid Answer"
            }
          }

          function getChoice9()
          {
              var myChoice9 = document.getElementById("choice9").value;
              var myPage = document.getElementById("pagetext");

              if(myChoice9 === "Blog")
              {
                document.getElementById("mainImage").src="./imgs/famous.jpg";
                document.getElementById("choice9").style.display="none";
                document.getElementById("btnSubmit9").style.display="none";
                document.getElementById("playAgain").style.display="block";

                myPage.innerHTML = "You write your blog and it goes viral! You become the next Bear Grylls. You will go blind many more times in your life (Ah, the life of a survival TV star).";
              }

              else if(myChoice9 === "Grilled Cheese")
              {
                document.getElementById("mainImage").src="./imgs/grilled-cheese.jpg";
                document.getElementById("choice9").style.display="none";
                document.getElementById("btnSubmit9").style.display="none";
                document.getElementById("playAgain").style.display="block";

                myPage.innerHTML = "That was one fine grilled cheese sandwich. You reflect on your experience and take a nap. This has been a day of character building. That's for sure";
              }
              else
              {
                myPage.innerHTML = "Invalid Answer"
              }
            }

          function getChoice10()
          {
              var myChoice10 = document.getElementById("choice10").value;
              var myPage = document.getElementById("pagetext");

              if(myChoice10 === "Elves")
              {
                document.getElementById("mainImage").src="./imgs/elves.jpg";
                document.getElementById("choice10").style.display="none";
                document.getElementById("btnSubmit10").style.display="none";
                document.getElementById("playAgain").style.display="block";

                myPage.innerHTML = "You elves crown you as their emperor. When you wake up, the heat is gone but so is your kingdom.";
              }

              else if(myChoice10 === "Dragons")
              {
                document.getElementById("mainImage").src="./imgs/dragons.jpg";
                document.getElementById("choice10").style.display="none";
                document.getElementById("btnSubmit10").style.display="none";
                document.getElementById("playAgain").style.display="block";

                myPage.innerHTML = "You dream of adopting a dragon named Burt. When you wake up, the heat is gone but so is Burt.";
              }
              else
              {
                myPage.innerHTML = "Invalid Answer"
              }
            }

              // Information on restart found at:
              // https://stackoverflow.com/questions/37858483/how-to-add-a-play-again-feature-to-javascript-game
              // https://stackoverflow.com/questions/3715047/how-to-reload-a-page-using-javascript
              function clickPlayAgain(click) {
                  if (click == 1) {
                    location.reload();
                    return false;
            }
          }
