"use strict";

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.
const shopName = "Maison Sarah";
const openingHour = 9;
const closingHour = 18;
const welcomeMessage = `Welcome to ${shopName}! We are open from ${openingHour}:00 to ${closingHour}:00 today.`;

console.log(welcomeMessage);

// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.

// * The provided messy string:
const messy = "   Maison   Sarah bakery offers fresh bread daily.   ";
const cleanedBakery = messy
  .trim() // remove surplus spaces at both ends
  .replace("Maison   Sarah", "Maison Sarah") // fix extra spaces in the shop name
  .replace("fresh bread", "fresh pastry"); // example word replacement

console.log(cleanedBakery);

// Methods used:
// trim() – removed spaces at the start and end of the string.
// replace() – fixed the spacing in the shop name and changed one phrase.

// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.

// * The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
const flavorList = "rye,spelt,wheat,olive";

console.log(product.length); // length of the product string

const word = "Loaf";
const wordStart = product.indexOf(word);
console.log(wordStart); // position where "Loaf" begins

const loafSlice = product.slice(wordStart, wordStart + word.length);
console.log(loafSlice); // "Loaf"

const flavors = flavorList.split(",");
console.log(flavors); // ["rye", "spelt", "wheat", "olive"]

// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.

// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;

const finalPrice = netPrice * (1 + taxRate);
const finalPriceFormatted = finalPrice.toFixed(2); // format to two decimal places

const priceMessage = `The final price including tax is €${finalPriceFormatted}.`;
console.log(priceMessage);

// Formatting with toFixed(2) must come last because it turns the number into a string,
// and we need to do all numeric calculations before converting to a string.

// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.

// Random whole number from 1 to 6:
const randomOneToSix = Math.floor(Math.random() * 6) + 1;
console.log("Random number from 1 to 6:", randomOneToSix);
// Random whole number from 10 to 20:
const randomTenToTwenty = Math.floor(Math.random() * 11) + 10;
console.log("Random number from 10 to 20:", randomTenToTwenty);
// Adaptation explanation:
// We changed the range size to 11 (for the 11 possible integer values from 10 to 20)
// and added 10 so the smallest possible value is 10 instead of 1.

// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.

// Part six: using String.prototype.includes with the bakery

const bakeryMessage = "Maison Sarah bakery offers fresh bread daily.";

const hasBakeryWord = bakeryMessage.includes("bakery");
const hasCosmeticsWord = bakeryMessage.includes("cosmetics");

console.log("Contains 'bakery':", hasBakeryWord);
console.log("Contains 'cosmetics':", hasCosmeticsWord);

// String.prototype.includes() – checks whether a given substring appears anywhere in the string and returns true if it is found, otherwise false.

// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a lowercase username in the pattern of first
// initial followed by full last name, such as mmustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.

const firstName = "Sandra";
const lastName = "Kengne";

const firstInitial = firstName[0].toLowerCase(); // first character, lowercase
const lastNameLower = lastName.toLowerCase(); // full last name, lowercase

const username = `${firstInitial}${lastNameLower}`; // combine into one string
console.log("Generated username:", username);

const adjective = "crispy";
const noun = "baguette";
const verb = "danced";
const place = "inside Maison Sarah bakery";

const madLibsStory = `One ${adjective} ${noun} ${verb} all night ${place}.`;
console.log(madLibsStory);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
