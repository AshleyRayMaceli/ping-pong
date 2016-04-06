//business logic
var pingPongArray = [];

var numberCheck = function(userInput) {
  if (isNaN(userInput) || (userInput <= 0)) {
    return false;
  } else {
    return true;
  }
}

var pingPong = function(userInput) {
  if (numberCheck(userInput) === true) {
    for (index = 1; index <= userInput; index += 1) {
      if ((index % 15) === 0) {
        pingPongArray.push("Peanut Butter & Jelly!");
    } else if ((index % 3) === 0) {
        pingPongArray.push("Peanut Butter");
    } else if ((index % 5) === 0) {
        pingPongArray.push("Jelly");
    } else {
        pingPongArray.push(index);
      }
    }
  } else {
    alert("Please enter a positive number!");
  }
}
//user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#input").val());
    var result = pingPong(userInput);

    pingPongArray = pingPongArray.join(", ");

    if (numberCheck(userInput) === false) {
      location.reload(true);
    } else {
      $(".result").append(pingPongArray);
      $("#result").show();
      $("#result-image").show();
      $("#ping-pong").hide();
      $("#front-image").hide();
    }
  });
});
