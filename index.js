var x = "X";
var o = "O";
var n = "";
var turn = true; // false = o , true = x
var isPlay = true;
var moves = 0;

var scoreX = 0;
var scoreO = 0;

var xScore = document.getElementById("x-score");
var oScore = document.getElementById("o-score");

var frame = document.querySelector(".frame");
var ac = document.getElementById("ac");
var kapat = document.getElementById("kapat");
frame.style.display = "none";

ac.addEventListener("click", function () {
  frame.style.display = "block";
});

kapat.addEventListener("click", function () {
  frame.style.display = "none";
});

var sira = document.getElementById("sira");
var winText = document.getElementById("winText");

var b0 = document.querySelector(".b-0");
var b1 = document.querySelector(".b-1");
var b2 = document.querySelector(".b-2");
var b3 = document.querySelector(".b-3");
var b4 = document.querySelector(".b-4");
var b5 = document.querySelector(".b-5");
var b6 = document.querySelector(".b-6");
var b7 = document.querySelector(".b-7");
var b8 = document.querySelector(".b-8");
var b = [b0, b1, b2, b3, b4, b5, b6, b7, b8];

clearAll();

function clearAll() {
  b.forEach((element) => {
    element.innerHTML = n;
  });
  turn = true;
  sira.innerHTML = "X başlar";
  winText.innerHTML = n;
  moves = 0;
  isPlay = true;
}

function resetScore() {
  scoreX = 0;
  scoreO = 0;
  xScore.innerHTML = scoreX;
  oScore.innerHTML = scoreO;
}

for (let i = 0; i <= 8; i++) {
  document
    .getElementsByClassName("col-4")
    [i].addEventListener("click", function () {
      if (frame.style.display === "block") {
        frame.style.display = "none";
      } else if (isPlay) {
        if (turn) {
          if (b[i].innerHTML === n) {
            b[i].innerHTML = x;
            turn = false;
            siraBelirle(turn);
            moves++;
            checkWinner();
          }
        } else {
          if (b[i].innerHTML === n) {
            b[i].innerHTML = o;
            turn = true;
            siraBelirle(turn);
            moves++;
            checkWinner();
          }
        }
      } else {
        winText.innerHTML = "Oyun bitti, Yeni Oyuna Başla";
      }
    });
}

function checkWinner() {
  /*
  012
  036
  048
  147
  258
  246
  345
  678
*/
  var status = [
    b0.innerHTML === b1.innerHTML &&
      b1.innerHTML === b2.innerHTML &&
      b0.innerHTML !== n,
    b0.innerHTML === b3.innerHTML &&
      b3.innerHTML === b6.innerHTML &&
      b0.innerHTML !== n,
    b0.innerHTML === b4.innerHTML &&
      b4.innerHTML === b8.innerHTML &&
      b0.innerHTML !== n,
    b1.innerHTML === b4.innerHTML &&
      b4.innerHTML === b7.innerHTML &&
      b1.innerHTML !== n,
    b2.innerHTML === b5.innerHTML &&
      b5.innerHTML === b8.innerHTML &&
      b2.innerHTML !== n,
    b2.innerHTML === b4.innerHTML &&
      b4.innerHTML === b6.innerHTML &&
      b2.innerHTML !== n,
    b3.innerHTML === b4.innerHTML &&
      b4.innerHTML === b5.innerHTML &&
      b3.innerHTML !== n,
    b6.innerHTML === b7.innerHTML &&
      b7.innerHTML === b8.innerHTML &&
      b6.innerHTML !== n,
  ];

  for (let j = 0; j < status.length; j++) {
    if (status[j]) {
      if (turn) {
        winText.innerHTML = "O Kazandı!";
        oScore.innerHTML = ++scoreO;
        sira.innerHTML = n;
        isPlay = false;
      } else {
        winText.innerHTML = "X Kazandı!";
        xScore.innerHTML = ++scoreX;
        sira.innerHTML = n;
        isPlay = false;
      }
      break;
    } else {
      if (moves === 9) {
        winText.innerHTML = "Berabere!";
        sira.innerHTML = n;
      }
    }
  }
}

function siraBelirle(who) {
  if (who) {
    sira.innerHTML = "Sıra X'de";
  } else {
    sira.innerHTML = "Sıra O'da";
  }
}
