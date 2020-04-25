
$(document).ready(function () {
    $("#office").hide(); //Originally hidden

    $(".coveringCanvas").click(function () {
        $("kitchen").fadeOut();
        $("#office").fadeIn();
        $("#description").text("Scissors, seeds, and cards. Look very hard.").fadeIn(1000);
    });
});
