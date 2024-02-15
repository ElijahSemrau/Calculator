//Initializes needed varaibles
let num1 = '';
let num2 = '';
let operator = '';

//Creates a variable for textbox from the HTML
var calcNumsElement = document.getElementById('calcNums');

//Sets the value of the textbox to the initial number
calcNumsElement.value = '';

//function for adding numbers
function add(){
    let result = 0;
    result = parseFloat(num1) + parseFloat(num2);
    calcNumsElement.value = result;
    return result;
}

//function for subtracting numbers
function subtract(){
    let result = 0;
    result = parseFloat(num1) - parseFloat(num2);
    calcNumsElement.value = result;
    return result;
}

//function for multiplying numbers
function multiply(){
    let result = 0;
    result = parseFloat(num1) * parseFloat(num2);
    calcNumsElement.value = result;
    return result;
}

//function for dividing numbers
function divide(){
    let result = 0;
    result = parseFloat(num1) / parseFloat(num2);
    calcNumsElement.value = result;
    return result;
}

//function to operate based on what is currently the operator value
function operate() {
    let result;
    switch (operator) {
        case '+':
            result = add(parseFloat(num1), parseFloat(num2));
            break;
        case '-':
            result = subtract(parseFloat(num1), parseFloat(num2));
            break;
        case '*':
            result = multiply(parseFloat(num1), parseFloat(num2));
            break;
        case '/':
            result = divide(parseFloat(num1), parseFloat(num2));
            break;
        default:
            result = NaN;
    }

    //Displays the result, clears the second number and operators, and resets the result to num1 as a string to continue the math
    calcNumsElement.value = result;
    num1 = result.toString();
    num2 = '';
    operator = '';
}

//function to clear the calculator values
function clear(){
    num1 = '';
    num2 = '';
    operator = '';
    calcNumsElement.value = '';
}

//Selects the current value and updates the textbox based on the value of the button pressed
function numChoice(buttonValue) {
    if (operator === '') {
        num1 += buttonValue;
        calcNumsElement.value = num1;
    } else {
        num2 += buttonValue;
        calcNumsElement.value = num2;
    }
}


//Creates a variable storing all of the elements with the classname "numbers"
var numbersElements = document.getElementsByClassName("numbers");

//Loops through each element, when the element is clicked, calls the numChoice button with the passthrough of the button value
for (var i = 0; i < numbersElements.length; i++) {
    numbersElements[i].addEventListener("click", function() {
        numChoice(this.textContent);
    });
}

document.getElementById("equals").addEventListener("click", operate);

//Creates a variable storing all of the elements with the classname "operators"
var operatorElements = document.getElementsByClassName("operators");

//Loops through each operator, updates the operator value when an operator button is clicked
for (var i = 0; i < operatorElements.length; i++) {
    operatorElements[i].addEventListener("click", function() {
        operator = this.textContent;
    });
}

//Assigns the clear button the clear function for button press
document.getElementById("clear").addEventListener("click", clear);
