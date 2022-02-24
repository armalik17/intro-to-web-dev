// When this function is called, it takes the user's answer to the first
// question and uses if statements to check whether it's correct.
function submitAnswerOne() {
  // Get answer one's input element
  const answerOneInput = document.getElementById('answer-one-input');
  // Get the text from answer one's input element
  const answerOne = answerOneInput.value;

  if(answerOne == 'blue') {
    alert("Yes! You know me so well.");
    hide('question-one');
    show('question-two');
  } else if(answerOne == 'green') {
    alert('Close, but my favorite color is the color of the sky');
  } else {
    alert('Wrong! Hint: My favorite color is the opposite of orange')
  }
}

function submitAnswerTwo() {
  // Get answer two's input element
  const answerTwoInput = document.getElementById('answer-two-input');
  // Get the number from answer two's input element
  const answerTwo = answerTwoInput.value;

  if(answerTwo == 'basketball') {
    alert(" Correct! GO VILLE");
    hide('question-two');
    show('question-three');
  } else if(answerTwo == 'tennis') {
    alert('No, but it is played on a court.');
  } else {
    alert('Wrong! Hint:There is an orange and black ball involved.')
  }
}

function submitAnswerThree() {
  // Get answer two's input element
  const answerThreeInput = document.getElementById('answer-three-input');
  // Get the number from answer two's input element
  const answerThree = answerThreeInput.value;

  if(answerThree == 3 ) {
    alert("Yes. The perfect amount!");
    hide('question-three');
    show('question-four');
  } else if(answerThree > 3 ) {
    alert('Not that many!');
  } else {
    alert('Wrong! Hint: The anwser rhymes with tree')
  }
}

function submitAnswerFour() {
  // Get answer two's input element
  const answerFourInput = document.getElementById('answer-four-input');
  // Get the number from answer two's input element
  const answerFour = answerFourInput.value;

  if(answerFour == 'fall' ) {
    alert("That's right!");
    hide('question-four');
    show('question-five');
  } else if(answerFour == 'summer') {
    alert('Almost');
  } else {
    alert('Wrong! Hint: The leaves change colors')
  }
}

function submitAnswerFive() {
  // Get answer two's input element
  const answerFiveInput = document.getElementById('answer-five-input');
  // Get the number from answer two's input element
  const answerFive = answerFiveInput.value;

  if(answerFive == 'hiking' || answerFive == 'yoga' || answerFive == 'gardening'|| answerFive == 'reading') {
    alert("Yes! I love that.");
    hide('question-five');
    show('done');
  } else if(answerFive == 'shopping') {
    alert('No. I do not like to spend money');
  } else {
    alert('Not exactly. It is something you can do outside' )
  }
}

// Helper function that takes an ID and shows the element with that ID.
function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}

// Helper  function that takes an ID and hides the element with that ID.
function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}