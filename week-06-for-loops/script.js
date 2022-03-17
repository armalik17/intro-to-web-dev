// Replace this speeh with your own.
// Notice the `` backticks, which let you split your string into multiple lines.
const speech = `Mother Earth gives her gifts for all to share
She gives them freely yet she's still aware
That things are changing perhaps for the worse 
How much more can she give if our future is cursed

It's way past time to put Mother Earth first 
To clean up the water before we all thirst 
To clean up the air before our lungs sicken 
To renew the soil and feel it quicken 

How long until the point of no return 
How much longer until we all finally learn 
That to this task we all must rise 
And stop abusing Mother Earth before she dies`;

// Remove punctuation from the speech. You might have to modify this if your
// speech contains other punctuation.
const speechPunctuationRemoved = speech.replace(',', '').replace('.', '').replace('?','');

// Use a regular expression to split the speech into individual words. You
// shouldn't need to change this, unless you want to split on characters other
// than whitespace.
const wordsArray = speechPunctuationRemoved.split(/\s+/);


// Displays words that have more than 5 characters.
function displayLongWords() {
  const longWordsElement = document.getElementById('long-words');

  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
   
    if(word.length > 5) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);
    }
  }
}

// Display short words 
function displayShortWords() {
  const shortWordsElement = document.getElementById('short-words');

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    
    if(word.length <= 3 ) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      shortWordsElement.appendChild(wordElement);
    }
  }
}

// Words start with the letter A 
function displayAword (str, letter) {
  const aWordsElement = document.getElementById('a-words');

  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    
    if(word.startsWith('a')) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      aWordsElement.appendChild(wordElement);
  
    }
  }
}


// Displays longest word 
function displayLongestWord() {
  const longWordestElement = document.getElementById('longestword');
  let longestwordLength = 0;
  let longestword = '';
  // Loop over every word in the array.
  for(let i = 1; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    if(word.length > longestwordLength) {
      longestwordLength = word.length;
      longestword = word;
    }
  }
  const wordElement = document.createElement('li');
      wordElement.innerText = longestword;
      longWordestElement.appendChild(wordElement);
}

// Every Three Words 

function displayThirdWords(){

  document.getElementById('<p>Multiples of 3: </p>');
  document.getElementById ('<ul>');

const thirdWordsElement = document.getElementById('thirdwords');
  
  for(let i= 3; i<=wordsArray.length; i += 3 ) {
    const word = wordsArray[i];
    console.log ('<li>'+ word + '</li>');

    
    const wordElement = document.createElement('li');
      wordElement.innerText = word;
      thirdWordsElement.appendChild(wordElement);
    }
  }
 

//Uncommon words 

function displayUncommonWords(){

let commonWords = [ 'the', 'be','to','To','of','and','And','a','in','that','have','I'];

let uncommonWordsElement = document.getElementById       ('uncommon-words');

  for(let word of wordsArray) {
    
if (!commonWords.includes(word)) {
  const wordElement = document.createElement( 'li');
  wordElement.innerText = word; 
  uncommonWordsElement.appendChild(wordElement);
    }
  }
}

let total = 0;
for (let number = 1; number <= 10; number++) {
  total += number;
}
console.log(total);

// TODO: Define your own functions here!

function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;
  
  displayLongWords();
  displayShortWords();
  displayAword();
  displayLongestWord ();
  displayUncommonWords ();
  displayThirdWords ();
  // TODO: Call your functions here!
}