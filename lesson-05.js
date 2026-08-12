"use strict";

// Lesson 05 exercise: Functions
// In your exercise repository, create a branch named `lesson-05-exercise` and switch to it,
// then open `lesson-05.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Take the order pricing chain from the previous exercise, which the file provides again, and
// wrap it in a declared function that receives the order size as a parameter. Call the
// function with four different sizes and log each result.

function priceOrder(size) {
  if (size > 12) {
    console.log("Large order, call the bakery ahead");
  } else if (size > 6) {
    console.log("Medium order, ready in an hour");
  } else {
    console.log("Small order, walk right in");
  }
}
priceOrder(4); // Small order, walk right in
priceOrder(7); // Medium order, ready in an hour
priceOrder(12); // Small order, walk right in (because not > 12 and not > 6)
priceOrder(14); // Large order, call the bakery ahead

// TODO: Part two.
// Change the function so that it returns its message instead of printing inside the body, and
// move every `console.log` to the call site. Add a one-sentence comment on why the returning
// version is more reusable.
// Part two: pricing function that returns its message

function priceOrderMessage(size) {
  if (size > 12) {
    return "Large order, call the bakery ahead";
  } else if (size > 6) {
    return "Medium order, ready in an hour";
  } else {
    return "Small order, walk right in";
  }
}
console.log(priceOrderMessage(4));
console.log(priceOrderMessage(7));
console.log(priceOrderMessage(12));
console.log(priceOrderMessage(14));

// The returning version is more reusable because we can choose where and how to use the message
// (log it, store it, send it in a response) instead of always printing inside the function.

// TODO: Part three.
// The file provides two small declared helper functions. Convert the first into a function
// expression and the second into a one-line arrow function with an implicit return, and prove
// with logged calls that the behavior of both is unchanged.

const double = function (n) {
  return n * 2;
};
const shout = (text) => `${text.toUpperCase()}!`;
console.log(double(5)); // expected 10
console.log(shout("bakery")); // expected "BAKERY!"

// TODO: Part four.
// Give your pricing function a default parameter value, and log one call that supplies the
// argument and one call that relies on the default.

function priceOrderMessage(size = 4) {
  if (size > 12) {
    return "Large order, call the bakery ahead";
  } else if (size > 6) {
    return "Medium order, ready in an hour";
  } else {
    return "Small order, walk right in";
  }
}
console.log(priceOrderMessage(10)); // uses size 10 → Medium order, ready in an hour
console.log(priceOrderMessage()); // uses default size 4 → Small order, walk right in

// TODO: Part five.
// Write a function named `repeat` that receives a callback and a count, and calls the callback
// that many times using the counting pattern provided in the file's starter comments. Pass it
// an arrow function of your own and run it.

function repeat(callback, count) {
  let i = 1;
  while (i <= count) {
    callback(i); // call the callback, optionally passing the current iteration
    i = i + 1;
  }
}
// Arrow function callback: logs a message for each iteration
const logBakeryIteration = (n) => {
  console.log(`Baking batch number ${n} at Maison Sarah.`);
};

repeat(logBakeryIteration, 3); // should log three lines, for n = 1, 2, 3

// TODO: Part six.
// The file contains a short program with global, function, and block declarations, including
// one shadowed name. Before running it, write a comment predicting each logged line; then run
// it, correct your misses, and leave both prediction and result visible.

// Global shop name:
const shopName = "Maison Sarah";

function greet(customer) {
  // Shadowed name inside the function – this is allowed because it's a different scope
  const shopName = "The Corner Bakery";
  return `Welcome to ${shopName}, ${customer}`;
}

console.log(greet("Anna")); // prediction: "Welcome to The Corner Bakery, Anna"
console.log(shopName); // prediction: "Maison Sarah"

if (true) {
  const insideIf = "visible in here";
  console.log(insideIf); // prediction: "visible in here"
}
// console.log(insideIf);    // prediction: ReferenceError – insideIf is not defined outside the if block

// TODO: Part seven.
// Write the classic temperature converter as two functions, one converting Celsius to
// Fahrenheit and one converting back, each returning its result. Log a small table of three
// conversions in each direction, formatted with template literals and `toFixed`.

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Small table of three conversions each way:

const cTemps = [0, 20, 30];
cTemps.forEach((c) => {
  const f = celsiusToFahrenheit(c);
  console.log(`Celsius ${c.toFixed(1)}°C = ${f.toFixed(1)}°F`);
});

const fTemps = [32, 68, 86];
fTemps.forEach((f) => {
  const c = fahrenheitToCelsius(f);
  console.log(`Fahrenheit ${f.toFixed(1)}°F = ${c.toFixed(1)}°C`);
});

// TODO: Part eight.
// The file provides a line that throws a TypeError when run. Wrap it in `try` and `catch`, log
// a friendly sentence that contains the error's message, and log one further line after the
// block to prove the program survived.

try {
  const answer = 42;
  console.log(answer.toUpperCase());
} catch (error) {
  console.log(`Oops, something went wrong: ${error.message}`);
}

console.log("Program continued after handling the error.");

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
