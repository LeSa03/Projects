var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];

var randomIndex = nextSequence();
var randomChoosenColour = buttonColours[randomIndex];
gamePattern.push(randomChoosenColour);

console.log(gamePattern);

function nextSequence() {
  var randomNum = Math.random();
  randomNum = Math.floor(randomNum * 4);
  return randomNum;
}
//console.log("lista sadrzi: " + gamePattern);

function playSound(color) {
  var audio = new Audio("./sounds/" + color + ".mp3");
  audio.play();
}

var selectedButton = $("#" + randomChoosenColour);
selectedButton.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

selectedButton.on("click", function () {
  playSound(randomChoosenColour);
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  //console.log(userClickedPattern);
  playSound(userChosenColour);
});

function animatePress(currentColour) {
  $(currentColour).click(function () {
    $(this).addClass("pressed");
  });
}

setTimeout(animatePress(userChosenColour), 1000);
