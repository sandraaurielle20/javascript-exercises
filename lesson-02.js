"use strict";

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.

const shopName = "SaMa Beauty Corner"; // const because the shop name does not change
const openingHours = 9; // const because opening time is fixed
let dailyCustomers = 0; // let because the number of customers changes during the day
let lipstickStock = 120; // let because stock changes with sales and deliveries
let discountPercentage = 10; // let because discounts can be updated for promotions

console.log(shopName);
console.log(openingHours);
console.log(dailyCustomers);
console.log(lipstickStock);
console.log(discountPercentage);

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.

console.log(typeof shopName); // "string"
console.log(typeof openingHours); // "number"
console.log(typeof dailyCustomers); // "number"
console.log(typeof lipstickStock); // "number"
console.log(typeof discountPercentage); // "number"

console.log(typeof null); // famous historical bug: returns "object"
console.log(typeof undefined); // "undefined"

// The fact that typeof null is "object" is a famous historical bug in JavaScript because null is already an object.

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.

let notAssigned;
let emptyValue = null;

console.log(notAssigned); // logs undefined
console.log(typeof notAssigned); // "undefined"

console.log(emptyValue); // logs null
console.log(typeof emptyValue); // "object" (historical bug)

// notAssigned is undefined because we never gave it a value; emptyValue is null because we explicitly set it to "nothing" on purpose.

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

const priceNumber = Number(priceText);
const countNumber = Number(countText);
const flagBoolean = Boolean(flagText); // note: any non-empty string becomes true

const myNumber = 25;
const myNumberText = String(myNumber);

console.log(priceNumber, typeof priceNumber); // 4.5, "number"
console.log(countNumber, typeof countNumber); // 12, "number"
console.log(flagBoolean, typeof flagBoolean); // true, "boolean"
console.log(myNumberText, typeof myNumberText); // "25", "string"
// Converting priceText or countText with Number() would produce NaN if the string was not a clean numeric value.

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// This broken program crashes on purpose, one error at a time.
// Keep it commented until you reach this part, then uncomment and repair:

let bakeryName = "Maison Sarah"; // changed const to let because we plan to reassign it
bakeryName = "The Corner Bakery"; // corrected: use const for the reassignment
let openingHour = 7; // declare openingHour before assigning
let loafCount = 12; // declare loafCount before using it
console.log(loafCount);
// Repair 1: changed bakeryName from const to let so it can be reassigned.
// Repair 2: declared openingHour with let before assigning to it.
// Repair 3: declared loafCount before logging it so it exists when console.log runs.

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.

let a = "lipstick";
let b = "foundation";
console.log("Before swap:", a, b);

let temp = a; // store a in temp
a = b; // put b into a
b = temp; // put temp (old a) into b

console.log("After swap:", a, b); // proves the swap succeeded

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
