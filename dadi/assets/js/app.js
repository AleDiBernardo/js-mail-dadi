const rollButton = document.getElementById("rollBtn");
const playerDice = document.getElementById("playerDice");
const computerDice = document.getElementById("computerDice");

const playerName = prompt("Inserisci il nome");

rollButton.addEventListener("click", function () {
  const playerShot = Math.floor(Math.random() * 6) + 1;
  const computerShot = Math.floor(Math.random() * 6) + 1;

  let result = "";
  let winner = "";

  console.log("Player: " + playerShot);
  console.log("Computer: " + computerShot);

  if (playerShot > computerShot) {
    result = `${playerName} won!`;
    console.warn("Player");
  } else if (playerShot < computerShot) {
    result = "Computer Won!";
    console.warn("Computer");
  } else {
    result = "Draw!";
    console.warn("Draw");
  }

  switch (true) {
    case playerShot === 1:
      playerDice.innerHTML = `<img src="assets/img/${playerShot}.png">`;
      break;
    case playerShot === 2:
      playerDice.innerHTML = `<img src="assets/img/${playerShot}.png">`;

      break;
    case playerShot === 3:
      playerDice.innerHTML = `<img src="assets/img/${playerShot}.png">`;

      break;
    case playerShot === 4:
      playerDice.innerHTML = `<img src="assets/img/${playerShot}.png">`;

      break;
    case playerShot === 5:
      playerDice.innerHTML = `<img src="assets/img/${playerShot}.png">`;

      break;
    case playerShot === 6:
      playerDice.innerHTML = `<img src="assets/img/${playerShot}.png">`;

      break;

    default:
      console.log("0");
      break;
  }


  switch (true) {
    case computerShot === 1:
      computerDice.innerHTML = `<img src="assets/img/${computerShot}.png">`;
      break;
    case computerShot === 2:
      computerDice.innerHTML = `<img src="assets/img/${computerShot}.png">`;

      break;
    case computerShot === 3:
      computerDice.innerHTML = `<img src="assets/img/${computerShot}.png">`;

      break;
    case computerShot === 4:
      computerDice.innerHTML = `<img src="assets/img/${computerShot}.png">`;

      break;
    case computerShot === 5:
      computerDice.innerHTML = `<img src="assets/img/${computerShot}.png">`;

      break;
    case computerShot === 6:
      computerDice.innerHTML = `<img src="assets/img/${computerShot}.png">`;

      break;

    default:
      console.log("0");
      break;
  }

  document.getElementById("result").innerHTML = result;
});
