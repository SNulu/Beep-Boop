function beepIn(input){
  var numbers = [];
  if(input >= 3)
  {
    while(input >= 3)
  {
    numbers.push("I'm Sorry, Dave. I'm afraid I can't do that");
    }
  }

// if (input >= 2) {
//  ( input)
//}






numbers = numbers.join('');
  console.log(numbers);
  return numbers;
}
$(document).ready(function() {
  $("#formOne").submit(function(event){

    var input = $("#number1").val();
    var input = beepIn(parseInt(input));
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
