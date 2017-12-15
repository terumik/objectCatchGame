function Catcher() {
  this.image = "/img/catcher.png"; // img url. necessary??
  this.width = "80px";
  this.height = "31px";
  this.speed = 180; // moving speed (move 180px/sec)
  this.x = 215; // default value of center of the catcher

  this.move = function() {
    // Variables
    var mouseX = 215; // initial position (centre of the area = 400+30/2)
    var catcherX = 215;

    // Detect X coordinate of the mouse cursor
    htmlPlayArea.onmousemove = getCursorPosX;
    function getCursorPosX(domEvent) {
      mouseX = domEvent.clientX;
    }

    // Move the catcher every 10 ms within the area
    var animateCatcher = setInterval(function(){
      //move to the right
    if (mouseX-catcherX > 0 && catcherX < 390) {
      // controll the speed
      catcherX += 1.8;
    }
      //move to the left
    if (mouseX-catcherX < 0 && catcherX > 70) {
      catcherX -= 1.8;
    }
        htmlCatcher.style.left = catcherX - 70 + "px";
    }, 10);
  }
}
