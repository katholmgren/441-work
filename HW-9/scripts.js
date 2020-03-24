
$(document).ready(function () {

$("#btnSubmit").click(function() {
  $.getJSON("prize.json", function(result) { // Gets info from json file
    $.each(result, function(i, field) {
      $("#prizeInfo").append(result.prizes[0].laureates[0].firstname + " " + result.prizes[0].laureates[0].surname
      + "<br>" + result.prizes[0].laureates[0].motivation + "<br>");
    });
  });
});
});
