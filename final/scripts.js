var successSound = new Audio();
successSound.src = "sounds/happy-quick.wav";

var pensCounter = 0;
var levelOneCounter = 0;
var levelTwoCounter = 0;

$(document).ready(function () {

    $("#office").hide(); // Originally hidden image

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
        }
        if (mx>25 && mx<100 && my>200 && my<300){ // Left Pen
            console.log("You clicked on the left pen");
            successSound.play();
            pensCounter++;
            levelOneCounter++;
        }
        if (pensCounter == 2){ // Both Pens have been clicked
            //successSound.play();
            $("#penstext").css("color", "darkred");;
        }
        if (levelOneCounter == 4){ // ALL ITEMS FOUND. MOVE TO LEVEL 2.
            $("kitchen").fadeOut("slow");
            $("#office").fadeIn("slow");
            $("#description").text("Two wooden clothes pins, a screwdriver, and chapstick. Think quick and take your pick.").fadeIn("slow");
        }
        // LEVEL TWO: Office
        if (mx>538 && mx<600 && my>0 && my<60){ // Top Clothes Pin
            console.log("You clicked the top clothes pin");
            successSound.play();
            levelTwoCounter++;
        }
        if (mx>175 && mx<285 && my>145 && my<200){ // Left Clothes Pin
            console.log("You clicked the left clothes pin");
            successSound.play();
            levelTwoCounter++;
        }
        if (mx>102 && mx<190 && my>75 && my<130){ // Screwdriver
            console.log("You clicked the screwdriver");
            successSound.play();
            levelTwoCounter++;
        }
        if (mx>715 && mx<750 && my>90 && my<200){ // Chapstick
            console.log("You clicked the chapstick");
            successSound.play();
            levelTwoCounter++;
        }
        if (levelTwoCounter == 4){ // ALL ITEMS FOUND. MOVE TO LEVEL 3.
            $("kitchen").fadeOut("slow");
            $("#office").fadeOut("slow");
            $("#description").text("Two wooden clothes pins, a screwdriver, and chapstick. Think quick and take your pick.").fadeIn("slow");
        }
    }


    const canvas = document.querySelector('canvas')
        canvas.addEventListener('mousedown', function(e) { // If mouse is down...
            getCursorPosition(canvas, e) // Then get x, y
    })

}); // End document.ready
