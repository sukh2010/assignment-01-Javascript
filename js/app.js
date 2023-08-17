// Create a new speechSynthesis object
const synth = window.speechSynthesis;

// Select buttons and initialize text
const speakButton = document.querySelector('button');
const resetButton = document.getElementById('resetButton');
const nounButton = document.getElementById('nounButton');
const verbButton = document.getElementById('verbButton');
const adjectiveButton = document.getElementById('adjectiveButton');
const placeButton = document.getElementById('placeButton');
const generateButton = document.getElementById('generateButton');
const randomStoryButton = document.getElementById('randomStoryButton');
let textToSpeak = '';

// Arrays for word categories
const nouns = ['table','chair','pen','pencil','phone']; // Array of nouns
const verbs = ['run', 'jump', 'read', 'write', 'eat', 'sleep', 'dance']; // Array of verbs
const adjectives = ['happy', 'sad', 'beautiful', 'ugly', 'tall', 'short', 'smart']; // Array of adjectives
const places = ['beach', 'park', 'school', 'restaurant', 'mountain', 'library']; // Array of places

// Function to generate a random word from an array
function getRandomWord(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Event listeners for each button
nounButton.addEventListener('click', function () {
  textToSpeak += getRandomWord(nouns) + ' ';
});

verbButton.addEventListener('click', function () {
  textToSpeak += getRandomWord(verbs) + ' ';
});

adjectiveButton.addEventListener('click', function () {
  textToSpeak += getRandomWord(adjectives) + ' ';
});

placeButton.addEventListener('click', function () {
  textToSpeak += getRandomWord(places) + ' ';
});

generateButton.addEventListener('click', function () {
  speakNow(textToSpeak);
  document.getElementById('outputText').textContent = textToSpeak;
});

randomStoryButton.addEventListener('click', function () {
  textToSpeak = `${getRandomWord(nouns)} ${getRandomWord(verbs)} ${getRandomWord(adjectives)} ${getRandomWord(nouns)} ${getRandomWord(places)}`;
  speakNow(textToSpeak);
  document.getElementById('outputText').textContent = textToSpeak;
});

resetButton.addEventListener('click', function () {
  textToSpeak = '';
  document.getElementById('outputText').textContent = '';
});

// Function to speak the provided string
function speakNow(string) {
  const utterThis = new SpeechSynthesisUtterance(string);
  synth.speak(utterThis);
}
