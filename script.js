let display = document.getElementById("display")

function toDisplay(n){
    display.value += n
}

function clearDisplay(){
    display.value = ""
}

function del(){
    display.value = display.value.slice(0, -1)
}


function toCalculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "ERROR"
    }
}