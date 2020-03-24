
$(document).ready(function () {

$("button").click(function() {
  $.getJSON("prize.json", function(result) {
    $.each(result, function(i, field) {
      $("#prizeInfo").append(field + " ");
    });
});
});
});
