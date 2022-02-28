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

  
  

  if(elUserInputVal <= 0 || isNaN(elUserInputVal)){
    elResult1.textContent = "Raqam kiriting!"
    elResult2.textContent = "Raqam kiriting!"
    elResult3.textContent = "Raqam kiriting!"
    elResult4.textContent = "Raqam kiriting!"

    elResult1.classList.add("result-error");
    elResult2.classList.add("result-error");
    elResult3.classList.add("result-error");
    elResult4.classList.add("result-error");

    elResult1.classList.remove("result-success");
    elResult2.classList.remove("result-success");
    elResult3.classList.remove("result-success");
    elResult4.classList.remove("result-success");
    return
  }
  else{
    elResult1.classList.remove("result-error");
    elResult2.classList.remove("result-error");
    elResult3.classList.remove("result-error");
    elResult4.classList.remove("result-error");

    elResult1.classList.add("result-success");
    elResult2.classList.add("result-success");
    elResult3.classList.add("result-success");
    elResult4.classList.add("result-success");
    
  }
  


  elResult1.textContent = Math.round (man(elUserInputVal,manSpeed)) + "soat" ;
  elResult2.textContent = Math.round (man(elUserInputVal,baySpeed)) + "soat" ;
  elResult3.textContent = Math.round (man(elUserInputVal,byCar)) + "soat" ;
  elResult4.textContent = Math.round (man(elUserInputVal,byPlan)) + "soat" ;
  
})