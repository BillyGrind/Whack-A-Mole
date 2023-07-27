//Create score Area
let score = 0;
let scoreBoard = document.getElementsByClassName("game-score")[0];
let scoreElement = document.createElement("p");
scoreElement.textContent = `Score : ${score}`;
scoreBoard.appendChild(scoreElement);
//Add one point function
export function addScore() {
  score += 1;
  scoreElement.textContent = `Score : ${score}`;
  console.log(score);
}
// Reset Score
export function resetScore() {
  score = 0;
  scoreElement.textContent = `Score : ${score}`;
  console.log(score);
}
