const app = document.getElementById("app"),
  game = document.getElementById("game"),
  tryAgainButton = document.getElementById("try-again");
let gameItems = ["", "", "", "", "", "", "", "", ""];
let oIndex = 0;
let usersChoise = [];
let arrayForWin = [
  [2, 1, 0],
  [2, 5, 8],
  [8, 7, 6],
  [6, 3, 0],
  [8, 4, 0],
  [6, 4, 2],
  [7, 4, 1],
  [3, 4, 5],
];
let nullCheck = gameItems.length;

const renderDom = () => {
  gameItems.map((item, index) =>
    game.insertAdjacentHTML(
      "afterbegin",
      `<div class="game__item" id="child-${index}"> ${item} </div>`
    )
  );
};

let checkWin = () => {
  return arrayForWin.some((win) => {
    return win.every((i) => {
      return document.getElementById(`child-${i}`).innerText == "X";
    });
  });
};

const tryAgain = () => {};

const createRamdomO = () => {
  do {
    oIndex = Math.floor(Math.random() * 10);
  } while (gameItems[oIndex] !== "");

  if (gameItems[oIndex] == "") {
    gameItems[oIndex] = "O";
    document.getElementById(`child-${oIndex}`).innerText = "O";
    nullCheck = gameItems.filter((x) => x.length === 0).length;
  }
};

game.addEventListener("click", (event) => {
  let whichElement = Number(event.target.id.slice(-1));
  if (gameItems[whichElement] == "") {
    gameItems[whichElement] = "X";
    usersChoise.push(whichElement);
    document.getElementById(`child-${whichElement}`).innerText = "X";
    if (nullCheck !== 1) {
      createRamdomO();
    } else {
    }
    checkWin();
    if (checkWin() === true) {
      app.innerHTML = `<h1 class="text__win"> Oyunu Kazandınz </h1>`;
    }
  }
});

window.addEventListener("DOMContentLoaded", renderDom);
