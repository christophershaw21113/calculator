let display = document.querySelector("#display");
let num1 = "";
let num2 = "";
let op = "";

function press(num) {
    num1 += num;
    display.innerHTML = num1;
    console.log(num);
}


function setOP(key) {
    op = key;
    num2 = num1;
    num1 = "";
    display.innerHTML = op;
    console.log('pressed operator');
}

function clr() {
    num1 = "";
    num2 = "";
    op = "";
    display.innerHTML = "0";
    console.log('cleared calculator');
}

function calculate() {
    let a = parseFloat(num2);
    let b = parseFloat(num1);
    let result = 0;
    switch (op) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
    }
    num1 = result;
    op = "";
    display.innerHTML = result;
}