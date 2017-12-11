function Catcher() {
  this.move = function() {
    // Variables
    var htmlPlayArea = document.getElementById('area');
    var mouseX = 215; // initial position (centre of the area = 400+30/2)
    var catcherX = 215;
    var catcher = document.getElementById('catcher');

    // Detect X coordinate of the mouse cursor
    htmlPlayArea.onmousemove = getCursorPosX;
    function getCursorPosX(domEvent) {
      mouseX = domEvent.clientX;
    }

    // Move the catcher every 10 ms within the area
    var animateCatcher = setInterval(function(){
      //move to the right
    if (mouseX-catcherX > 0 && catcherX < 387) {
      // controll the speed
      catcherX += 1.8;
    }
      //move to the left
    if (mouseX-catcherX < 0 && catcherX > 65) {
      catcherX -= 1.8;
    }
        catcher.style.left = catcherX - 35 + "px";
    }, 10);
  }

  // constructor(){
    // this.image = "/img/catcher.png"; // img url
    // this.width = "40px";
    // this.height = "20px";
    // this.speed = 150; // moving speed (move 150px/sec)
    // this.x = 200; // default value of center of the catcher
  // }
}
