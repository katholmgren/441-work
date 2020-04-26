var successSound = new Audio();
successSound.src = "sounds/happy-quick.wav";

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
            // $("kitchen").fadeOut();
            // $("#office").fadeIn();
            // $("#description").text("Scissors, seeds, and cards. Look very hard.").fadeIn(1000);
            $("#sodatext").css("color", "red");
        }
        if (mx>440 && mx<500 && my>290 && my<345){ // Rubber Band
            successSound.play();
            console.log("You clicked on the rubber band");
            $("#rbtext").css("color", "green");;
        }
    }

    const canvas = document.querySelector('canvas')
        canvas.addEventListener('mousedown', function(e) { // If mouse is down...
            getCursorPosition(canvas, e) // Then get x, y
    })

}); // End document.ready
