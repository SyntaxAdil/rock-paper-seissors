// variables
const playAgain = document.querySelector(".playAgain");
const restartGame = document.querySelector(".restartGame");
const game = document.querySelector(".game");
const con = document.querySelector(".img-container");
const rps = document.querySelectorAll(".rps");
const rpsF = document.querySelectorAll(".rps-final");
const mssg = document.getElementById("msg");
const user = document.getElementById("user");
const dynamic = document.getElementById("dynamic");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const sizzer = document.getElementById("sizzer");
const winDisplay = document.getElementById("win");
const lossDisplay = document.getElementById("lose");
const drawDisplay = document.getElementById("draw");
const attempsDisplay = document.getElementById("attemps");
const dltPopUp = document.getElementById("dltPopUp");
let win = 0;
let draw = 0;
let loss = 0;
let attemps=0;
const choices = ["rock", "paper", "sizzer"];
// show message
function showMessage(c, e) {
  if (c === e) {
    mssg.innerText = "Draw";
    draw++;
    drawDisplay.textContent = draw;
  } else if (
    (c === "paper" && e === "rock") ||
    (c === "sizzer" && e === "paper") ||
    (c === "rock" && e === "sizzer")
  ) {
    mssg.innerHTML = "You Win";
    win++;
    winDisplay.textContent = win;
  } else {
    mssg.innerHTML = "You loss";
    loss++;
    lossDisplay.textContent = loss;
  }
}
// show game
function show(e, c) {
  con.style.display = "none";
  game.style.display = "flex";

  setTimeout(() => {
    user.src = `assets/${e}.png`;
    dynamic.src = `assets/${c}.png`;
    playAgain.style.display = "block";
    showMessage(e, c);
  }, 2000);
}
// handle click
rps.forEach((e) => {
  e.addEventListener("click", () => {
    attemps++;
    attempsDisplay.textContent=attemps;
    restartGame.disabled=false;
    let click = e.getAttribute("id");
    let random = Math.floor(Math.random() * 3);
    let computerChoices = choices[random];
    show(click, computerChoices);
  });
});
// restart button
playAgain.addEventListener("click", () => {
  con.style.display = "block";
  game.style.display = "none";
  playAgain.style.display = "none";
  mssg.innerText = "";
  user.src = "assets/rock.png";
  dynamic.src = "assets/rock.png";
});
restartGame.addEventListener("click",()=>{
    restartGame.disabled=true;
    win=0;
    loss=0;
    draw=0;
    attemps=0;
    attempsDisplay.textContent="0";
    winDisplay.textContent="0";
    drawDisplay.textContent="0";
    lossDisplay.textContent="0";
})
// dlt popup
dltPopUp.addEventListener("click",()=>{
    document.getElementById("preloader-modal").style.display="none";
    document.getElementById("copyRight").style.display="block";
    con.style.display="block"

})