$(document).ready(function () {


  $("#btnSubmit").click(function(){
    $.getJSON("scripts.js", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });



           // $("button").click(function () {
           //     $("#prizeInfo").load("prize.json", function(responseText){
           //         var prize = JSON.parse(responseText);
           //         $("#bikeInformation").html("Year: " + prize.prizes[1]);
           //    // bike.sizes[0] + "<br>" + bike.sizes[1] + "<br>" + bike.sizes[2] + "<br>" + bike.sizes[3]);
           //     });
           // });
       });



       // $("button").click(function(){
       //   $.getJSON("demo_ajax_json.js", function(result){
       //     $.each(result, function(i, field){
       //       $("div").append(field + " ");
       //     });
       //   });
       // });
