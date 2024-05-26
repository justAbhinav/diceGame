//document query selector

function result(num1, num2) {
  if (num1 > num2) {
    return "🚩Player 1 wins!!";
  } else if (num1 < num2) {
    return "Player 2 wins!!🚩";
  } else {
    return "Draw!!";
  }
}

if (performance.getEntriesByType("navigation")[0].type === "reload") {
  var randNum1 = Math.floor(Math.random() * 6) + 1;
  var randNum2 = Math.floor(Math.random() * 6) + 1;

  var dice1 = "images/dice" + randNum1 + ".png";
  var dice2 = "images/dice" + randNum2 + ".png";

  document.querySelector(".dice .img1").setAttribute("src", dice1);
  document.querySelector(".dice .img2").setAttribute("src", dice2);

  document.querySelector("#title").textContent = result(randNum1, randNum2);
}
