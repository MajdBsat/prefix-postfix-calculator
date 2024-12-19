const display = document.getElementById('display');
const darkModeButton = document.getElementById('darkModeToggle');

let result;

function isOperator(Op) {
    return ['+', '-', '*', '/'].includes(Op);
}

function appendToDisplay(value) {
    display.value += value;
}

function evaluateExpression(){
    const expression = String(display.value).trim();
    const temp = expression.split(/\s+/);
    if (!expression) {
        display.value = 'Error: Empty expression!';
        return;
    }
    try {
        if (isOperator(temp[0])) {
            result = evaluatePrefix(temp);
        } else {
            result = evaluatePostfix(temp);
        }
        display.value = result;
    } catch (error) {
        display.value = `Error: ${error.message}`;
    }
}

function evaluatePrefix(expression) {
    const stack = [];
    expression.reverse().forEach((op) => {
        if (!isNaN(op)) {
            stack.push(Number(op));
        } 
        else if (isOperator(op)) {
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            if (operand1 === undefined || operand2 === undefined) {
                throw new Error('Invalid prefix expression');
            }
            if (op === '+') {
                stack.push(operand1 + operand2);
            } 
            else if (op === '-') {
                stack.push(operand1 - operand2);
            } 
            else if (op === '*') {
                stack.push(operand1 * operand2);
            } 
                else if (op === '/') {
                stack.push(operand1 / operand2);
            }
        }
    });
    if (stack.length !== 1) {
      throw new Error('Invalid prefix expression');
    }
    return stack.pop();
}

function evaluatePostfix(expression) {
    const stack = [];
    expression.forEach((op) => {
    if (!isNaN(op)) {
        stack.push(Number(op));
    } 
    else if (isOperator(op)) {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        if (operand1 === undefined || operand2 === undefined) {
          throw new Error('Invalid postfix expression');
        }
        if (op === '+') {
            stack.push(operand1 + operand2);
        } 
        else if (op === '-') {
            stack.push(operand1 - operand2);
        } 
        else if (op === '*') {
            stack.push(operand1 * operand2);
        } 
            else if (op === '/') {
            stack.push(operand1 / operand2);
        }
    }
});
    if (stack.length !== 1) {
      throw new Error('Invalid postfix expression');
    }
    return stack.pop();
}

function clearDisplay() {
    display.value = '';
}

darkModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      darkModeButton.textContent = 'Let There Be Light';
    } else {
      darkModeButton.textContent = 'Let There Be Darkness';
    }
});

document.getElementById('button1').addEventListener('click', () => appendToDisplay('1'));
document.getElementById('button2').addEventListener('click', () => appendToDisplay('2'));
document.getElementById('button3').addEventListener('click', () => appendToDisplay('3'));
document.getElementById('button4').addEventListener('click', () => appendToDisplay('4'));
document.getElementById('button5').addEventListener('click', () => appendToDisplay('5'));
document.getElementById('button6').addEventListener('click', () => appendToDisplay('6'));
document.getElementById('button7').addEventListener('click', () => appendToDisplay('7'));
document.getElementById('button8').addEventListener('click', () => appendToDisplay('8'));
document.getElementById('button9').addEventListener('click', () => appendToDisplay('9'));
document.getElementById('button0').addEventListener('click', () => appendToDisplay('0'));
document.getElementById('buttonAdd').addEventListener('click', () => appendToDisplay('+'));
document.getElementById('buttonSub').addEventListener('click', () => appendToDisplay('-'));
document.getElementById('buttonMul').addEventListener('click', () => appendToDisplay('*'));
document.getElementById('buttonDiv').addEventListener('click', () => appendToDisplay('/'));
document.getElementById('buttonSpace').addEventListener('click', () => appendToDisplay(' '));
document.getElementById('buttonClear').addEventListener('click', clearDisplay);
document.getElementById('buttonEquals').addEventListener('click', evaluateExpression);