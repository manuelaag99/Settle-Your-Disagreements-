
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var imgName1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("div.main-container img")[0].setAttribute("src", imgName1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var imgName2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("div.main-container img")[1].setAttribute("src", imgName2);

if (randomNumber1 === randomNumber2) {
    titleText = "It's a tie! Refresh!"
} else if (randomNumber1 < randomNumber2) {
    titleText = "Player 2 wins!"
} else if (randomNumber1 > randomNumber2) {
    titleText = "Player 1 wins!"
}

document.querySelector("h1").innerText = titleText

console.log(titleText)

//document.querySelectorAll("div.main-container img").setAttribute("src", imgName);
//document.querySelectorAll("div.main-container img")[1].setAttribute("src", imgName);
