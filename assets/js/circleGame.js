import { gameHole, gameScore, gameCircles, score } from "./const.js";
import { addScore } from "./score.js";
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export function randomizeCircleSelection() {
  for (let i = 0; i < gameCircles.length; i++) {
    gameCircles[i].style.backgroundColor = "#729ea1";
    gameCircles[i].addEventListener("click",()=>{
      return;
    })
  }
  let randomIndex = Math.floor(Math.random() * gameCircles.length);
  let circleToHit = gameCircles[randomIndex];

  circleToHit.style.backgroundColor = "#db5375";
  circleToHit.addEventListener("click",()=>{
    addScore();
  });
}

// setInterval(randomizeCircleSelection, randomTime(600,1000));
