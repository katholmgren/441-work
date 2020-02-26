
var imageNames = ["image1", "image2", "image3", "image4", "image5", "image6","image7", "image8", "image9", "image10", "image11", "image12"];
var blankImagePath = "imgs/blank-filler.jpg"; // create a variable with the blank image name
var firstNumber = -1;
var secondNumber = -1;
var match = 0;
var missAmmount = 0;
var player = {"firstname":"", "lastname":"", "age":"", "misses": ""}; // JSON name declaration
var actualImages = new Array(); // create an empty array for the actual images

function printBlanks(){
   // call our random image creation function
    createRandomImageArray();
    // create a for loop
    for(var i = 0; i < imageNames.length; i++){
    // iterate through the image tag ids and sets the source
        document.getElementById(imageNames[i]).src= blankImagePath;
    }
}

function createRandomImageArray(){
    var actualImagePath = ["imgs/flauna-edit.jpg", "imgs/hedge-edit.jpg", "imgs/mushroom-edit.jpg", "imgs/october-edit.jpg", "imgs/system-edit.jpg", "imgs/vangogh-edit.jpg"];
    var count = [0,0,0,0,0,0]; // make sure the images only get added twice
    while(actualImages.length < 12){ // check to see if our actual image array is full
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        if(count[randomNumber] < 2){
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function flipImage(number){
    if(firstNumber >= 0){ // make the second image appear
        secondNumber = number;
        document.getElementById(imageNames[number]).src = actualImages[secondNumber];
    }
    else if(firstNumber < 0){ // make the first image appear
        firstNumber = number;
        document.getElementById(imageNames[firstNumber]).src= actualImages[firstNumber];
    }
    // check to see if the images DO NOT match
    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0){
        setTimeout(imagesDisappear, 1000); // calls a method after 1 second
    }
    // check to see if the images DO match
    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0){
        firstNumber = -1;
        secondNumber = -1;
        match += 1; // Keeps track of how many images are matched
        allMatch();
    }
}

function imagesDisappear(){
    document.getElementById(imageNames[firstNumber]).src = blankImagePath;
    document.getElementById(imageNames[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
    var myMiss = document.getElementById("misses");
    if (firstNumber === -1){
    missAmmount += 1;
    myMiss.innerHTML = missAmmount; // Display miss count on game page
    }
}

function allMatch(){ // Redirects to results page after game
    if(match === 6){
      player.misses = missAmmount;
      localStorage.setItem("playerInfo", JSON.stringify(player));
      window.location = "results.html";
    }
}

function addToPlayer(){ // add to the JSON from the textboxes
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;
    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    player.misses = missAmmount;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "game.html";
}

function playerInfo() {
    var result = localStorage.getItem("playerInfo");
    playerInfo = JSON.parse(result);
    document.getElementById("nameResult").innerHTML = "Congrats " + JSON.parse(result).firstname + " " + JSON.parse(result).lastname + "!";
    document.getElementById("ageResult").innerHTML = "You did pretty well for being " + JSON.parse(result).age + " years old.";
    document.getElementById("scoreResult").innerHTML = "You messed up " + JSON.parse(result).misses + " times.";
}

function playAgain(){
    window.location = "game.html";
}
