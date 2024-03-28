const playerShot = Math.floor(Math.random() * 6);
const computerShot = Math.floor(Math.random() * 6);

console.log("Player: " + playerShot);
console.log("Computer: " + computerShot);


if(playerShot > computerShot) {
    console.log("Player won!");
} else if (playerShot < computerShot) {
    console.log("Computer won!");
} else {
    console.log("Draw!");
}
