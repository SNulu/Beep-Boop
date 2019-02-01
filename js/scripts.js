function beepIn(input){
  var numbers = [];

  var numberStr = "";

  for (var i = 0; i <= parseInt(input); i++){
    numberStr = String(i);

    if(numberStr.includes("3")){
        numbers.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (numberStr.includes("2")) {
        numbers.push("Boop!");
    } else if (numberStr.includes("1")){
        numbers.push("Beep!");
    } else {
      numbers.push(numberStr);
    }
  }
  numbers = numbers.join(' ');

  return numbers;
}


$(document).ready(function() {
  $("#formOne").submit(function(event){

    var input = $("#number").val();
    var output = beepIn(input);

    $("#display").text(output).val();


    $("#number").val("");
    event.preventDefault();
  });
});
