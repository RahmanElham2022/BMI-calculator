const btnEl = document.getElementById("btn");
const bmiValueEl = document.getElementById("info-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI(){
   const heightValue = document.getElementById("height").value/100;
   const weightValue = document.getElementById("weight").value;

   const bmiValue = weightValue/(heightValue * heightValue)
   console.log(bmiValue);
   bmiValueEl.value = bmiValue;
   if(bmiValue<18.5){
    weightConditionEl.innerText = "Under Weight";
   }else if(bmiValue>=18.5 && bmiValue<=24.9){
    weightConditionEl.innerText = "Normal Weight";
   }
   else if(bmiValue>=25 && bmiValue<=30){
    weightConditionEl.innerText = "Overweight";
   }
   else if(bmiValue>=30){
    weightConditionEl.innerText = "Obesity";
   }
  
    }
btnEl.addEventListener("click",calculateBMI);