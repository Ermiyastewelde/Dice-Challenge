// 1 //
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; // Added the missing dot before "png"

var randomImageSource = "images/" + randomDiceImage; // Assuming "images" is the correct folder name

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);


// 2 //
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // Added the missing variable definition

var randomImageSource2 = "images/" + randomDiceImage2; // Assuming "images" is the correct folder name

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2){
  documnet.querySelector("h1").innerHTML="player 1 wins";
}

else if (randomNumber1 < randomNumber2){
   document.querySelector("h1").innerHTML="player 2 wins";
}
else {
  document.querySelector("h1").innerHTML="Draw!";
}