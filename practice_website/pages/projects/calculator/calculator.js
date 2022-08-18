const display = document.querySelector('.display');
const upperDisplay = document.querySelector('#displayUpper')
const lowerDisplay = document.querySelector('#displayLower')
const inputButtons = document.querySelectorAll('input')
let currentInput = ''; //var for lower display input
let previousInput = ''; //var for upper display input
let operator = undefined; //operator var

//basic math functions called within operate function (line 27)

function add(a, b) { return a + b; }

function subtract(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) { return a / b; }

function operate(x, y, operator) {
    x = parseFloat(x);  //convert both displays to floats for operate function
    y = parseFloat(y);
    if(isNaN(x) || isNaN(y)) return;
    
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
            result = "Error";
        }
        else {
        result = divide(x, y);
        }
    }
if(result > 99999999999999999) {
    result = "Error";   //prevent giant numbers
}
return result;
}

function numberButton(number) {
    if(number === '.' && lowerDisplay.innerText.includes('.') || currentInput > 999999999999999) return;
        //prevent multiple decimals or numbers going outside of the display aka giant numbers
    if( lowerDisplay.innerText === '+' || 
        lowerDisplay.innerText === '-' || 
        lowerDisplay.innerText === '*' || 
        lowerDisplay.innerText === '/') 
        {   lowerDisplay.innerText = number.toString();
            currentInput = lowerDisplay.innerText;
        }       //prevents multiple operators being inserted in numbers
    else {
    currentInput = lowerDisplay.innerText + number.toString();  //number concactonation for input
    }
}

function displayUpdate () {
    if(currentInput === undefined) {    //ends loop of undefined input if users select equals followed by an operator
        currentInput = '';
    }
    if( lowerDisplay.innerText === '+' || 
        lowerDisplay.innerText === '-' || 
        lowerDisplay.innerText === '*' || 
        lowerDisplay.innerText === '/') 
        {return;} //prevents displays updating if only operator entered
    else {
    lowerDisplay.innerText = currentInput;
    upperDisplay.innerText = previousInput;
    }
}

function operatorButton (choice) {
    if(lowerDisplay.innerText === '' || currentInput === '' || currentInput === undefined) {
        operator = choice;
        lowerDisplay.innerText = operator;
        return;
    }    //prevent running code if either input or display is empty - prevents users pressing = button without any numbers inputted
            //sets display to operator if no numbers have been inputted
    
    if(previousInput !== '') {      //run operate if we have two values input and an operator
        previousInput = operate(previousInput, currentInput, choice);
        currentInput = '';
    }
    else {
    operator = choice;
    previousInput = currentInput + operator;    //store results to be placed in upper display via displayUpdate
    currentInput = '';
    }  //set current input to blanks
}

function clear () {
    currentInput = '';
    previousInput = '';
    operator = undefined;
    lowerDisplay.innerText = currentInput;
    upperDisplay.innerText = previousInput
}       //full clear function to set all variables to default perameters

function deleteNumber() {
    currentInput = currentInput.toString().slice(0, -1);
}       //delete last entered number

inputButtons.forEach(button => {button.addEventListener('click', () => {    //set to listen to any button press to reduce code lines
    if (button.classList.contains('numerical')) {   //number buttons
        numberButton(button.value);
    }       

    else if (button.classList.contains('operator')) {   //operator buttons exc equals
        operatorButton(button.value);
    }

    else if (button.classList.contains('equals')) {     //equals button
        currentInput = operate(previousInput, currentInput, operator)
            if(currentInput === undefined) {return}     //prevents users pressing equals multiple times to cause undefined input loop
            else {
                previousInput = currentInput;
                currentInput = '';
            }
    }

    else if (button.classList.contains('clear')) {      //clear button to set all inputs to default values
        clear();
    }

    else if (button.classList.contains('delete')) {     //delete last inputted numerical button
        deleteNumber();
    }

displayUpdate();    //run at the end of every button press to update innertext displays

    })
});



//write basic functions for add, subtract, multiply, divide, DONE
//create operator to call on these functions using 2 numbers and operator as argument DONE
//create buttons for 0-9, operators and equals sign. DONE
//create a screen to display result DONE
    //split display into upper and lower half. Lower half for active input, upper to show previous value and operator. DONE
//create a clear button DONE
//create on click to populate disply on button press with numbers DONE
//store first user number in variable DONE
//store operator selected by user DONE
//run second number and both stored values through the operate function DONE
    //slice off operator attached to current input DONE
//operate function to be activated on equals button press DONE

//allow input of multiple operators PARTIALLY DONE
    //multiple operators enabled but computes on operator press in. Look at potential fix to 'hold' an operator till second user entry.

//only compute pairs of numbers eg 2+7-4= should run as 2+7=9 9-4=5 DONE
//error message if dividing by 0 DONE
//round long decimals down ALTERNATIVE OPTION BELOW
    //Try and use CSS to have numbers flex within display to allow large number entry - DONE (caused webpage crash)
        //Disable giant numbers via javascript to prevent crashing page with giant number math. DONE
//disable = until two numbers and operator have been entered DONE

//EXTRA CREDIT
//enable a . to allow decimal numbers DONE
    //convert operate function values to work with floats DONE changed to parsefloat from parseint!
//disable . if one exists in a decimal to prevent 12.4.5.6 etc DONE
//add keyboard support
//add backspace button DONE aka delete button

//BUG FIXES
//Fixed bug when pressing equals multiple times would lead to currentInput being set to undefined
//Fixed bug when pressing equals followed by another operator would set currentInput to undefined
//Fixed bug where users could attempt to divide undefined by zero causing calculator to crash

//Fixed bug to prevent giant numbers being entered into calculator of more than 16 digits, this would flex the calculator and cause webpage crashing
//Fixed bug allowing multiple operators to be entered e.g.(3+33-333+33) by changing operators before entering numbers