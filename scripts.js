//Initializes needed varaibles
let num1 = 12;
let num2 = 13;
let operator = '+';

//Creates a variable for textbox from the HTML
var calcNumsElement = document.getElementById('calcNums');

//Sets the value of the textbox to the initial number
calcNumsElement.value = num1;

//function for adding numbers
function add(){
    let result = 0;
    result = num1 + num2;
    calcNumsElement.value = result;
    return result;
}

//function for subtracting numbers
function subtract(){
    let result = 0;
    result = num1 - num2;
    calcNumsElement.value = result;
    return result;
}

//function for multiplying numbers
function multiply(){
    let result = 0;
    result = num1 * num2;
    calcNumsElement.value = result;
    return result;
}

//function for dividing numbers
function divide(){
    let result = 0;
    result = num1 / num2;
    calcNumsElement.value = result;
    return result;
}

//function to operate based on what is currently the operator value
function operate(){
    if (operator === '+'){
        return add();
    } else if (operator === '-'){
        return subtract();
    } else if (operator === '*'){
        return multiply();
    } else if (operator === '/'){
        return divide();
    }
}

//function to clear the calculator values
function clear(){
    num1 = 0;
    num2 = 0;
    operator = '';
    calcNumsElement.value = '';
}

document.getElementById("equals").addEventListener("click", operate);
//document.getElementById("clear").addEventListener("click", clear);
