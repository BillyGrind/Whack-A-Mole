import { gameHole, gameScore, gameCircles, score } from "./const.js";
import { addScore } from "./score.js";
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export function randomizeCircleSelection() {
  for (let i = 0; i < gameCircles.length; i++) {
    gameCircles[i].style.backgroundColor = "yellow";
  }
  let randomIndex = Math.floor(Math.random() * gameCircles.length);
  let circleToHit = gameCircles[randomIndex];

  circleToHit.style.backgroundColor = "red";
  circleToHit.addEventListener("click",()=>{
    addScore();
  });
}

setInterval(randomizeCircleSelection, 1000);
