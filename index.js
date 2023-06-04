function rollDice() {
    setTimeout(function () {
  var randomnumber1 = Math.floor(Math.random() * 6) + 1;

  var randomImage = "dice" + randomnumber1 + ".png";

  var randomsource = "images/" + randomImage;

  document.querySelectorAll("img")[0].setAttribute("src", randomsource);

  var randomnumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImage = "dice" + randomnumber2 + ".png";

  var randomsource = "images/" + randomImage;

  document.querySelectorAll("img")[1].setAttribute("src", randomsource);

  if (randomnumber1 === randomnumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
    document.getElementsByClassName("crown1")[0].innerHTML =
      '<i class="crown fa-sharp fa-solid fa-crown fa-beat fa-2xl"></i>';
    document.getElementsByClassName("crown2")[0].innerHTML =
      '<i class="crown fa-sharp fa-solid fa-crown fa-beat fa-2xl"></i>';
  } else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = "player2 Wins!";
    document.getElementsByClassName("crown2")[0].innerHTML =
      '<i class="crown fa-sharp fa-solid fa-crown fa-beat fa-2xl"></i>';
  } else if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "player1 Wins!";
    document.getElementsByClassName("crown1")[0].innerHTML =
      '<i class="crown fa-sharp fa-solid fa-crown fa-beat fa-2xl"></i>';
  } else {
    alert("something went wrong");
  }
}, 100);
document.getElementsByClassName("crown1")[0].innerHTML ='';
document.getElementsByClassName("crown2")[0].innerHTML ='';

}
