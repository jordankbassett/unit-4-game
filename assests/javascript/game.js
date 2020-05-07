$(document).ready(function(){

  console.log("jkbassettloaded")
  
  var realityGem = 1;
  var powerGem =   5;
  var mindGem =   10;
  var soulGem =   20;
  var targetNumber = Math.round(Math.random() * 101) + 19;
  var totalScore = (" ");
  var wins = 0;
  var loses = 0;


  $("#wins").text(wins);
  $("#loses").text(loses);
  
  
  
  
  
  //generate random number for game
  //document.getElementByid().innerHtml = Math.random()* 101);
  
  //on click functions for rubbies
  // 1 $("realityGem").click(function(){$(this).hide();});
  // 2 $("powerGem").click(function(){ $(this).hide();});
  // 3 $("mindGem").click(function(){ $(this).hide();});
  // 4$("souldGem").click(function(){ $(this).hide();});
  
  
  /*$(".crystal-image").on("click", function() {
    
    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);
    
    if (counter === targetNumber) {
      alert("You win!");
    }
    
    else if (counter >= targetNumber) {
      alert("You lose!!");
    }
    
  });
  */
 
})