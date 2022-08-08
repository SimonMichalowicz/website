const display = document.querySelector('.display');
let inputValue1; //temp variable to be updated on each button press
let inputValue2 = null;
let operator;
const inputButtons = document.querySelectorAll('input')
display.innerText = ''; //by default calculator shows '0' in display

inputButtons.forEach(button => {button.addEventListener('click', () => {
    if (button.classList.contains('numerical')) {
        display.innerText = display.innerText + button.value; 
    } //if button is numerical allow multiple numbers to be entered
    //enter a condition to prevent more than 8 digits being entered

    else if (button.classList.contains('operator') && inputValue2 == null) {
        operator = button.value;
        inputValue1 = parseInt(display.innerText);
        inputValue2 = 0;
        display.innerText = '';
    }

    else if (button.classList.contains('operator')) {
        operator = button.value;
        inputValue2 = parseInt(display.innerText);
        display.innerText = operate(inputValue1, inputValue2, operator);
    }
    //else if operator store display.innerText in variable and...
    //operator wait for next button entry then run corresponding function?

    //function lastPress() {

    }
    //NEED TO - button on click triggers lastPress() function to work out if the last button press was a calculation using operate
    //if so wipe display before button press top stop eg 4 + 4 = 8 + 4 displays as 84 instead of 4.


    //else if reset
    //else if decimal
    })
});


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(x, y, operator) {

    if(operator === '+') {
         result = add(x, y);
    }
    else if(operator === '-') {
        result = subtract(x, y);
    }
    else if(operator === '*') {
        result = multiply(x, y);
    }
    else if(operator === '/') {
        if (x === 0 || y === 0) {
            result = "Error"
        }
        else {
        result = divide(x, y);
        }
    }
return result;
}


//write basic functions for add, subtract, multiply, divide, DONE
//create operator to call on these functions using 2 numbers and operator as argument DONE
//create buttons for 0-9, operators and equals sign. DONE
//create a screen to display result DONE
//create a clear button
//create on click to populate disply on button press with numbers DONE
//store first user number in variable
//store operator selected by user
//run second number and both stored values through the operate function
//operate function to be activated on equals button press
//allow input of multiple operators
//only compute pairs of numbers eg 2+7-4= should run as 2+7=9 9-4=5
//error message if dividing by 0
//round long decimals down
//disable = until two numbers and operator have been entered

//EXTRA CREDIT
//enable a . to allow decimal numbers
//disable . if one exists in a decimal to prevent 12.4.5.6 etc
//add keyboard support
//add backspace button