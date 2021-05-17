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

    showToDisplay() {
        if (this.firstOperand.innerText != "" || this.currentOperand != "") {
            this.secondOperand.innerText = this.currentOperand;
        } else {
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
        console.log(
            this.prevOperand,
            this.currentOperand,
            this.currentOperator
        );
        console.log(parseFloat(this.prevOperand));

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
        console.log(result);
        return result;
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
