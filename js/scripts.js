//business logic
var pingPong = function(userInput) {
  for (index = 1; index <= userInput; index += 1) {
      if ((index % 15) === 0) {
        $(".result").append("<p> Peanut Butter & Jelly! </p>");
    } else if ((index % 3) === 0) {
        $(".result").append("<p> Peanut Butter </p>");
    } else if ((index % 5) === 0) {
        $(".result").append("<p> Jelly </p>");
    } else {
        $(".result").append("<p>"+ index + "</p>");
    }
  }
}
//user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#input").val());

    if (isNaN(userInput) || (userInput <= 0)) {
      alert("Please enter a positive number!");
    } else {
      var result = pingPong(userInput);
      $("#result").show();
      $("#result-image").show();
      $("#ping-pong").hide();
      $("#front-image").hide();
    }
  });
});
