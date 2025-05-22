//VOTING
function isEligibleToVote(age) {
    if (typeof age !== 'number' || age < 0) {
        return "Please enter a valid age.";
    }
    return age >= 18 ? "Eligible to vote." : "Not eligible to vote.";
}
console.log(isEligibleToVote(20));




//GREATER
function compareNumbers(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Please enter valid numbers.";
    }

    if (num1 > num2) {
        return `${num1} is greater than ${num2}.`;
    } else if (num1 < num2) {
        return `${num2} is greater than ${num1}.`;
    } else {
        return "Both numbers are equal.";
    }
}
console.log(compareNumbers(10, 20));




//POSITIVENEGATIVE
function checkNumber(num) {
    if (typeof num !== 'number') {
        return "Please enter a valid number.";
    }
    if (num > 0) {
        return "The number is positive.";
    } else if (num < 0) {
        return "The number is negative.";
    } else {
        return "The number is zero.";
    }
}
console.log(checkNumber(10));




//ODDEVEN
function checkOddOrEven(num) {
    if (typeof num !== 'number') {
        return "Please enter a valid number.";
    }
    if (num % 2 === 0) {
        return "The number is even.";
    } else {
        return "The number is odd.";
    }
}
console.log(checkOddOrEven(10));



//VALID INVALID
function containsLetterA(str) {
    if (typeof str !== 'string') {
        return "Please enter a valid string.";
    }
    if (str.includes('a') || str.includes('A')) {
        return "The string contains the letter 'a' or 'A'.";
    } else {
        return "The string does not contain the letter 'a' or 'A'.";
    }
}
console.log(containsLetterA("apple"));







//LONGER THAN 5
function isLongerThanFive(str) {
    if (typeof str !== 'string') {
        return "Please enter a valid string.";
    }
    if (str.length > 5) {
        return "The string is longer than 5 characters.";
    } else {
        return "The string is not longer than 5 characters.";
    }
}
console.log(isLongerThanFive("Hello"));









//BETWEEN ONE TEN
function isBetweenOneAndTen(num) {
    if (typeof num !== 'number') {
        return "Please enter a valid number.";
    }
    if (num > 1 && num < 10) {
        return "The number is between 1 and 10.";
    } else {
        return "The number is not between 1 and 10.";
    }
}
console.log(isBetweenOneAndTen(5));









//CONTAINS HELLO
function containsHello(str) {
    if (typeof str !== 'string') {
        return "Please enter a valid string.";
    }
    if (str.toLowerCase().includes("hello")) {
        return "The string contains the word 'hello'.";
    } else {
        return "The string does not contain the word 'hello'.";
    }
}
console.log(containsHello("Hello world!"));








//MULTIPLE OF 3
function isMultipleOfThree(num) {
    if (typeof num !== 'number') {
        return "Please enter a valid number.";
    }
    if (num % 3 === 0) {
        return "The number is a multiple of 3.";
    } else {
        return "The number is not a multiple of 3.";
    }
}
console.log(isMultipleOfThree(9));








//MULTIPLY BY 10
function multiplyByTen(number) {
  if (typeof number !== 'number') {
    return 'Input must be a number';
  }
  return number * 10;
}

console.log(multiplyByTen(5));
console.log(multiplyByTen('abc'));
