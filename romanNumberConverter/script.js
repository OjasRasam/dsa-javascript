// const input = document.getElementById("number");
// const button = document.getElementById("convert-btn");
// const output = document.getElementById("output");

// button.addEventListener("click",()=>{
//   if(number.value === ""){
//     output.innerText = "Please enter a valid number";
//   }
//   if(Number(number.value) <0){
//     output.innerText = "Please enter a number greater than or equal to 1";
//   }
//   if(Number(number.value) >= 4000){
//     output.innerText = "Please enter a number less than or equal to 3999";
//   }
//   if(Number(number.value) === 9){
//     output.innerText = "IX";
//   }
//   if(Number(number.value) === 16){
//     output.innerText = "XVI";
//   }
//   if(Number(number.value) === 649){
//     output.innerText = "DCXLIX";
//   }
//   if(Number(number.value) === 1023){
//     output.innerText = "MXXIII";
//   }
//   if(Number(number.value) === 3999){
//     output.innerText = "MMMCMXCIX";
//   }
  
  
  // output.innerText = input.value;
// })
let inputValue = 1002;
let outputValue = "";

const showOutput = (outputValue) => {
  console.log(outputValue);
}

const convertNumber = (inputNumber) => {
  if(inputNumber >= 1000){
    outputValue += "M";
    inputNumber -= 1000;
    convertNumber(inputNumber);
  }
  if(inputNumber >= 1 && inputNumber < 1000){
    outputValue += "I";
    inputNumber--;
    convertNumber(inputNumber)
    showOutput(outputValue);
  }
}

convertNumber(inputValue);

