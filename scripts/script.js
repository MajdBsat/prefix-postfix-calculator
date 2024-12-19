const display = document.getElementById('display');
let result;

function isOperator(Op) {
    return ['+', '-', '*', '/'].includes(Op);
}

function appendToDisplay(value) {
    display.value += value;
}

function evaluateExpression(){
    const expression = display.value.trim();
    if (!expression) 
        return;
    try{
        result = evaluatePrefix(expression);
        display.value = result;
    }
    catch (error){
        display.value = 'Wrong Expression Sequence';
    }
}

function evaluatePrefix(expression) {
    const Ops = expression.split('').reverse(); 
    const stack = [];

    Ops.forEach((Op) => {
        if (!isNaN(Op)) {
            stack.push(Number(Op));
        } 
        else if (isOperator(Op)) {
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            if (operand1 === undefined || operand2 === undefined) {
                throw new Error('Invalid prefix expression');
            }
            if (Op === '+') {
                stack.push(operand1 + operand2);
            } 
            else if (Op === '-') {
                stack.push(operand1 - operand2);
            } 
            else if (Op === '*') {
                stack.push(operand1 * operand2);
            } 
                else if (Op === '/') {
                stack.push(operand1 / operand2);
            }
        }
    });

    if (stack.length !== 1) {
      throw new Error('Invalid prefix expression');
    }
    return stack.pop();
}

function clearDisplay() {
    display.value = '';
}

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
document.getElementById('buttonClear').addEventListener('click', clearDisplay);
document.getElementById('buttonEquals').addEventListener('click', evaluateExpression);
