
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
        if (mx>200 && mx<400 && my>100 && my<300){// A mouse click at mx, my is in the square if (mx>x1 and mx<x2 and my>y1 and my<y2)
            console.log("success");
            $("kitchen").fadeOut();
            $("#office").fadeIn();
            $("#description").text("Scissors, seeds, and cards. Look very hard.").fadeIn(1000);
        }
    }

    const canvas = document.querySelector('canvas')
        canvas.addEventListener('mousedown', function(e) { // If mouse is down...
            getCursorPosition(canvas, e) // Then get x, y
    })

}); // End document.ready
