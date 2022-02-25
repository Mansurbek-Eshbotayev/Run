var elForm = document.querySelector(".form");
var elUserInput = document.querySelector(".form__input");
var elResult1 = document.querySelector("result1");
var elResult2 = document.querySelector("result2");
var elResult2 = document.querySelector("result3");
var elResult2 = document.querySelector("result4");

elForm.addEventListener("submit", function(e){
  e.preventDefault()

  var elUserInputVal = elUserInput.value;
  var manSpeed =3.6;
  var baySpeed =20;
  var byCar =80;
  var byPlan =880;
  
  function man(){
    return elUserInputVal / manSpeed;
  }


  elResult1.textContent = Math.round (man()) + "soat" ;
  
})