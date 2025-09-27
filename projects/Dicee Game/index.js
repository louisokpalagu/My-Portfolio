var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

// Create the image path based on the random number
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = `images/dice${randomNumber2}.png`;

// Select the left <img> element and set its src attribute
document.querySelector(".img1").setAttribute("src", randomDiceImage1);
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
// This code generates two random numbers between 1 and 6, simulating a dice roll.
// It then updates the source of two images to display the corresponding dice faces.
// Finally, it updates the heading to indicate the winner or if it's a draw.
// The images are expected to be in the "images" directory with names like "dice1.png", "dice2.png", etc.
// Ensure that the images are correctly named and placed in the "images" directory for this to work.
// The code uses the Math.random() function to generate random numbers and the Math.floor() function to round them down to the nearest whole number.
// The document.querySelector method is used to select elements in the HTML document.
