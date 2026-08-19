"use strict";

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.

const croissant = {
  name: "butter croissant",
  price: 3.2,
  vegetarian: true,
  popularity: "high",
};

console.log(croissant.name); // dot notation
console.log(croissant.price); // dot notation

const key = "popularity";
console.log(croissant[key]); // bracket notation with variable key
// Brackets were required because the property name is stored in a variable, not written directly.

// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.

croissant.describe = function () {
  return `${this.name} costs €${this.price} and is ${this.vegetarian ? "vegetarian" : "not vegetarian"}.`;
};

console.log(croissant.describe());

// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.

const menu = [
  { name: "baguette", price: 2.5, vegetarian: true },
  { name: "ham sandwich", price: 4.2, vegetarian: false },
  { name: "vegan brownie", price: 3.0, vegetarian: true },
  { name: "espresso", price: 1.8, vegetarian: true },
  { name: "chicken salad", price: 6.5, vegetarian: false },
];

for (const item of menu) {
  console.log(`${item.name} – €${item.price} – vegetarian: ${item.vegetarian}`);
}

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.

// Vegetarian names with filter + map.
const vegetarianNames = menu
  .filter((item) => item.vegetarian)
  .map((item) => item.name);

console.log("Vegetarian items:", vegetarianNames);

// First item cheaper than 3 euros with find.
const cheapItem = menu.find((item) => item.price < 3);
console.log("First item cheaper than €3:", cheapItem);

// find returns null-equivalent: actually it returns undefined when nothing matches.

// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.

const sampleItem = menu[0];

const keys = Object.keys(sampleItem);
const values = Object.values(sampleItem);
const entries = Object.entries(sampleItem);

console.log("Keys:", keys);
console.log("Values:", values);

for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}

// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.

const secondName = sampleItem; // shared reference
secondName.price = 2.9; // change through secondName

console.log("sampleItem after change:", sampleItem);
// This shows the new price because both names point to the same object.

// Spread copy overriding only price.
const copiedItem = { ...sampleItem, price: 3.5 };

console.log("sampleItem original:", sampleItem);
console.log("copiedItem overridden:", copiedItem);
// They now differ only in the price property.

// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence =
  "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";

const words = sentence.split(" ");
const counter = {};

for (const word of words) {
  if (counter[word] === undefined) {
    counter[word] = 1;
  } else {
    counter[word] += 1;
  }
}

console.log("Word frequencies:", counter);

// Optional sort extension: entries ordered by most frequent first.
const sortedEntries = Object.entries(counter).sort((a, b) => b[1] - a[1]);
console.log("Sorted entries (most frequent first):", sortedEntries);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
