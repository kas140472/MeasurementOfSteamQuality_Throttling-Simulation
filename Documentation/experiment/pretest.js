
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

const myQuestions = [
  {
    question: "“The quality of saturated vapour is 100%”. Indicate whether this statement is",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a"
  },

  {
    question: "Given that h<sub>fg</sub> = 1716.2 kJ/kg, h<sub>f</sub> = 1085.36 kJ/kg, find the value of h<sub>g</sub>.",
    answers: {
      a: "630.84 kJ/kg",
      b: "2800.43 kJ/kg",
      c: "2801.56 kJ/kg",
      d: "629.21 kJ/kg"
    },
    correctAnswer: "c"
  },

  {
    question: "For a substance in the single-phase region,",
    answers: {
      a: "both pressure and temperature are independent properties",
      b: "if pressure is given, the temperature gets fixed",
      c: "none of the above",
      d: "both a and b"
    },
    correctAnswer: "a"
  },
  {
    question: "Given that h2 = 2517.66 kJ/kg, h<sub>f</sub> = 1493.4 kJ/kg, h<sub>fg</sub> = 1191.0 kJ/kg, find the quality of steam.",
    answers: {
      a: "2",
      b: "0.86",
      c: "0.99",
      d: "0.43"
    },
    correctAnswer: "b"
  },
  {
    question: "In the throttling process",
    answers: {
      a: "h2 = h1 + h<sub>fg</sub>",
      b: "h1 = h2",
      c: "h1 = h2/h<sub>fg</sub>",
      d: "none of the above"
    },
    correctAnswer: "b"
  },
  {
    question: "Steam flows in a pipeline at 1.5 MPa. After expanding to 0.1 Mpa in a throttling calorimeter, the temperature is found to be 120 °C. Find the quality of steam in the pipeline.",
    answers: {
      a: "0.96",
      b: "0.99",
      c: "0",
      d: "0.36"
    },
    correctAnswer: "a"
  }
];





// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
