
var myViewFinderArray = new Array();
var image1 = "./imgs/cezanne-table.jpeg";
var image2 = "./imgs/matisse.jpg";
var image3 = "./imgs/seurat.png";
var image4 = "./imgs/tahitian.jpeg";
var image5 = "./imgs/wheat-field.jpeg";

class ViewFinder{
    constructor(image, artist, title, date, location){
        this.image = image;
        this.artist = artist;
        this.title = title;
        this.date = date;
        this.location = location;
    }
    toString(){
        return this.image;
        return this.artist;
        return this.title;
        return this.date;
        return this.location;
    }
    get theImage(){
        return this.image;
    }
    get theArtist(){
        return this.artist;
    }
    get theTitle(){
        return this.title;
    }
    get theDate(){
        return this.date;
    }
    get theLocation(){
        return this.location;
    }
}

function initializeArray(){
    var myViewFinder = new ViewFinder(image1, "Paul Cezanne.", "<i>The Basket of Apples.</i>", "1893.", "France.");
    var myViewFinder1 = new ViewFinder(image2, "Henri Matisse.", "<i>The Dessert: Harmony in Red (The Red Room).</i>", "1908.", "Hermitage Museum, St. Petersburg.");
    var myViewFinder2 = new ViewFinder(image3, "Georges Seurat.", "<i>A Sunday on La Grande Jatte.</i>", "1884.", "The Art Institute of Chicago.");
    var myViewFinder3 = new ViewFinder(image4, "Paul Gauguin.", "<i>Tahitian Mountains.</i>", "1893.", "Minneapolis Institute of Arts in Minnesota.");
    var myViewFinder4 = new ViewFinder(image5, "Vincent Van Gogh.", "<i>Wheat Field with Cypresses.</i>", "1889.", "The Metropolitan Museum of Art.");
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);
}

function accessInformation(){
    /// random object from the array
    var random = Math.floor(Math.random() * myViewFinderArray.length);
    //console.log(myViewFinder.toString());
    //console.log(myViewFinder.theTitle);
    document.getElementById("image").src = myViewFinderArray[random].image;
    document.getElementById("artist").innerHTML = myViewFinderArray[random].artist;
    document.getElementById("title").innerHTML = myViewFinderArray[random].title;
    document.getElementById("date").innerHTML = myViewFinderArray[random].date;
    document.getElementById("location").innerHTML = myViewFinderArray[random].location;
}
