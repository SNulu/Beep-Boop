function beepIn(input){
  var numbers = [];

  var numberStr = "";
  for (var i = 0; i < input; i++){
    numberStr=String(i);

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
  console.log(numbers);
  return numbers;
}
$(document).ready(function() {
  $("#formOne").submit(function(event){

    var input = $("#number").val();
    var output = beepIn(parseInt(input));

    $("#display").text(output).val();

    event.preventDefault();
  });
});
    //var number1 = parenInt($("number1")).val());
    //var number2 = parenInt($("number2")).val());
    //var number1 = parenInt($("number3")).val());

    //for (var )








//
  //  var listsArr = [];
    //for (var i = 1; i <= 5; i++){
  //    listsArr.push($("#item"+i).val());
  //  }
  //  listsArr = listsArr.map(function(grow){
    //return grow.toUpperCase();
    //})
    //listsArr = listsArr.sort();
    //for (var i = 0; i < listsArr.length; i++) {
    //  $("ul").append("<li>" +listsArr[i] +"</li>");
    //}
    //$(".form-group").toggle();
