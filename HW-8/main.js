$(function(){

});

$(document).ready(function(){

  $("#cloud-3").hide();
  $("#sun").hide();
    // RED Dark Right Hand Corner
    $("#cloud-1").click(function(){
        $("#cloud-1").animate({left: '250px'}, 1000);
        $("#cloud-1").fadeOut(1000);
    });

    // ORANGE Dark Bottom
    $("#cloud-2").click(function(){
        $("#cloud-2").animate({right: '250px'}).fadeOut(1000, function(){
          $("#cloud-3").fadeIn("slow");
        });
    });

    $("#cloud-3").click(function(){
      $(".cloud").fadeOut(1000, function(){
        $("#sun").fadeIn().animate({top: '100px'}, 1000).fadeOut();
      });
      $('body').css('background-color', "rgb(149,202,255)");
      $("#text").text("It's sunny! Go outside!").fadeIn(1000);
    });

    // GREEN Flat Bottom Cloud
    //$("#cloud-4").hide();
    $("#cloud-4").click(function(){
      $("#cloud-4").animate({right: '250px', top: '100px'}).fadeOut(1000);
    });

    // BLUE Patchy Circle
    $("#cloud-5").click(function(){
      //  $(allClouds[0].theSelector).src = allClouds[random].imagePath;
      $("#cloud-5").animate({left: '-=50', top: '-=50'}, 1000);
        $("#cloud-5").fadeOut(1000);
    });

    $("#clickAround").hover(function(){
      $("#clickAround").fadeOut(1500);
    });
});
