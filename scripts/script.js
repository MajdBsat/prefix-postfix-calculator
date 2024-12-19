const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function evaluateExpression(){

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
