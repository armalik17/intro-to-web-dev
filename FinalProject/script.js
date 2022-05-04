function test() {
  // Get answer one's input element
  const answerOneInput = document.getElementById('answer-one-input');
  // Get the text from answer one's input element
const answerOne = answerOneInput.value;
  const showElements = document.getElementsByClassName("hidden");
  if(answerOne == 'Yes') {
    alert("That's great! Here's some reasons why...");}
  else if(answerOne == 'No') {
    alert('Oh no! You should learn more about sleep...');} 
  hide();
  for (i = 0; i < showElements.length; i++) {
      showElements[i].style.display = 'block';
    }
}
function hide() {
  // Hide the question
  const question = document.getElementById('question-one');
  question.style.display = 'none';
  question.style.border = 'none';
}