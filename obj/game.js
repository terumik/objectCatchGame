function Game() {
  var self = this;
  this.field = new Field();
  // this.time = 60;
  // this.health = 3;
  // this.score = 0;

  // Called when the start button is clicked
  this.start = function() {
    countDownTimer = setInterval(this.countdown, 1000);
    self.field.startUpdateScene();
  }
  // Stop all functions
  this.stop = function() {
    htmlStart.innerHTML = "Game Over!";
    clearInterval(countDownTimer);
    clearInterval(updateScene);
  }
  // Count 60 and stop all time related functions
  this.countdown = function() {
    if (remainingTime > 0) {
      htmlStart.innerHTML = remainingTime;
      remainingTime--;
      if (health <= 0) {
        self.stop()
      }
    }
    else if (remainingTime===0) {
      self.stop();
      remainingTime--;
    }
  }

  // this.decreaseHealth = function() {
  //
  // }
  // this.addScore = function() {
  //
  // }
  // this.updateTimer = function() {
  //
  // }

}
