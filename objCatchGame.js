// () ... for debug and test purpose. you can delete them
// *value may need to be changed

window.onload = pageReady;
function pageReady() {

// Global Variable
  var htmlPlayArea = document.getElementById('area');
  var htmlObjArea = document.getElementById('obj-area');
  var htmlStart = document.getElementById('start');

//==== 1. Move catcher ====

// 1-1. Move catcher with mouse
  // Call cursorCoordinate function when mouse is moving in the area
  // htmlPlayArea.onmousemove = cursorCoordinate;
  //
  // // Get cursor coordinate and reflect cursor coordinate to catcher
  // function cursorCoordinate() {
  //   var x = event.clientX;
  //   // var y = event.clientY; (For y coordinate)
  //   // var coordinate = "mouse is on X: " + x + " and y: " + y; (debug)
  //   // console.log(coordinate);
  //   // htmlCatcher.style.top = y + 'px'; (For y coordinate)
  //   htmlPlayArea.style.cursor = 'none'; // hide cursor
  //   //Moving area restriction
  //   if (x > 415) {
  //     htmlCatcher.style.left = '350px';
  //   }
  //   else if(x <85){
  //     htmlCatcher.style.left = '30px';
  //   }
  //   else {
  //     htmlCatcher.style.left = x-60+'px'; // *substract margin + about 1/2 width of catcher
  //   }
  // }
//End of 1-1. Move catcher with mouse

// 1-2. Move catcher slower
// // Grobal Variables
// var mouseX = 215; // initial position (centre of the area = 400+30/2)
// var catcherX = 215;
// var catcher = document.getElementById('catcher');
//
// // Detect X coordinate of the mouse cursor
// htmlPlayArea.onmousemove = getCursorPosX;
// function getCursorPosX(domEvent) {
//   mouseX = domEvent.clientX;
// }
//
// // Move the catcher every 10 ms within the area
// var animateCatcher = setInterval(function(){
//   //move to the right
// if (mouseX-catcherX > 0 && catcherX < 386) {
//   // controll the speed
//   catcherX += 1.8;
// }
//   //move to the left
// if (mouseX-catcherX < 0 && catcherX > 66) {
//   catcherX -= 1.8;
// }
//     catcher.style.left = catcherX - 35 + "px";
// }, 10);
// END OF Move catcher slower

// 1-3. Using obj/catcher.js to instanciate catcher, call move()
var catcher = new Catcher;
catcher.move();

//==== 2. Create random falling objects ===

// 2-1. Create Falling Object
//
// // Functions of the objects
// var createItem = function() {
//   htmlObjArea.innerHTML = "<div class=redObj></div>"; // *Change to img. Need to use array for creating random img?
//   var htmlRedObj = document.getElementsByClassName('redObj');
//   htmlRedObj[0].style.width = '20px';
//   htmlRedObj[0].style.height = '20px';
//   htmlRedObj[0].style.background = 'red';
//   htmlRedObj[0].style.position = 'relative';
//   htmlRedObj[0].style.top = '0px';
//   htmlRedObj[0].style.transition = 'all 1s ease-in';
//   console.log(this.name);
// }
//
// var animateItem = function() {
//   var htmlRedObj = document.getElementsByClassName('redObj');
//   htmlRedObj[0].style.top = '500px';
// }
//
// // Define the objects
// var fallingItem = {
//   name: "obj1",
//   create: createItem,
//   drop: animateItem
// }
//
// // Instanciate
// fallingItem.create();
// var dropNow = function() {
//   setTimeout(fallingItem.drop, 1000);
// }
// htmlStart.onclick = dropNow;
//
// End of 2-1. Create Falling Object

//2-2: Create Falling Object with Array
// 1. set arrays as the options of color, speed etc.
  var arrayOfColor = ['salmon', 'skyblue', 'lightgreen', 'pink', 'tomato']; // Change to image array
  var arrayOfSpeed = ['0.3s', '0.5s', '0.8s', '1s', '1.2s'];
  var arrayOfPosition = ['0px','100px','200px','300px','350px',];
  var classArray = ['A', 'B', 'C', 'D', 'E'];
  // 2. create a class for falling item with paramaters
  // Object
  var createNewItem = function(p_name, p_colorIndex, p_speed, p_position, p_classIndex) {
  // receive paramaters and set it to this.***
  this.name = p_name; // the paramater 'name' is passed to this.[name of var] as a value
  this.color = arrayOfColor[p_colorIndex]; // pick a color from arrayOfColor
  this.speed = arrayOfSpeed[p_speed]; // pick a speed from arrayOfSpeed
  this.position = arrayOfPosition[p_position]; // pick a falling position
  this.classIndex = classArray[p_classIndex];

  // common properties among the falling item
  htmlObjArea.innerHTML += "<div class='newObj" + this.classIndex + "'></div>";
  console.log("<div class='newObj" + this.classIndex + "'></div>"); //<div class='newObjA'></div>
  var htmlNewObj = document.getElementsByClassName('newObj'+this.classIndex);
  console.log(htmlNewObj); //[div.newObjA] !!ARRAY!!!
  htmlNewObj[0].style.width = '20px'; //
  htmlNewObj[0].style.height = '20px';
  htmlNewObj[0].style.position = 'absolute';
  htmlNewObj[0].style.top = '-30px';

  // random properties for the falling item
  htmlNewObj[0].style.left = this.position;
  htmlNewObj[0].style.background = this.color;
  htmlNewObj[0].style.transition = this.speed + " linear";

  // Debug purpose
  console.log("name:" + this.name + " color:" + this.color + " speed:" + this.speed + " ID:" + this.classIndex);

  // 3. Bring item to the bottom. would lile to put outside but how to pass the class name?
  var dropItem = function() {
    htmlNewObj[0].style.top = '500px';
  }

  // 4. Drop the item when the button is clicked. would lile to put outside but how to pass the class name?
  var dropNow = function() {
    dropItem();
  }
 htmlStart.onclick = dropNow;

};


// TODO: DropItemとDropNowを関数外にだすには？
// a. 上書きされずに新しいObjを生成するには？ ... solved: +=
// b. htmlStart.onclick = createNewItem.dropItem;
//    is it possible to call dropnow func from outside?
// c. hide the object overflow from the area
// d. expand range of the cursor <-No, it won't work. has to be with the dish

// Instanciate
var green = new createNewItem('item1', 2, 2, 2, 0);
var blue = new createNewItem('item2', 1, 1, 1, 1);
var pink = new createNewItem('item1', 3, 3, 3, 2);
var tomato = new createNewItem('item2', 4, 4, 4, 3);
// drop func only impact the last element







// ============End of pageReady===============
}
