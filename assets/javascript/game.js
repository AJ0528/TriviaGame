var startGame
var timer; 
timer = setInterval(countdown, 1000);
function countdown() {
    game.counter--;
    
    $("#counter-number").text(game.counter);
    if (game.counter === 0) {
      console.log("TIME DOWN");
      game.timeUp();
    }
  }
  var quest1
  var quest2
  var quest3
  var quest4
  var quest5
  var quest6
  var ques7
  var quest8
  var quest9
  var quest9

            var quest1= $("input[name='quest1']:checked").val();
           if( "answer-wasp"=== "true"){
               questright++
           }
           else if (quest1 === "false") {
            wrongAnswers++;
           }

           var quest2= $("input[name='quest2']:checked").val();
           if( "answer-Phil"=== "true"){
               questright++
           }
           else if (quest2 === "false") {
            wrongAnswers++;
           }
           
           var quest3= $("input[name='quest3']:checked").val();
           if( "answer-Black Widow"=== "true"){
               questright++
           }
           else if (quest3 === "false") {
            wrongAnswers++;
           }

           var quest4= $("input[name='quest4']:checked").val();
           if( "answer-pepperPots"=== "true"){
               questright++
           }
           else if (quest4 === "false") {
            wrongAnswers++;
           }
           var quest5= $("input[name='quest5']:checked").val();
           if( "answer-Tesseract"=== "true"){
               questright++
           }
           else if (quest5 === "false") {
            wrongAnswers++;
           }

           var quest6= $("input[name='quest2']:checked").val();
           if( "400%"=== "true"){
               questright++
           }
           else if (quest6 === "false") {
            wrongAnswers++;
           }