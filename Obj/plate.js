function Catcher() {
  this.move = function() {
    // current possition of the catcher


    // current possition of the mouse cursor
    var htmlPlayArea = document.getElementById('area');
    htmlPlayArea.onmousemove = cursorCoordinate;
    function cursorCoordinate() {
      var x = event.clientX;
      var coordinate = "mouse is on X: " + x; (debug)
      console.log(coordinate);
    }


    if () {

    }

    this.x += this.speed/150; // change the position of the catcher

  }
  constructor(){
    this.image = "/img/dish.png"; // img url
    this.width = "40px";
    this.height = "20px";
    this.speed = 150; // moving speed (move 150px/sec)
    this.x = 200; // default value of center of the catcher
  }
}
