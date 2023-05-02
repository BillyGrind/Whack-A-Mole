import { gameHole } from "./const.js";

export function createCircle(c) {
  let numberCircle = c;
  for (let i = 0; i <= c; i++) {
    const circle = document.createElement("div");
    circle.style.width = "150px";
    circle.style.height = "150px";
    circle.style.borderRadius = "50%";
    circle.style.backgroundColor = "yellow";
    circle.classList.add("circle");
    gameHole.appendChild(circle);
  }
}
