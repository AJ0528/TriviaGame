
var timer; 
timer = setInterval(countdown, 1000);
function countdown() {
    game.counter--;
    
    $("#counter-number").text(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.timeUp();
    }
  }