// Change content independently from HTML 
const output = document.getElementById('output');
output.textContent = '42';

// Add eventlistener to all buttons 
const numberButtons = document.querySelectorAll('.buttons button');

var Number1 = ''; 
var Number2 = ''; 
var operator = ''; 
var waitingForNextNumber = false; 

const digits = ['1','2','3','4','5','6','7','8','9','0'];
const operators = ['+', '-', '*', '/'];

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.textContent);
        input.textContent += button.textContent; 

        if(digits.includes(button.textContent)){
            if(waitingForNextNumber === false){
                Number1 += button.textContent;
                console.log('Number 1 is: ', Number1);
                } else {
                    Number2 += button.textContent;
                    console.log('Number 2 is: ', Number2);
                    }
            } else if(operators.includes(button.textContent)){
                operator = button.textContent;
                waitingForNextNumber = true; 
                console.log('Chosen operator is: ', operator);
                } 
    });
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

//Anzeige was man getippt hat 
const input = document.getElementById('input');
