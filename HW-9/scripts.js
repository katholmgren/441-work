
$(document).ready(function () {
  $("button").click(function() {
    $.getJSON("prize.json", function(result) {
      $.each(result, function(i, field) {
        var prize = field[Math.floor(Math.random() * field.length)];
        console.log(prize);
        $("#prizeInfo").text("Congratualations, you got " + prize.year + "!");
      });
    });
  });
});
