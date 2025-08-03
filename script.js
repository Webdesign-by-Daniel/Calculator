//Add simple addEventListener to fulfill action on click 
const clickBtn = document.getElementById('click-me');

clickBtn.addEventListener('click', () => {
    console.log("Button clicked");
});

// Change content independently from HTML 
const output = document.getElementById('output');
output.textContent = '42';

// Add eventlistener to all buttons 
const numberButtons = document.querySelectorAll('.buttons button');

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.textContent);
        input.textContent = button.textContent; 
    });
});

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

const input = document.getElementById('input');
