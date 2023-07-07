const Calculator = require('./Calculator');
const calculator = new Calculator();
calculator.calculate('2 * 3 + 8');

console.log(calculator.getResult()); // Output: 15