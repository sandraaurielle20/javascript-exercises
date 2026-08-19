"use strict";

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.

const menu = ["baguette", "croissant", "sourdough", "muffin", "chocolate cake"];

console.log(menu); // whole array
console.log(menu[0]); // first item
console.log(menu[menu.length - 1]); // last item via length - 1
console.log(menu.length); // array length

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.

menu.push("walnut brownie"); // touch END (adds at end)
console.log(menu);

menu.unshift("espresso"); // touch START (adds at start)
console.log(menu);

menu.pop(); // touch END (removes last)
console.log(menu);

menu.shift(); // touch START (removes first)
console.log(menu);

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.

for (let i = 0; i < menu.length; i++) {
  console.log(`Counting for loop: ${i} -> ${menu[i]}`);
}

for (const item of menu) {
  console.log(`for...of loop: ${item}`);
}
// Counting for loop is useful when you need the index, while for...of is simpler when you only need the values.

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
const prices = [4.5, 12, 3.2, 8];

// 1) map: turn each number into a display string.
const priceLabels = prices.map((price) => `€${price.toFixed(2)}`);
console.log("Price labels from map:", priceLabels);

// 2) filter: keep items under five euros.
const cheapPrices = prices.filter((price) => price < 5);
console.log("Prices under €5 from filter:", cheapPrices);

// 3) find: first item over ten euros.
const firstExpensive = prices.find((price) => price > 10);
console.log("First price over €10 from find:", firstExpensive);

// forEach would have returned undefined, because it only loops and does not build a new array
// or single found value; that is the trap when you expect forEach to give you something back.

// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
];
for (const artist of artists) {
  console.log(`Artist: ${artist}`);
  console.log(`We’re playing a song by ${artist} today.`);
  console.log("---");
}

// Add one more artist to the data.
artists.push("Burna Boy");

// Run again: the same loop still works for the new artist.
// We did not have to change the loop; adding data was enough.
for (const artist of artists) {
  console.log(`Artist: ${artist}`);
  console.log(`We’re playing a song by ${artist} today.`);
  console.log("---");
}
// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.

// Same array, second reference:
const secondMenu = menu; // shared reference, not a copy

secondMenu.push("almond croissant");
console.log("menu after push on secondMenu:", menu);
console.log("secondMenu after push:", secondMenu);
// Both show the new item, because they point to the same array in memory.

// Now create a real copy with spread:
const copiedMenu = [...menu]; // new array with same items

copiedMenu.push("blueberry muffin");
console.log("length of original menu:", menu.length);
console.log("length of copiedMenu:", copiedMenu.length);
// The copied menu is longer, proving the original survived unchanged

// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];

// FizzBuzz from 1 to 100.
for (let n = 1; n <= 100; n++) {
  const isFizz = n % 3 === 0;
  const isBuzz = n % 5 === 0;

  if (isFizz && isBuzz) {
    console.log("FizzBuzz");
  } else if (isFizz) {
    console.log("Fizz");
  } else if (isBuzz) {
    console.log("Buzz");
  } else {
    console.log(n);
  }
}
// Sum of numbers without helpers.
let sum = 0;

for (const value of numbers) {
  sum += value;
}

console.log("Sum of numbers:", sum);
// Largest value without helpers.
let largest = numbers[0];

for (const value of numbers) {
  if (value > largest) {
    largest = value;
  }
}

console.log("Largest number:", largest);

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.

const word = "Racecar";
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversed += word[i];
}

console.log(`Original: ${word}`);
console.log(`Reversed: ${reversed}`);

// Count its vowels with a loop and `includes` against a vowels array.

const vowels = ["a", "e", "i", "o", "u"];
let vowelCount = 0;

for (let i = 0; i < word.length; i++) {
  const letter = word[i].toLowerCase();
  if (vowels.includes(letter)) {
    vowelCount++;
  }
}

console.log(`Vowel count in "${word}":`, vowelCount);
// Palindrome check using the reverser, ignoring case.

function isPalindrome(text) {
  const lower = text.toLowerCase();
  let reversedText = "";

  for (let i = lower.length - 1; i >= 0; i--) {
    reversedText += lower[i];
  }

  return lower === reversedText;
}

console.log("racecar ->", isPalindrome("racecar")); // true
console.log("Maison ->", isPalindrome("Maison")); // false
console.log("Level ->", isPalindrome("Level")); // true

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
