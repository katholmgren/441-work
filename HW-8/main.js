

$(document).ready(function(){
    $("#cloud-1").click(function(){
      //  $(allClouds[0].theSelector).src = allClouds[random].imagePath;
        $("#cloud-1").fadeOut().fadeIn();
    });
    $("#cloud-2").click(function(){
      //  $(allClouds[0].theSelector).src = allClouds[random].imagePath;
        $("#cloud-2").fadeOut();
    });
    $("#cloud-3").click(function(){
      //  $(allClouds[0].theSelector).src = allClouds[random].imagePath;
        $(".cloud").fadeOut();
        $("#ohNo").text("You better stop coding! The sun is out!");
    });
    $("#cloud-4").click(function(){
      //  $(allClouds[0].theSelector).src = allClouds[random].imagePath;
        $("#cloud-4").fadeOut().fadeIn();
    });
    $("#cloud-5").click(function(){
      //  $(allClouds[0].theSelector).src = allClouds[random].imagePath;
        $("#cloud-5").fadeOut().fadeIn().fadeOut();
    });
});




// OLD CODE FOR SINGLE ROTATING CLOUD (does not work)
/* var cloudSelector = "#cloud";
var allClouds = new Array();
var cloudImg1 = "./imgs/cloud-1.png";
var cloudImg2 = "./imgs/cloud-2.png";
var cloudImg3 = "./imgs/cloud-3.png";
var cloudImg4 = "./imgs/cloud-4.png";
var cloudImg5 = "./imgs/cloud-5.png";

class CloudInfo{
    constructor(selector, imagePath){
        this.selector = selector;
        this.imagePath = imagePath;
    }
    get theSelector(){
        return this.selector;
    }
    get theImagePath(){
        return this.imagePath;
    }
    toString(){
        return this.selector + ":" + this.imagePath;
    }
}

function initializeArray(){
    var cloud1 = new CloudInfo("#cloud", cloudImg1);
    var cloud2 = new CloudInfo("#cloud", cloudImg2);
    var cloud3 = new CloudInfo("#cloud", cloudImg3);
    var cloud4 = new CloudInfo("#cloud", cloudImg4);
    var cloud5 = new CloudInfo("#cloud", cloudImg5);
    allClouds.push(cloud1);
    allClouds.push(cloud2);
    allClouds.push(cloud3);
    allClouds.push(cloud4);
    allClouds.push(cloud5);
}

$(document).ready(function(){
    var random = Math.floor(Math.random() * allClouds.length);
    $("#cloud").click(function(){
        $(allClouds[0].theSelector).src = allClouds[random].imagePath;
        $(allClouds[random].theSelector).fadeOut().fadeIn();
    });
});
*/
