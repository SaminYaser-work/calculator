const operands = document.querySelectorAll(".button-container.digit-btn"); //digits
const operators = document.querySelectorAll(".button-container.operator"); //operands
const equal = document.querySelectorAll(".button-container.equal");
const firstOperand = document.querySelector("[data-results-top]");
const secondOperand = document.querySelector("[data-results-bottom]");

//take input
//append to a string var
//display the string var
//when operator button pressed, set currentOperand, transfer the whole string to firstOperand display field
//secondOperand is empty
//take input for the second operator
//when equal or other operator is pressed again, show results in second display
//clear first display


class Calculator {
    constructor(firstOperand, secondOperand) {
        this.firstOperand = firstOperand;
        this.secondOperand = secondOperand;
        this.clear();
    }

    clear() {
        this.prevOperand = "";
        this.currentOperand = "";
        this.currentOperator = undefined;
    }

    showToDisplay(flag) {
        this.secondOperand.innerText = this.currentOperand; 
        if (this.currentOperator !== undefined && flag) {
            this.firstOperand.innerText = this.secondOperand.innerText + this.currentOperator;
            this.secondOperand.innerText = "";
            this.prevOperand = this.currentOperand;
            this.currentOperand = "";
        }
    }

    appendNumber(number) {
        if (this.currentOperand.length <= 10) {
            this.currentOperand += number;
        }
    }

    compute(operator) {
        this.currentOperator = operator;
    }
}

const calculator = new Calculator(firstOperand, secondOperand);

operands.forEach((elements) => {
    elements.addEventListener("click", () => {
        calculator.appendNumber(elements.innerText);
        calculator.showToDisplay();
    });
});

operators.forEach((elements) => {
    elements.addEventListener("click", () => {
       calculator.compute(elements.innerText);
       calculator.showToDisplay(true);
    });
});

equal.forEach((elements) => {
    elements.addEventListener("click", () => {
        console.log(elements.innerText);
    });
});
