// () ... for debug and test purpose. you can delete them
// *value may need to be changed

window.onload = pageReady;

function pageReady() {

  //==== START THE GAME ====
  var game = new Game();
  htmlStart.onclick = startGame;

  function startGame() {
    game.start();
  }

  // ============End of pageReady===============
}
