var words = [
  "baseball",
  "chicken",
  "ivory",
  "gap",
  "divide",
  "net",
  "bag",
  "carrot",
  "press",
  "literacy",
  "lighter",
  "road",
  "organ",
  "door",
  "remain",
  "colon",
  "owl",
  "hut",
];

function runGame() {
  newWord();
  resetScore();

  document.getElementById("inputbox").disabled = false;   //this enables the textbox
  focusTextBox();  //focus the textbox
  for (let i = 10; i >= 0; i--) {
    setTimeout(function () {
      document
        .getElementById("timer")
        .getElementsByTagName("span")[0].innerHTML = i;

      if (i == 0) document.getElementById("inputbox").disabled = true;  //once the timer is up, the textbox is disables
    }, (10 - i) * 1000);
  }
}

function increaseScore() {
  document.getElementById("score").getElementsByTagName("span")[0].innerHTML =
    parseInt(
      document.getElementById("score").getElementsByTagName("span")[0].innerHTML
    ) + 1;
}

function resetScore() {
  document
    .getElementById("score")
    .getElementsByTagName("span")[0].innerHTML = 0;
}

function focusTextBox() {
  document.getElementById("inputbox").focus();
}

function newWord() {
  var random = Math.floor(Math.random() * words.length);
  document.getElementById("word").getElementsByTagName("span")[0].innerHTML =
    words[random];
}

document.getElementById("go").onclick = function () {
  runGame();
};

document.getElementById("inputbox").oninput = function () {
  if (
    document.getElementById("inputbox").value.toLowerCase() ===
    document
      .getElementById("word")
      .getElementsByTagName("span")[0]
      .innerHTML.toLowerCase()
  ) {
    setTimeout(function () {
      increaseScore();
      document.getElementById("inputbox").value = "";
      newWord();
    }, 300);
  }
};
