// Katherine Holmgren
// HW-8 Main JS


$(function(){

});

$(document).ready(function(){
    // Originally hidden elements:
    $("#cloud-3").hide();
    $("#sun").hide();

    // Beginning Text
    $("#clickAround").hover(function(){
      $("#clickAround").fadeOut(1500);
    });

    // CLOUD ONE (Dark Right Hand Corner)(Red Border)
    $("#cloud-1").click(function(){
        $("#cloud-1").animate({left: '250px'}, 1000);
        $("#cloud-1").fadeOut(1000);
    });

    // CLOUD TWO (Dark Bottom)(Orange Border)
    $("#cloud-2").click(function(){
        $("#cloud-2").animate({right: '250px'}).fadeOut(1000, function(){
          $("#cloud-3").fadeIn("slow"); // Display Cloud 3
        });
    });

    // CLOUD THREE (Mist)(Yellow Border)
    $("#cloud-3").click(function(){
      $(".cloud").fadeOut(1000, function(){
        $("#sun").fadeIn().animate({top: '100px'}, 1000).fadeOut(); // Display Sunrise
      });
      $('body').css('background-color', "rgb(149,202,255)");
      $("#text").text("It's sunny! Go outside!").fadeIn(1000); // End Text
    });

    // CLOUD FOUR (Straight Bottom)(Green Border)
    $("#cloud-4").click(function(){
      $("#cloud-4").animate({right: '250px', top: '100px'}).fadeOut(1000);
    });

    // CLOUD FIVE (Patchy Circle)(Blue Border)
    $("#cloud-5").click(function(){
      $("#cloud-5").animate({left: '-=50', top: '-=50'}, 1000);
        $("#cloud-5").fadeOut(1000);
    });
});
