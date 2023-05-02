import { gameHole } from "./const.js";

export function createCircle(c) {
  let numberCircle = c;
  for (let i = 0; i <= numberCircle; i++) {
    const circle = document.createElement("div");
    circle.style.width = "100px";
    circle.style.height = "100px";
    circle.style.borderRadius = "50%";
    circle.style.backgroundColor = "yellow";
    circle.classList.add("circle");
    gameHole.appendChild(circle);
  }
}
