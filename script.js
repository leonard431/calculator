let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let result = document.getElementById("result");

let addButton = document.getElementById("add");
let subtractButton = document.getElementById("subtract");
let multiplyButton = document.getElementById("multiply");
let divideButton = document.getElementById("divide");


function calculate(operator) {
    let num1 = Number(firstNumber.value);
    let num2 = Number(secondNumber.value);

    if (operator === "add") {
        result.textContent = num1 + num2;
    }

    else if (operator === "subtract") {
        result.textContent = num1 - num2;
    }

    else if (operator === "multiply") {
        result.textContent = num1 * num2;
    }

    else if (operator === "divide") {
        if (num2 === 0) {
            result.textContent = "Cannot divide by zero";
        } else {
            result.textContent = num1 / num2;
        }
    }
}


addButton.addEventListener("click", function() {
    calculate("add");
});

subtractButton.addEventListener("click", function() {
    calculate("subtract");
});

multiplyButton.addEventListener("click", function() {
    calculate("multiply");
});

divideButton.addEventListener("click", function() {
    calculate("divide");
});