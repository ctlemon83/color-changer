var colors = ["Green", "Blue", "Purple", "Red", "Yellow", "Orange", "Magenta", "Aqua", "Cyan", "Chartreuse", "Gold", "HotPink"];
var color = document.getElementById("colorName");
function changeColor() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber];
}

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
getRandomNumber();