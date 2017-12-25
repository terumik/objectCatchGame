// GLOVAL VARIABLES AND FUNCTIONS
// Those are accessible by ALL scripts

// 1. Shorthand for document.getElementById()
function _gid(htmlId) {
  var id = document.getElementById(htmlId);
  return id;
}

// 2. Generate random number (min 0 ~ maxNum)
function random(maxNum) {
  var randomNum = Math.floor(Math.random() * maxNum);
  return randomNum;
}

var htmlPlayArea = _gid("area");
var htmlStart = _gid("start");
var htmlCatcher = _gid("catcher");

// game.js
var remainingTime = 60; //change to 60
var health = 3;
var score = 0;
var countDownTimer;

// field.js
var itemId = 0;
var updateScene;
var htmlLife = _gid("life");
var htmlScore = _gid("score");

// catcher.js
var animateCatcher;
