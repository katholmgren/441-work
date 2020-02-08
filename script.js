<script>
    function getChoice1()
    {
        var myChoice = document.getElementById("choice").value;
        var myQuestion = document.getElementById("question");
        if(myChoice === "Green")
        {
            document.getElementById("choice").style.display="none";
            document.getElementById("btnSubmit").style.display="none";

            document.getElementById("choice2").style.display="block";
            document.getElementById("btnSubmit2").style.display="block";


            myQuestion.innerHTML = "Oh you chose green. What is your favorite food?";
        }
        else if(myChoice === "Blue")
        {
            myQuestion.innerHTML = "You chose blue.  What is your favorite movie?";

        }
        else
        {
            myQuestion.innerHTML = "Invalid answer";
        }

    }
    function getChoice2()
    {
        var food = document.getElementById("choice2").value;
        var myQuestion = document.getElementById("question");
        if(food === "tacos")
        {
            document.getElementById("mainImage").src = "taco.jpg"
            myQuestion.innerHTML = "I love tacos on Tuesdays!";
        }
        else if(food === "nachos")
        {
            myQuestion.innerHTML = "I love nachos, but nachos do not love me.";
        }
    }
</script>
