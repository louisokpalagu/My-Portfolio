let numberOfClicks = document.querySelectorAll(".drum").length;

function playSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "j":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:
            console.log("Invalid key pressed: " + key);
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed"); //pressed is the class in style.css 

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    },300);
}

//Detecting button press
for (let i = 0; i < numberOfClicks; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}
// This function is called when a button is clicked.


//Detecting keyboard press
document.addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
});
// This function is called when a key is pressed down.




//ALTERNATIVE WAY TO WRITE THE ABOVE CODE
// document.querySelector(".set").addEventListener("click", function () { 
// alert("Button clicked!"); }); 
// // called the function "handleClick".


// document.querySelector(".w").addEventListener("click", function () {
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
// }); 
// document.querySelector(".a").addEventListener("click", function () {
//     var audio = new Audio("sounds/tom-2.mp3");
//     audio.play();
// }); 
// document.querySelector(".s").addEventListener("click", function () {
//     var audio = new Audio("sounds/snare.mp3");
//     audio.play();
// }); 
// document.querySelector(".d").addEventListener("click", function () {
//     var audio = new Audio("sounds/tom-3.mp3");
//     audio.play();
// });  
// document.querySelector(".j").addEventListener("click", function () {
//     var audio = new Audio("sounds/tom-4.mp3");
//     audio.play();
// }); 
// document.querySelector(".k").addEventListener("click", function () {
//     var audio = new Audio("sounds/kick-bass.mp3");
//     audio.play();
// }); 
// document.querySelector(".l").addEventListener("click", function () {
//     var audio = new Audio("sounds/crash.mp3");
//     audio.play();
// });
