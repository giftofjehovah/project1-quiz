console.log('start');

function Question (question, answers, correctAnswerIndex) {
  this.question = question;
  this.choices = answers;
  this.correctAnswer = correctAnswerIndex;
}

var question0 = new Question('Lightning never strikes in the same place twice.', ['True', 'False'], 1);
var question1 = new Question('Water spirals down the plughole in opposite directions in the northern and southern hemispheres.', ['True', 'False'], 1);
var question2 = new Question('If you cry in space the tears just stick to your face.', ['True', 'False'], 0);
var question3 = new Question('If you cut an earthworm in half, both halves can regrow their body.', ['True', 'False'], 1);
var question4 = new Question('Humans can distinguish between over a trillion different smells.', ['True', 'False'], 0);
var question5 = new Question('Adults have fewer bones than babies do.', ['True', 'False'], 0);
var question6 = new Question('Napoleon Bonaparte was extremely short.', ['True', 'False'], 1);
var question7 = new Question('Goldfish only have a memory of three seconds.', ['True', 'False'], 1);

var quiz = {
  currentQuestion: 0,
  questions: [question0, question1, question2, question3, question4, question5, question6, question7],
  isGameOver: false,
  player1Points: 0,
  player2Points: 0
};

// return an integer that is the number of questions in a game
function numberOfQuestions () {
  return quiz.questions.length;
}

// return an integer that is the zero-based index of the current question in the quiz
function currentQuestion () {
  return quiz.currentQuestion;
}

// return an integer that is the zero-based index the correct answer for the currrent question
function correctAnswer () {
  return quiz.questions[quiz.currentQuestion].correctAnswer;
}

// return an integer that is the number of choices for the current question
function numberOfAnswers () {
  return quiz.questions[quiz.currentQuestion].choices.length;
}

// take a single integer, which specifies which choice (true or false) the current player wants to make
// return a boolean true/false if the answer is correct
function playTurn (choice) {
  if (isGameOver()) return false;
  if (choice === correctAnswer()) {
    var x = true;
    if (quiz.currentQuestion % 2 === 0) {
      quiz.player1Points++;
    } else if (quiz.currentQuestion % 2 !== 0) {
      quiz.player2Points++;
    }
  }
  if (choice !== correctAnswer()) {
    x = false;
  }
  quiz.currentQuestion++;
  if (currentQuestion() === numberOfQuestions()) {
    quiz.isGameOver = true;
  }
  return x;
}

// return a true or false if the quiz is over
function isGameOver () {
  if (whoWon()) {
    return true;
  }
  return false;
}

// return 0 if the game is not over
// return 1 if player 1 won
// return 2 if player 2 won
// return 3 if its a draw
function whoWon () {
  if (!quiz.isGameOver) return 0;
  if (quiz.player1Points > quiz.player2Points) return 1;
  if (quiz.player2Points > quiz.player1Points) return 2;
  if (quiz.player1Points === quiz.player2Points) return 3;
}

function restart () {
  quiz.currentQuestion = 0;
  quiz.isGameOver = false;
  quiz.player1Points = 0;
  quiz.player2Points = 0;
}

// =========== jquery starts here ========================================================
var words = $('#words');
var buttonTrue = $('#true');
var buttonFalse = $('#false');

function updateDisplay () {
  words.text(quiz.questions[quiz.currentQuestion].question);
}

updateDisplay();
