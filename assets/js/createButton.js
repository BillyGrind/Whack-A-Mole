import { randomizeCircleSelection } from "./circleGame.js";
export function createButton() {
  let gameButton = document.querySelector(".game-button");
  let content = `
    <button class="button-start">Start</button>
    <button class="button-pause">Pause</button>
    <button class="button-hardMode">Hard Mode</button>`;
  gameButton.innerHTML += content;
}

export function buttonAction() {
  let buttonStart = document.getElementsByClassName("button-start")[0];
  let buttonPause = document.getElementsByClassName("button-pause")[0];
  let buttonHardMode = document.getElementsByClassName("button-hardMode")[0];

  let intervalId;

  buttonStart.addEventListener("click", () => {
    console.log("click");
    function randomTime(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }

    clearInterval(intervalId);

    randomizeCircleSelection();
    intervalId = setInterval(randomizeCircleSelection, randomTime(400, 1000));
  });

  buttonPause.addEventListener("click", () => {
    console.log("clickPause");
    clearInterval(intervalId);
  });

  buttonHardMode.addEventListener("click", () => {
    function randomTime(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }

    clearInterval(intervalId);

    randomizeCircleSelection();
    intervalId = setInterval(randomizeCircleSelection, randomTime(100, 1000));
  });
}
