var elForm = document.querySelector(".form");
var elUserInput = document.querySelector(".form__input");
var elResult1 = document.querySelector(".result1");
var elResult2 = document.querySelector(".result2");
var elResult3 = document.querySelector(".result3");
var elResult4 = document.querySelector(".result4");

function man(number,speed){
    return number / speed;
  }

elForm.addEventListener("submit", function(e){
  e.preventDefault()

  var elUserInputVal = elUserInput.value;
  var manSpeed =3.6;
  var baySpeed =20;
  var byCar =80;
  var byPlan =880;
  
  


  elResult1.textContent = Math.round (man(elUserInputVal,manSpeed)) + "soat" ;
  elResult2.textContent = Math.round (man(elUserInputVal,baySpeed)) + "soat" ;
  elResult3.textContent = Math.round (man(elUserInputVal,byCar)) + "soat" ;
  elResult4.textContent = Math.round (man(elUserInputVal,byPlan)) + "soat" ;
  
})