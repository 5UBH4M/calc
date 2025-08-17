const display = document.getElementById("display");
const operators = ['+', '-', '/', '*'];

// Main function to display the expression and result
function appendToDisplay(value){
   
  if (["ERROR", "NaN", "Infinity"].includes(display.value)){
    clearDisplay();
  }
  
  switch(value){
    case 'AC' :
      clearDisplay();
      break;
    case 'DEL' :
      deleteLastCharacter();
      break;
    case '=' :
      calculateResult();
      break;
    case '+' :
    case '-' :
    case '*' :
    case '/' :
      handleOperatorInput(value);
      break; 
    case '.' :
      handlePeriodInput(value);
      break;
    default :
      display.value += value; 
  }
}
// a function to handle the repetition of the operators
function handleOperatorInput(value){
  const lastChar = display.value.slice(-1);
  if (operators.includes(lastChar)){
    deleteLastCharacter();
    display.value += value;
  }
  else{
    display.value += value;
  }
}
// A function to handledouble period
function handlePeriodInput(value){

  const lastOperatorIndex = Math.max(
    display.value.lastIndexOf('+'),
    display.value.lastIndexOf('-'),
    display.value.lastIndexOf('*'),
    display.value.lastIndexOf('/')
  );
  const currentDigits = display.value.slice(lastOperatorIndex+1);
  
  if (!currentDigits.includes('.')){
    display.value += value;
  }
}

// ----Helper functions----

// Clears the entire display
function clearDisplay() {
  display.value = "";
}
// Deletes the last character from the display
function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}
// Evaluates the mathematical expression
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
}
