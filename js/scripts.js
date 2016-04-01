//business logic
var pingPong = function(userInput) {
  for (index = 1; index <= userInput; index += 1) {
    if ((index % 15) === 0) {
      $(".result").append("<li> Ping Pong! </li>");
    } else if ((index % 3) === 0) {
      $(".result").append("<li> Ping </li>");
    } else if ((index % 5) === 0) {
      $(".result").append("<li> Pong </li>");
    } else {
      $(".result").append("<li>"+ index + "</li>");
    }
  }
}
//user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#input").val());
    var result = pingPong(userInput);

    $("#result").show();
    $("#front-image").hide();
  });
});
