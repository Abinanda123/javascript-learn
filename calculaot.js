const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const calculate = (operation, a, b) => {
    return operation(a,b);
}
console.log(calculate(add, 5, 3)); 