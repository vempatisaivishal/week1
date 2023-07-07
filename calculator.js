/*
The this keyword in JavaScript is used to refer to the current instance of an object or class. It allows you to access properties and methods within the scope of the object or class.
*/
//this is like self in python
class Calculator {
    constructor() {
        this.result = 0;
    }

    add(number) {
        this.result += number;
    }

    subtract(number) {
        this.result -= number;
    }

    multiply(number) {
        this.result *= number;
    }

    divide(number) {
        this.result /= number;
    }

    clear() {
        this.result = 0;
    }

    getResult() {
        return this.result;
    }

    calculate(expression) {
        const parsedExpression = expression.replace(/\s+/g, ''); // Remove all whitespace characters from the expression
        const result = eval(parsedExpression); // Evaluate the expression using the eval function

        if (isNaN(result)) {
            throw new Error('Invalid expression');
        }

        this.result = result;
    }
}


const calculator = new Calculator();
calculator.calculate('2 * 3 + 9');

console.log(calculator.getResult()); // Output: 15