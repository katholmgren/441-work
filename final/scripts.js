var successSound = new Audio();
successSound.src = "sounds/happy-quick.wav";

var pensCounter = 0;
var levelOneCounter = 0;

$(document).ready(function () {

    $("#office").hide(); // Originally hidden

    // $(".coveringCanvas").click(function () {
    //     $("kitchen").fadeOut();
    //     $("#office").fadeIn();
    //     $("#description").text("Scissors, seeds, and cards. Look very hard.").fadeIn(1000);
    // });

    function getCursorPosition(canvas, event) { // Get coordinates
        const rect = canvas.getBoundingClientRect()
        var mx = event.clientX - rect.left // Mouse X
        var my = event.clientY - rect.top // Mouse Y
        console.log("x: " + mx + " y: " + my)

        // A mouse click at mx, my is in the square if (mx>x1 and mx<x2 and my>y1 and my<y2)
        if (mx>410 && mx<700 && my>420 && my<550){ // Soda Can (Something to drink)
            console.log("You clicked on the soda");
            successSound.play();
            levelOneCounter++;
            $("#sodatext").css("color", "red");
        }
        if (mx>440 && mx<500 && my>290 && my<345){ // Rubber Band
            console.log("You clicked on the rubber band");
            successSound.play();
            levelOneCounter++;
            $("#rbtext").css("color", "green");;
        }
        if (mx>270 && mx<475 && my>0 && my<70){ // Top Pen
            console.log("You clicked on the top pen");
            successSound.play();
            pensCounter++;
            levelOneCounter++;
            //$("#penstext").css("color", "darkred");;
        }
        if (mx>25 && mx<100 && my>200 && my<300){ // Left Pen
            console.log("You clicked on the left pen");
            successSound.play();
            pensCounter++;
            levelOneCounter++;
            //$("#penstext").css("color", "darkred");;
        }
        if (pensCounter == 2){ // Both Pens have been clicked
            console.log("You've found both pens");
            //successSound.play();
            $("#penstext").css("color", "darkred");;
        }
        if (levelOneCounter == 4){
          $("kitchen").fadeOut("slow");
          $("#office").fadeIn("slow");
          $("#description").text("Scissors, seeds, and cards. Look very hard.").fadeIn("slow");
        }
    }


    const canvas = document.querySelector('canvas')
        canvas.addEventListener('mousedown', function(e) { // If mouse is down...
            getCursorPosition(canvas, e) // Then get x, y
    })

}); // End document.ready
