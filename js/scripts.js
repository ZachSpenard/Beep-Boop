
// Back end
function checkInput(nameInput,numInput) {
  if (isNaN(numInput)) {
    alert("Please enter a valid number.");
  }
  else if (numInput < 0) {
    alert("Please enter a positive number.");
  }
}
function loopThroughInput(numInput) {
  var outputArray = [];
  var beeping = "Beep!";
  var booping = "Boop!";
  var sorry = "I'm sorry Dave" + "I'm afraid I can't do that.";
    for (var i = 0; i <= numInput; i++) {
      userString = numInput.toString();
      if (i % 3 === 0 && i > 0) {
        outputArray.push(sorry);
      } else if (userString.includes("1")) {
        outputArray.push(booping);
      } else if (userString.includes("0")) {
        outputArray.push(beeping);
      } else {
        outputArray.push(i.toString());
        }
      }
      return outputArray;
  }
//User Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var nameInput = ($("#nameInput").val());
    var numInput = parseInt($("#numInput").val());
    $("#outPut").append("<p>[" + loopThroughInput(numInput) + "]<p>");
  });
});
