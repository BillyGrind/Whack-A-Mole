let score = 0;
let scoreBoard = document.getElementsByClassName("game-score")[0];
let scoreElement = document.createElement("p");
scoreElement.textContent = `Score:${score}`;
scoreBoard.appendChild(scoreElement);

export function addScore() {
  score++;
  scoreElement.textContent = `Score:${score}`;
}
