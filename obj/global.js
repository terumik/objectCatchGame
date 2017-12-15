// GLOVAL VARIABLES AND FUNCTIONS
// Those are accessible by ALL scripts

  // 1. Shorthand for document.getElementById()
  function _gid(htmlId) {
    var id = document.getElementById(htmlId);
    return id;
  }

  // 2. Generate random number (min 0 ~ maxNum)
  function random(maxNum) {
    var randomNum = Math.floor(Math.random() * maxNum) ;
    return randomNum;
  }


  var htmlPlayArea = _gid("area");
  var htmlStart = _gid("start");
  var htmlCatcher = _gid("catcher");

// Game.js
  var remainingTime = 60;
  var countDownTimer;

// Field.js
  var itemId = 0;
  var generateItem;
