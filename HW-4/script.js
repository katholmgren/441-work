
    function getChoice1()
    {
        var myChoice = document.getElementById("choice").value;
        var myPage = document.getElementById("pagetext");
        if(myChoice === "Berry 1")
        {
            document.getElementById("choice").style.display="none";
            document.getElementById("btnSubmit").style.display="none";

            document.getElementById("choice2").style.display="block";
            document.getElementById("btnSubmit2").style.display="block";


            myPage.innerHTML = "Oh you chose berry 1. You are blind now. Do you want to yell for help or return to the car to call 911?";
        }
        else if(myChoice === "Berry 2")
        {
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
            myPage.innerHTML = "You yell and a woman comes and offers you two berries. Do you want berry 1, berry 2, or no more?";
        }
        else if(myChoice2 === "Car")
        {
            myPage.innerHTML = "Was the car left or right?";
        }
    }
