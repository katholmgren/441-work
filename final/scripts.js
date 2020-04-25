
$(document).ready(function () {

    $("#office").hide(); // Originally hidden

    $(".coveringCanvas").click(function () {
        $("kitchen").fadeOut();
        $("#office").fadeIn();
        $("#description").text("Scissors, seeds, and cards. Look very hard.").fadeIn(1000);
    });

    function getCursorPosition(canvas, event) { // Get coordinates
        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        console.log("x: " + x + " y: " + y)
    }

    const canvas = document.querySelector('canvas')
        canvas.addEventListener('mousedown', function(e) { // If mouse is down...
            getCursorPosition(canvas, e) // Then get x, y
    })


}); // End document.ready
