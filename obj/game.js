function Game() {
  this.health = 3;
  this.time = 60;
  this.score = 0;
  this.field = new Field();

// Functions which are called after clicking the start button
  this.start = function() {
    countDownTimer = setInterval(this.countdown, 1000);
    var field = new Field();
    field.startGenerateItem();
    field.animateCatcher();
  }
  this.stop = function() {

  }
  // Count 60 and stop all time related functions
  this.countdown = function() {
    if (remainingTime > 0) {
      htmlStart.innerHTML = remainingTime;
      remainingTime--;
    } else {
      htmlStart.innerHTML = "Time Up!";
      clearInterval(countDownTimer);
      clearInterval(generateItem);
    }
  }
  this.decreaseHealth = function() {

  }
  this.addScore = function() {

  }
  this.updateTimer = function() {

  }
  this.foodItemProbability = function() {

  }
  this.nonItemProbability = function() {

  }

}
