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
var waitingForNextNumber = false; 
var result = '';

const digits = ['1','2','3','4','5','6','7','8','9','0'];
const operators = ['+', '-', '*', '/'];
const resultOperator = '=';

numberButtons.forEach((button) => {             // Eventlistener for clicking any button 
    button.addEventListener('click', () => {
        input.textContent += button.textContent; //whatever button we click is being shown in the input text 
        if(digits.includes(button.textContent)){ //check if the button clicked is part of numbers
            if(waitingForNextNumber === false){  //Loop 
                Number1 = '';
                Number1 += button.textContent;
                } else {
                    Number2 = '';
                    Number2 += button.textContent;
                    }
            } else if(operators.includes(button.textContent)){
                operator = button.textContent;
                waitingForNextNumber = true; 
                } else if(resultOperator.includes(button.textContent)) {
                    result = operate(Number1, operator, Number2);
                    output.textContent += ' ' + result; 
                    Number1 = result; 
                    Number2 = '0';
                    result = '';
                    output.textContent = Number1;
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


