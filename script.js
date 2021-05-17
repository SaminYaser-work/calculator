const operands = document.querySelectorAll(".button-container.digit-btn"); //digits
const operators = document.querySelectorAll(".button-container.operator"); //operands
const equal = document.querySelectorAll(".button-container.equal");
const firstOperand = document.querySelector("[data-results-top]");
const secondOperand = document.querySelector("[data-results-bottom]");
const clearAll = document.querySelector(".clearAll");

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
        this.firstOperand.innerText = "";
        this.secondOperand.innerText = "";
    }

    showToDisplay() {
        if (this.firstOperand.innerText != "" || this.currentOperand != "") {
            this.secondOperand.innerText = this.currentOperand;
        } else if (this.currentOperator != undefined) {
            this.secondOperand.innerText = "";
            this.firstOperand.innerText =
                this.prevOperand + this.currentOperator;
        }
    }

    chooseOperation(operation) {
        if (this.currentOperand == "") return;
        if (this.currentOperator != undefined) {
            this.currentOperand = this.compute();
            this.firstOperand.innerText = "";
            console.log(
                this.prevOperand,
                this.currentOperand,
                this.currentOperator
            );
        } else {
            this.currentOperator = operation;
            this.prevOperand = this.currentOperand;
            this.currentOperand = "";
            console.log(
                "else",
                this.prevOperand,
                this.currentOperand,
                this.currentOperator
            );
        }
    }

    appendNumber(number) {
        if (this.currentOperand.length <= 10) {
            this.currentOperand += number;
        }
    }

    compute(operator) {
        console.log("computing");
        let result;

        switch (this.currentOperator) {
            case "+":
                result =
                    parseFloat(this.prevOperand) +
                    parseFloat(this.currentOperand);
                break;
            case "-":
                result =
                    parseFloat(this.prevOperand) -
                    parseFloat(this.currentOperand);
                break;
            case "×":
                result =
                    parseFloat(this.prevOperand) *
                    parseFloat(this.currentOperand);
                break;
            case "/":
                result =
                    parseFloat(this.prevOperand) /
                    parseFloat(this.currentOperand);
                break;
            case "%":
                result =
                    parseFloat(this.prevOperand) %
                    parseFloat(this.currentOperand);
                break;
        }

        this.currentOperator = undefined;
        if (result) return result.toString();
        return "MATH ERROR";
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
        calculator.chooseOperation(elements.innerText);
        calculator.showToDisplay();
    });
});

equal.forEach((elements) => {
    elements.addEventListener("click", () => {
        calculator.chooseOperation(elements.innerText);
        calculator.showToDisplay();
    });
});

// clearAll.forEach((elements) => {
//     elements.addEventListener("click", () => {
//         calculator.clear();
//         calculator.showToDisplay();
//     });
// });

clearAll.addEventListener("click", () => {
    calculator.clear();
    calculator.showToDisplay();
});
