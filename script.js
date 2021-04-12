const startButton= document.getElementById('startQuiz');
const topScores= document.getElementById('highScores');

const questions = [
    {
      // array position 0
      question : "1. How do you write 'Hello World!' in an alert box?",
      options: ['alertbox(Hello World!)', 'box=Hello World!', 'alert("Hello World")', 'helloWorld= alertBox'],
      answer: 'alert("Hello World")'
    },
    {
      // array position 1
      question : "2. How do you create a function?",
      options: ['createFunction', 'function = myNewFunction', 'myFunction:function', 'function myFunction'],
      answer: 'function myFunction'
    },
    {
      // array position 2
      question : "3. How do you call a function named 'my function'?",
      options: ['myFunction()', 'callMyFunction=Function', 'myFunctionName', 'MYfunction=name}'],
      answer: 'myFunction()'
    },
    {
      // array position 3
      question : "4. What is the correct way to write a Javascript Array?",
      options: ['array birds=[pigeon, parrot, duck, owl]', 'var birds=["pigeon", "parrot", "duck", "owl"]', '(array birds=pigeon, parrot, duck, owl",',  'birds=pigeon, parrot, duck, owl,'],
      answer: 'var birds=["pigeon", "parrot", "duck", "owl"]'
    }
 ]

startButton.addEventListener('click', commenceQuiz);
var currentIndex = 0;
// quiz functions
function commenceQuiz() {
    //hiding start button once quiz has started using CSS .hide display none
    startButton.classList.add('hide')
    topScores.classList.add('hide')
    showAnswerButtons()
    showTimerButton()
    displayQuestion()
    //execute timer function goes here which gets invoked here
    var sec = 15;
    var time = setInterval(myTimer, 1000);
    function myTimer() {
    document.getElementById('timer').innerHTML = sec;
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("TIME OUT!");
    }
}
}  

const timerDisplay= document.getElementById('timer')
function showTimerButton() {
  timerDisplay.style.display="block"
}

const answerButtons= document.getElementById('answerbuttons')
function showAnswerButtons() {
  answerButtons.style.display="block"
} 
function displayQuestion() {
    presentQuestion = questions[currentIndex]; //change from 0 to something that includes all questions
    var questionDiv= document.getElementById('questions')
    questionDiv.textContent = presentQuestion.question
    var options = presentQuestion.options;
    console.log(options)
    // i++ add 1 to itself
    for (let i = 0; i < options.length; i++) {
        const userOption = options[i];
        button = document.querySelector("#option" + i)
        button.textContent = userOption;
    }
}

var option0 = document.getElementById("option0")
var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var option3 = document.getElementById("option3")

option0.addEventListener('click', validateAnswer);
option1.addEventListener('click', validateAnswer);
option2.addEventListener('click', validateAnswer);
option3.addEventListener('click', validateAnswer);

//comnpare objects answer to what user answer selected in options
function validateAnswer(eventObject) {
    var selectedAnswer = eventObject.target;
    //if correct display correct answer and load next question
    if (questions[currentIndex].answer === selectedAnswer.textContent) {
    console.log("correct")
    }
    else {
        //if incorrect reduce time and go to next question
        console.log("incorrect")
    }
    //load next question
    currentIndex++;
    if (currentIndex < questions.length){
        displayQuestion();
    }
    else {
        console.log("this is the end")
        //load score
    }
}