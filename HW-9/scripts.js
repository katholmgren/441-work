
$(document).ready(function () {

$("button").click(function() {
  $.getJSON("prize.json", function(result) { // Gets info from json file
    $.each(result, function(i, field) {
      //var prize = _____?
       $("#prizeInfo").append(field + " "); // What should I add in this section to make it work?
      });
    });
  });
});
