// Back end
function checkInput(numInput){
  if (isNaN(numInput)) {
    alert("Please enter a valid number.");
  }
  else if (numInput < 0) {
    alert("Please enter a positive number.");
  }
}
function loopThroughInput(nameInput, numInput) {
  var outputArray = [];
  for (var i = 0; i <= 1; i++){
    if (numInput  % 3 == 0 && numInput > 0) {
      outputArray.push("I'm sorry, " + nameInput + ".  I'm afraid I can't do that.");
    }
    else if (numInput.toString().includes("1")) {
      outputArray.push("Boop!");
    }
    else if (numInput.toString().includes("0")) {
      outputArray.push("Beep!");
    }
    else {
      outputArray.push(parseInt(numInput));
    }
  }
  return outputArray;
  function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
}
//User Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var nameInput = ($("#nameInput").val());
    var numInput = ($("#numInput").val());
    // console.log(nameInput,numInput)
    output = loopThroughInput(nameInput, numInput);
    $("#outPut").text(output[0]);
  });
});
