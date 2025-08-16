const display = document.getElementById("display");
const operators = ['+', '-', '/', '*'];

function toDisplay(n){
  let lastChar = display.value.slice(-1);
   
  if (display.value === "ERROR" || display.value === "NaN" || display.value === "Infinity"){
    clearDisplay();
  }
  
  switch(n){
    case "1": display.value += n; break;
    case "2": display.value += n; break;
    case "3": display.value += n; break;
    case "4": display.value += n; break;
    case "5": display.value += n; break;
    case "6": display.value += n; break;
    case "7": display.value += n; break;
    case "8": display.value += n; break;
    case "9": display.value += n; break;
    case "0": display.value += n; break;
    case "00": display.value += n; break;
    case "+": toHandleOperators(); display.value += n; break;
    case "/": toHandleOperators(); display.value += n; break;
    case "*": toHandleOperators(); display.value += n; break;
    case "-": toHandleOperators(); display.value += n; break;
    case ".": periodHandler(); break;
    case "=": toCalculate(); break;
    default : display.value = "ERROR";
  }

  // a function to handle the repetition of the operators
  function toHandleOperators(){
    if (operators.includes(n) && operators.includes(lastChar)){
      del();
    }
  }
  // a function to handle the period
  function periodHandler(){

    const lastOperatorIndex = Math.max(
      display.value.lastIndexOf('+'),
      display.value.lastIndexOf('-'),
      display.value.lastIndexOf('*'),
      display.value.lastIndexOf('/')
    );
    const currentDigits = display.value.slice(lastOperatorIndex+1);
    
    if (currentDigits.includes('.')){
      return
    }
    else{
      display.value += n;
    }
  }

}

function clearDisplay() {
  display.value = "";
}

function del() {
  display.value = display.value.slice(0, -1);
}

function toCalculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
}
