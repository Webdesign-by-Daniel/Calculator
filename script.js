// Change content independently from HTML 
const output = document.getElementById('output');

//Anzeige was man getippt hat 
const input = document.getElementById('input');

input.textContent = 'Input: ';
output.textContent = 'Result: ';

// Add eventlistener to all buttons 
const numberButtons = document.querySelectorAll('.buttons button');

var Number1 = '0'; 
var Number2 = '0'; 
var operator = ''; 
var operator_stored = '';
var waitingForNextNumber = false; 
var result = '';

const digits = ['1','2','3','4','5','6','7','8','9','0'];
const operators = ['+', '-', '*', '/'];
const resultOperator = '=';

numberButtons.forEach((button) => {             
    button.addEventListener('click', () => {
        input.textContent += button.textContent; 
        if(digits.includes(button.textContent)){ //check if the button clicked is part of numbers
            if(waitingForNextNumber === false){  
                Number1 += button.textContent;
                } else {
                    Number2 += button.textContent;
                    }
            } else if(operators.includes(button.textContent)){ //Clicking any operator
                if(operator == ''){ 
                    operator = button.textContent;
                    waitingForNextNumber = true; 
                    } else {
                        result = operate(Number1, operator, Number2);
                        input.textContent = result; 
                        Number1 = result; 
                        Number2 = '';
                        result = '';
                        waitingForNextNumber = true; 
                        operator = '';
                        input.textContent += button.textContent;
                    }
                operator = button.textContent;
                waitingForNextNumber = true; 
                } else if(resultOperator.includes(button.textContent)) { //Clicking '=' operator 
                    result = operate(Number1, operator, Number2);
                    output.textContent += ' ' + result; 
                    Number1 = result; 
                    Number2 = '';
                    result = '';
                    operator = '';
                    waitingForNextNumber = true; 
                    input.textContent = 'Input: ' + trim(Number1);
                    output.textContent = 'Result: ' + trim(Number1);
                } 
    });
});


//Clear Button 
const utility = document.getElementById('utility-buttons');
utility.addEventListener('click', () => {
    Number1 = 0;
    Number2 = 0; 
    result = '';
    waitingForNextNumber = false; 
    operator = '';
    input.textContent = 'Input: ';
    output.textContent = 'Result: ';
});


// Grundsätzliche Taschenrechner Operationen 
function operate(a, operator, b) {
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case '+': 
            return a + b; 
        case '-': 
            return a - b; 
        case '*': 
            return a * b; 
        case '/':
            return b === 0 ? 'Cannot divide by 0' : a / b; 
        default: 
        return 'Unknown Operator'; 
    }
}

//Kürzen von Dezimalpunkten 

function trim(a){
    a = Number(a);
    if(!Number.isInteger(a)){
        a = a.toFixed(2); 
    }
    return a; 
}




