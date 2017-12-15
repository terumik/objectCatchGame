function Field() {
  this.width = 400;
  this.height = 500;
  this.catcher = _gid("htmlCatcher");
  this.fallingItem = [];
  this.animateCatcher = function() {
    var catcher = new Catcher;
    catcher.move();
  }
  this.startGenerateItem = function() {
    generateItem = setInterval(this.generateFallingItem , 1500);
  }

  // Generate Object
  this.generateFallingItem = function() {
    var indexOfArray = random(7);
    var typeOfItem = 0;
    var speed = random(10) + 5;
    var score = 0;
    var xPos = random(360);
    // Select image based on generated random number
    var imgOfItem = ['banana', 'egg', 'burger', 'pancake', 'apple_core', 'banana_peel', 'fishbone'];
    // Select type based on generated random number
    if (indexOfArray > 3) {
      typeOfItem = -1;
    }
    // Assing score for each items based on generated random number
    if (indexOfArray <= 1) {
      // banana and egg
      score += 50;
    } else if (indexOfArray >= 2 && indexOfArray <= 3) {
      // burger and pancake
      score += 100;
    } else {
      score += 0;
    }
    itemId++;
    var newItem = new FallingItem(imgOfItem[indexOfArray], typeOfItem, speed, score, xPos, itemId);
    newItem.startFallDown();
  }

  this.createOrNot = function() {

  }
}
