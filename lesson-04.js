"use strict";

// Lesson 04 exercise: Operators and conditionals
// In your exercise repository, create a branch named `lesson-04-exercise` and switch to it,
// then open `lesson-04.js`, where the questions wait as comments. The file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// The file lists ten expressions that mix coercion, strict comparison, and logical
// combination, among them `3 === "3"`, `1 + true`, and `!(5 > 2)`. Write your predicted result
// as a comment beside each expression before running the file, then run it and correct any
// misses, leaving both the prediction and the actual result visible.

// * The provided expressions, write your prediction beside each before running:
console.log(3 === "3"); // prediction: false
console.log(3 == "3"); // prediction: true
console.log("5" - 1); // prediction: 4
console.log("5" + 1); // prediction: "51"
console.log(1 + true); // prediction: 2
console.log(10 >= 10); // prediction: true
console.log(!(5 > 2)); // prediction: false
console.log(4 !== "4"); // prediction: true
console.log("b" > "a"); // prediction: true
console.log(0 === -0); // prediction: true

// TODO: Part two.
// Write one `if` statement with an `else` branch on a variable of your choosing. Run the file
// twice with different values so that each branch has printed at least once, and record each
// run's output in a comment.

let orderCount = 15;

if (orderCount > 10) {
  console.log("Big bakery order!");
} else {
  console.log("Regular bakery order.");
}
// Run 1 output (orderCount = 5): "Regular bakery order."
// Run 2 output (orderCount = 15): "Big bakery order!"

// TODO: Part three.
// Build an `else if` chain for order pricing: more than 12 items produces one message, more
// than 6 another, and everything else a third. Run it with values that reach every branch, and
// add a comment explaining why the most specific question must be asked first.

let itemCount = 10;

if (itemCount > 12) {
  console.log("Bulk order discount for more than 12 items.");
} else if (itemCount > 6) {
  console.log("Medium order price for more than 6 items.");
} else {
  console.log("Standard price for 6 or fewer items.");
}
// The most specific question (itemCount > 12) must be asked first so that very large orders do not get caught by the more general > 6 condition.

// TODO: Part four.
// For each of the eight provided values, which include `0`, `"0"`, an empty string, and a
// single space, predict in a comment whether it is truthy or falsy. Verify each prediction
// with `Boolean()` and correct your misses.

// * The eight provided values:
const courtValues = [false, 0, "0", "", " ", "bread", null, undefined];

// Part four: truthy/falsy of courtValues

courtValues.forEach((value) => {
  console.log(value, Boolean(value)); // actual truthiness
});

// false       → falsy
// 0           → falsy
// "0"         → truthy (non-empty string)
// ""          → falsy (empty string)
// " "         → truthy (string with a space)
// "bread"     → truthy (non-empty string)
// null        → falsy
// undefined   → falsy

// TODO: Part five.
// Rewrite the provided day-based `if` chain as a `switch` statement with a `default` case and
// a `break` in every case, and confirm that it prints the same answers for three test days.

// Part five: day-based switch with default and break in every case

const day = "Sunday";

switch (day) {
  case "Saturday":
    console.log("Open 7:00 to 14:00");
    break;
  case "Sunday":
    console.log("Open 8:00 to 12:00");
    break;
  case "Monday":
    console.log("Closed today");
    break;
  default:
    console.log("Open 7:00 to 18:00");
    break;
}

// TODO: Part six.
// The file ends with a short broken program that contains an assignment where a comparison was
// intended, and a `switch` with a missing `break`. Run it, observe both incorrect behaviors,
// repair both, and describe each repair in one comment line.

// Part six: repaired shopStatus if and size switch

let shopStatus = "closed";

if (shopStatus === "open") {
  console.log("Welcome in");
} else {
  console.log("Shop is currently closed.");
}

const size = "M";

switch (size) {
  case "S":
    console.log("Small");
    break;
  case "M":
    console.log("Medium");
    break;
  case "L":
    console.log("Large");
    break;
  default:
    console.log("Unknown size");
    break;
}

// Repair 1: changed shopStatus = "open" to shopStatus === "open" so the if statement compares instead of assigning.
// Repair 2: added break after each switch case so only the correct size message is printed and there is no fall-through.

// TODO: Part seven.
// Two classic exercises close the lesson. First, the leap year checker: a year is a leap year
// when it is divisible by 4 and not by 100, unless it is also divisible by 400. Implement the
// rule with the remainder operator and logical operators, and test it against 2024, 1900, and
// 2000. Second, FizzBuzz for a single number: for one number variable, print Fizz when it is
// divisible by 3, Buzz when it is divisible by 5, FizzBuzz when it is divisible by both, and
// the number itself otherwise. The loops lesson scales this to one hundred.

// Part seven (a): leap year checker

function isLeapYear(year) {
  const divisibleBy4 = year % 4 === 0;
  const divisibleBy100 = year % 100 === 0;
  const divisibleBy400 = year % 400 === 0;

  return (divisibleBy4 && !divisibleBy100) || divisibleBy400;
}

// Test the rule against the given years:
console.log(2024, isLeapYear(2024)); // expected: true (divisible by 4, not by 100)
console.log(1900, isLeapYear(1900)); // expected: false (divisible by 100, not by 400)
console.log(2000, isLeapYear(2000)); // expected: true (divisible by 400)

// Part seven (b): single-number FizzBuzz

const n = 15; // change this value to test different numbers

const divisibleBy3 = n % 3 === 0;
const divisibleBy5 = n % 5 === 0;

if (divisibleBy3 && divisibleBy5) {
  console.log("FizzBuzz");
} else if (divisibleBy3) {
  console.log("Fizz");
} else if (divisibleBy5) {
  console.log("Buzz");
} else {
  console.log(n);
}

// Leap year rule explanation:
// A year is a leap year if it is divisible by 4 and not by 100, unless it is also divisible by 400.
// The extra divisibleBy400 condition allows years like 2000 to be leap years even though they are divisible by 100.

// FizzBuzz explanation:
// We first check divisibility by both 3 and 5 to print "FizzBuzz" for numbers like 15.
// Then we check only 3 for "Fizz", only 5 for "Buzz", and otherwise print the number itself.

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
