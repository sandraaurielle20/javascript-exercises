"use strict";

// Lesson 09 exercise: The DOM and forms
// In your exercise repository, create a branch named `lesson-09-exercise` and switch to it.
// This lesson works with two provided files: open `lesson-09.html` with Live Server and keep
// the DevTools Console open, and write all JavaScript in `lesson-09.js`, which the page
// already loads with `defer`. The questions wait as comments in the JavaScript file.

/// TODO: Part one.
// Log one sentence to the console, then log `document.title`, and confirm that both appear in
// the DevTools Console rather than in a terminal. In a comment, state what the `defer`
// attribute prevented.

console.log("DOM and forms lesson running."); // a simple sentence
console.log(document.title); // logs the page title
// defer prevented the script from running too early,
// so document.title was available once the HTML was parsed

// TODO: Part two.
// Select the page's `h1` with `querySelector` and replace its `textContent` with a label name
// of your choosing. Select the tagline by its class and change its text, then add the provided
// highlight class to it through `classList`.

// 1) Select the page's h1 and replace its textContent.
const heading = document.querySelector("h1");
heading.textContent = "Maison Sarah – Featured Artists";

// 2) Select the tagline by its class and change its text.
const tagline = document.querySelector(".tagline");
tagline.textContent = "Shuffle and sign up for our weekly playlist.";

// 3) Add the provided highlight class via classList.
tagline.classList.add("highlight");

// TODO: Part three.
// The file provides the artists as an array of objects. Loop over it, create an `article`
// containing an `h3` for the name and a `p` for the genre and total runtime, fill both through
// dot notation and a template literal, and append each finished card into the element that
// carries the cards class. Reload the page and confirm that five cards stand on it.

// * The artists, provided:
const artists = [
  { name: "Pinkfong", genre: "Children's music", total: "11:31" },
  { name: "Adriano Celentano", genre: "Italian pop", total: "20:52" },
  { name: "Asake", genre: "Afrobeats", total: "14:08" },
  { name: "Miyagi and Andy Panda", genre: "Hip-hop", total: "16:21" },
  { name: "Johnny Cash", genre: "Country", total: "15:40" },
];

// Find the container for the cards once.
const cardsSection = document.querySelector(".cards");

// Helper: build one card for a given artist and append to cardsSection.
function addArtistCard(artist) {
  const card = document.createElement("article");
  const title = document.createElement("h3");
  const info = document.createElement("p");

  title.textContent = artist.name;
  info.textContent = `${artist.genre} – total runtime ${artist.total}`;

  card.appendChild(title);
  card.appendChild(info);
  card.classList.add("card");

  cardsSection.appendChild(card);
}

// Build initial cards for all provided artists.
for (const artist of artists) {
  addArtistCard(artist);
}

// TODO: Part four.
// Add a sixth artist object of your own invention to the array and reload. Confirm that the
// sixth card exists, and state in a comment what you did not have to change, compared with the
// five hand-copied cards this course opened on.

artists.push({
  name: "Burna Boy",
  genre: "Afrobeats",
  total: "30:00",
});

// The sixth card exists because we only changed the data (artists),
// not the card-building code. The loop automatically handles new items.
addArtistCard(artists[artists.length - 1]);

// TODO: Part five.
// The page provides a button with the shuffle class and an element with the featured class. On
// click, pick a random artist using the random recipe with `Math.floor`, and write a featured
// sentence into the featured element with a template literal.

const shuffleButton = document.querySelector(".shuffle");
const featuredElement = document.querySelector(".featured");

shuffleButton.addEventListener("click", () => {
  // Pick a random index using Math.floor and Math.random.
  const index = Math.floor(Math.random() * artists.length);
  const artist = artists[index];

  // Build a featured sentence with a template literal.
  featuredElement.textContent =
    `${artist.name} – ${artist.genre} (total runtime ${artist.total}) ` +
    "is featured today at Maison Sarah.";
  featuredElement.classList.add("featured-artist"); // optional styling class
});

// TODO: Part six.
// The page provides a form with the signup class and a text input with the artist-name id. On
// submit, call `preventDefault` on the event, read the input's `value`, and, when the value is
// truthy, push a new artist object built from it into the array and append one new card for
// it, reusing your card-building code from part three, ideally as a function that both parts
// call. An empty submission does nothing; name in a comment which falsy value makes that check
// work. As a stretch, clear the input by assigning it an empty string after each successful
// addition.

const signupForm = document.querySelector(".signup");
const artistInput = document.querySelector("#artist-name");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // stop default reload/submit

  const name = artistInput.value.trim();

  if (!name) {
    // Empty submission does nothing; falsey value makes the check work.
    // name is falsey when the string is empty, so we skip adding.
    return;
  }

  // Build a new artist object from the input.
  const newArtist = {
    name,
    genre: "Unknown genre",
    total: "00:00",
  };

  // Push into the data array and add a new card.
  artists.push(newArtist);
  addArtistCard(newArtist);

  // Stretch: clear the input after success.
  artistInput.value = "";
});

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main. This is the final exercise of the course, and the reviewed merge closes it.
// TODO: Submit the link to the pull request for review.
