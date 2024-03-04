// random broj od 1 do 6...
var r = Math.random() * 5;
r = Math.round(r) + 1;
console.log("ovo je r1: " + r);

var r2 = Math.random() * 5;
r2 = Math.round(r2) + 1;
console.log("ovo je r2: " + r2);

//----------------------------

const S = document.querySelector(".img1");
const S2 = document.querySelector(".img2");

if (r2 == 1) {
  S2.setAttribute("src", "./images/dice1.png");
} else if (r2 == 2) {
  S2.setAttribute("src", "./images/dice2.png");
} else if (r2 == 3) {
  S2.setAttribute("src", "./images/dice3.png");
} else if (r2 == 4) {
  S2.setAttribute("src", "./images/dice4.png");
} else if (r2 == 5) {
  S2.setAttribute("src", "./images/dice5.png");
} else if (r2 == 6) {
  S2.setAttribute("src", "./images/dice6.png");
}

if (r == 1) {
  S.setAttribute("src", "./images/dice1.png");
} else if (r == 2) {
  S.setAttribute("src", "./images/dice2.png");
} else if (r == 3) {
  S.setAttribute("src", "./images/dice3.png");
} else if (r == 4) {
  S.setAttribute("src", "./images/dice4.png");
} else if (r == 5) {
  S.setAttribute("src", "./images/dice5.png");
} else if (r == 6) {
  S.setAttribute("src", "./images/dice6.png");
}

//-----------------------------------------------
const naslov = document.querySelector("h1");
if (r > r2) {
  naslov.innerHTML = "🎈Player 1 Wins!";
} else if (r2 > r) {
  naslov.innerHTML = "Player 2 Wins!🎈";
} else if (r == r2) {
  naslov.innerHTML = "DRAW !";
} else {
  naslov.innerHTML = "Refresh Me";
}
