const distanceDisplay = document.getElementById("distance");

const gameWidth = 800;
const gameHeight = 500;
const theMap = document.getElementById("map");
const congratulations = document.getElementById("congratulations");
const treasure = document.getElementById("treasure");
let counter = 0;
const target = {
    x: getRandomNumber(gameWidth),
    y: getRandomNumber(gameHeight)
}
function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
}
function displayMessage(message) {

    distanceDisplay.textContent = message;
}
theMap.addEventListener("click", clickMap);
function getDistance(e, target) {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;


    return Math.sqrt((diffX * diffX) + (diffY * diffX));

}
function getDistanceHint(distance, target) {
    let message = "";
    if (distance < 30) {
        message = "YOU FOUND THE TREASURE!";
        congratulate();
        displayTreasure(target);
    } else if (distance < 100) {
        message = "HOT"
    } else if (distance < 200) {
        message = "WARM"
    }

    else {
        message = "YOU ARE WAY OFF";
    }
    return message;
}
function congratulate() {
    distanceDisplay.style.fontSize = '40';
    distanceDisplay.textContent = `Congratulations! You found the treasure in ${counter} clicks`
    congratulations.style.display = "block";
    counter = 0;
}
function displayTreasure(target) {
    treasure.setAttribute("style", `left: ${target.x}px; top: ${target.y}px;`);
}

function clickMap(e) {
    counter++;
    let distance = getDistance(e, target);
    let message = getDistanceHint(distance, target);
    displayMessage(message);



}