Q1
const square = num => num * num;

Q2
const cube = num => num ** 3;

Q3
const checkEvenOdd = num => num % 2 === 0 ? "Even" : "Odd";




Q4
const greet = name => Hello, ${name};

Q5
const sqrt = num => Math.sqrt(num);




Q6
const sum = function(a, b) {
  return a + b;
};




Q7

function operate(a, b, func) {
  return func(a, b);
}
const add = (x, y) => x + y;
console.log(operate(5, 3, add));
8




Q8
(() => {
  console.log("IIFE executed!");
})();

Q9
((num) => {
  const factorial = n => (n <= 1 ? 1 : n * factorial(n - 1));
  console.log(Factorial of ${num} is ${factorial(num)});
})(5);