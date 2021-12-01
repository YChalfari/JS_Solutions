const p1race = document.querySelector("#player1-race");
const p2race = document.querySelector("#player2-race");

function updateP1() {
  const player1 = document.querySelector("#player1-race .active");
  player1.classList.remove("active");
  player1.nextElementSibling.classList.add("active");
}
function updateP2() {
  const player2 = document.querySelector("#player2-race .active");
  player2.classList.remove("active");
  player2.nextElementSibling.classList.add("active");
}
function isFinished() {
  if (p1race.lastElementChild.classList.contains("active")) {
    if (confirm("Player 1 WINS! Play again?")) {
      window.location.reload();
    } else {
      window.removeEventListener;
    }
  } else if (p2race.lastElementChild.classList.contains("active")) {
    if (confirm("Player 2 WINS! Play again?")) {
      window.location.reload();
    } else {
      window.removeEventListener;
    }
  }
}
function reset() {
  const player1 = document.querySelector("#player1-race .active");
  const player2 = document.querySelector("#player2-race .active");
  player1.classList.remove("active");
  player2.classList.remove("active");
  p1race.firstElementChild.add("active");
  p2race.firstElementChild.add("active");
}
window.addEventListener("keyup", (e) => {
  isFinished();
  if (e.key === "ArrowRight") {
    updateP1();
  } else if (e.key.toLowerCase() === "d") {
    updateP2();
  }
});
