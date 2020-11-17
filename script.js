var scores, roundScore, activePlayer, dice, diceDOM;
diceDOM = document.querySelector(".dice");

gameResit();

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.contains("winner")
  ) {
  } else {
    dice = Math.floor(Math.random() * 6 + 1);
    diceDOM.src = "dice-" + dice + ".png";
    diceDOM.style.display = "block";
    if (dice !== 1) {
      roundScore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      roundResit();
      changePlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.contains("winner")
  ) {
  } else {
    scores[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 30) {
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document.querySelector("#name-" + activePlayer).textContent = "winner!";
    } else {
      roundResit();
      changePlayer();
    }
  }
});

document.querySelector(".btn-new").addEventListener("click", function () {
  roundResit();
  gameResit();

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
});

function roundResit() {
  roundScore = 0;
  document.querySelector("#current-0").textContent = 0;
  document.querySelector("#current-1").textContent = 0;
}

function changePlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.toggle("active");
}

function gameResit() {
  scores = [0, 0];
  activePlayer = 0;
  diceDOM.style.display = "none";
  roundResit();
  document.querySelector("#score-0").textContent = 0;
  document.querySelector("#score-1").textContent = 0;
}
